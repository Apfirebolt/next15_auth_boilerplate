// app/api/auth/login/route.js

import ConnectDB from '@/DB/connectDB';
import User from '@/models/User';
import Joi from 'joi';
import { compare } from 'bcryptjs';

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

export async function POST(req) {
    await ConnectDB();

    try {
        const body = await req.json(); // Parse the request body
        const { email, password } = body;
        const { error } = schema.validate({ email, password });

        if (error) {
            return Response.json(
                { success: false, message: error.details[0].message.replace(/['"]+/g, '') },
                { status: 401 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return Response.json({ success: false, message: 'User does not exist' }, { status: 404 });
        }

        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            return Response.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }

        return Response.json({ success: true, message: 'Login successful' }, { status: 200 });
    } catch (error) {
        console.error('Error in login (server) => ', error);
        return Response.json(
            { success: false, message: 'Something went wrong, please try again later' },
            { status: 500 }
        );
    }
}