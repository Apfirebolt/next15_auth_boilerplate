// app/api/user/route.js

import ConnectDB from '@/DB/connectDB';
import validateToken from '@/middleware/tokenValidation';
import User from '@/models/User';

export async function GET(req) {
  await ConnectDB();

  const validationResult = await validateToken(req);

  if (validationResult) { // Check if validationResult is a Response object
    return validationResult; // Return the error Response
  }

  try {
    const users = await User.find().select('-password');
    return Response.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.error('Error in fetching users (server) => ', error);
    return Response.json(
      { success: false, message: 'Something Went Wrong Please Retry Later !' },
      { status: 500 }
    );
  }
}