import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

const verifyRecaptcha = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token } = req.body;

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const data = response.data;

    if (data.success) {
      return res.status(200).json({ success: true, message: 'reCAPTCHA verified successfully' });
    } else {
      return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export default verifyRecaptcha;