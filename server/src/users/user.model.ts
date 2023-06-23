import { Schema, Document } from 'mongoose';

export interface User extends Document {
  firstName: string;
  lastName: string;
}

export const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
