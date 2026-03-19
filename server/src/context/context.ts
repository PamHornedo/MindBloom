import { Request } from "express";

export const context = ({ req }: { req: Request }) => {
  return { user: null }; // placeholder until auth is implemented
};
