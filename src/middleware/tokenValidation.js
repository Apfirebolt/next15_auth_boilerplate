// src/middleware/tokenValidation.js

import jwt from 'jsonwebtoken';

const validateToken = async (req) => {
  try {
    const authHeader = req.headers.get('authorization');
    const token = authHeader && authHeader.split(' ')[1];
    let message = 'Unauthorized Please login';

    if (!token) {
      message = 'No token, authorization denied';
      return Response.json({ success: false, message }, { status: 401 });
    }

    // token verification
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (jwtError) {
      return Response.json({ success: false, message: 'Invalid token' }, { status: 401 });
    }

    return null; // Token is valid
  } catch (error) {
    return Response.json({ success: false, message }, { status: 401 });
  }
};

export default validateToken;