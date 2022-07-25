
module.exports = app => {
  const mongoose = app.mongoose;
  console.log('mongoose:', mongoose);
  const Schema = mongoose.Schema;
  const AdminSchema = new Schema(
    {
      userName: {
        type: String,
        min: 5,
        max: 20,
      },
      password: { type: String },
    },
    {
      collection: 'admin',
      versionKey: false,
    }
    // console.log('aa23aa')
  );

  const AdminModel = mongoose.model('Admin', AdminSchema);

  return AdminModel;
};
