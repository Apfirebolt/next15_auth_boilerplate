// app/api/auth/login/route.js

import ConnectDB from "@/DB/connectDB";
import User from "@/models/User";
import Joi from "joi";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

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
        {
          success: false,
          message: error.details[0].message.replace(/['"]+/g, ""),
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json(
        { success: false, message: "User does not exist" },
        { status: 404 }
      );
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return Response.json(
      {
        success: true,
        message: "Login successful",
        token,
        id: user._id,
        email: user.email,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in login (server) => ", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong, please try again later",
      },
      { status: 500 }
    );
  }
}
