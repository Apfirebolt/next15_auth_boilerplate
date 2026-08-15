// app/api/auth/register/route.js

import ConnectDB from '@/DB/connectDB';
import User from '@/models/User';
import { z } from 'zod';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const runtime = 'nodejs';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  name: z.string().min(1, 'Name is required'),
});

export async function POST(req) {
  await ConnectDB();

  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return Response.json(
        { success: false, message: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, password, name } = result.data;

    const ifExist = await User.findOne({ email });

    if (ifExist) {
      return Response.json(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 12);
    const newUser = await User.create({ email, name, password: hashedPassword });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return Response.json(
      {
        success: true,
        message: 'Account created successfully',
        token,
        id: newUser._id,
        email: newUser.email,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in register (server) => ', error);
    return Response.json(
      { success: false, message: 'Something went wrong, please retry later!' },
      { status: 500 }
    );
  }
}