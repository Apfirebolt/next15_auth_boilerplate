// app/api/auth/register/route.js

import ConnectDB from '@/DB/connectDB';
import User from '@/models/User';
import Joi from 'joi';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().required(),
});

export async function POST(req) {
  await ConnectDB();

  try {
    const body = await req.json();
    const { email, password, name } = body;
    const { error } = schema.validate({ email, password, name });

    if (error) {
      return Response.json(
        { success: false, message: error.details[0].message.replace(/['"]+/g, '') },
        { status: 401 }
      );
    }

    const ifExist = await User.findOne({ email });

    if (ifExist) {
      return Response.json({ success: false, message: 'User Already Exist' }, { status: 406 });
    } else {
      const hashedPassword = await hash(password, 12);
      const newUser = await User.create({ email, name, password: hashedPassword });

      const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return Response.json(
        { success: true, message: 'Account created successfully', token, id: newUser._id, email: newUser.email },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('Error in register (server) => ', error);
    return Response.json(
      { success: false, message: 'Something Went Wrong Please Retry Later !' },
      { status: 500 }
    );
  }
}