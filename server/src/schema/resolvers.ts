import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const resolvers = {
  Query: {
    hello: () => "Hello from HabitMind GraphQL server!",
  },
  Mutation: {
    register: async (_: any, { username, email, password }: any) => {
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({
        username,
        email,
        password: hash,
      } as any);
      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET! as string,
        { expiresIn: "7d" },
      );
      return {
        token,
        user: { id: user._id, username: user.username, email: user.email },
      };
    },
  },
};
