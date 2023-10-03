import mongoose from "mongoose";

interface ICategory extends Document {
  title: string;
}

const CategorySchema = new mongoose.Schema<ICategory>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);
