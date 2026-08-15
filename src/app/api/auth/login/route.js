// app/api/auth/login/route.js

import ConnectDB from "@/DB/connectDB";
import User from "@/models/User";
import { z } from "zod";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export async function POST(req) {
  await ConnectDB();

  try {
    const body = await req.json(); // Parse the request body
    const result = schema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: result.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { email, password } = result.data;

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