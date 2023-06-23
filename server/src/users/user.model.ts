import { Schema, Document, model } from 'mongoose';

export interface User extends Document {
  firstName: string;
  lastName: string;
}

const UserSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export const UserModel = model<User>('User', UserSchema);
