import mongoose from "mongoose";

interface IOrder extends Document {
  customer: string;
  address: string;
  total: number;
  status: number;
  method: number;
  extraOptions: { text: string; price: number }[];
}

const OrderSchema = new mongoose.Schema<IOrder>(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);
