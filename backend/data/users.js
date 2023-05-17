import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Omar Mobarak',
    email: 'omar@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Amir Eldin',
    email: 'Amir@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mahmoud Mulham',
    email: 'mulham@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'dummy user',
    email: 'dummy@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
