import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`mongodb://127.0.0.1:27017/`),
  },
];

export default databaseProviders;
