import mongoose from "mongoose";

interface IProduct extends Document {
  title: string;
  desc: string;
  prices: number[];
  category: string;
  img: string;
  extraOptions: { text: string; price: number }[];
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 300,
    },
    prices: {
      type: [Number],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String },
          price: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);
