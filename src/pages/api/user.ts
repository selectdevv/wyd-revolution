import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { login, email, password } = req.body;

    if (!login || !email || !password) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      const user = await prisma.user.create({
        data: {
          login,
          email,
          password,
        },
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  } else {
    return res.status(405).json({ error: 'Método não permitido' });
  }
}