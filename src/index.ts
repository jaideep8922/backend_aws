// import express from 'express';
// import { PrismaClient } from '@prisma/client';

// const app = express();
// const prisma = new PrismaClient();

// app.use(express.json());

// app.get('/users', async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.post('/users', async (req, res) => {
//   const { email, name } = req.body;
//   const newUser = await prisma.user.create({
//     data: { email, name },
//   });
//   res.json(newUser);
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
