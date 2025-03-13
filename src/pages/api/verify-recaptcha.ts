import type { NextApiRequest, NextApiResponse } from 'next';

const verifyRecaptcha = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token } = req.body;

  const secretKey = '6LcNwPIqAAAAACwauZ7JlTsXczQlCY4muOlY9lPM';

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();

  if (data.success) {
    return res.status(200).json({ success: true, message: 'reCAPTCHA verified successfully' });
  } else {
    return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
  }
};

export default verifyRecaptcha;