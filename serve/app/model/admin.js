
module.exports = app => {
  const mongoose = app.mongoose;
  console.log('mongoose:', mongoose);
  const Schema = mongoose.Schema;
  const AdminSchema = new Schema(
    {
      userName: { type: String },
      password: { type: String },
    },
    {
      collection: 'admin',
      versionKey: false,
    }
    // console.log('aa23aa')
  );

  return mongoose.model('Admin', AdminSchema);
};
