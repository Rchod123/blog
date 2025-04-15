import { getSession } from 'next-auth/react';
import client from '../auth/lib/db';

export default async function handler(req, res) {
  await client();

  switch (req.method) {
    case 'GET':
      try {
        const articles = await Article.find().populate('authorId', 'name'); // Populate author details
        res.status(200).json({ success: true, data: articles });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      const session = await getSession({ req });
      if (!session?.user?.email) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
      }
      try {
        const user = await User.findOne({ email: session.user.email });
        const article = await Article.create({ ...req.body, authorId: user._id });
        res.status(201).json({ success: true, data: article });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
      break;
  }
}