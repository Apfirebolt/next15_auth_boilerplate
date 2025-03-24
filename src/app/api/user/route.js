// app/api/user/route.js

import ConnectDB from '@/DB/connectDB';
import User from '@/models/User';

export async function GET(req) { // Change to GET method handler
    await ConnectDB();

    try {
        const users = await User.find().select('-password'); // Exclude password field
        return Response.json({ success: true, users }, { status: 200 });
    } catch (error) {
        console.error('Error in fetching users (server) => ', error);
        return Response.json(
            { success: false, message: 'Something Went Wrong Please Retry Later !' },
            { status: 500 }
        );
    }
}
