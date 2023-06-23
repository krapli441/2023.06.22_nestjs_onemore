import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const User = mongoose.model('User', userSchema);

export { User };
