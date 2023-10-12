import mongoose from "mongoose";

interface IFooter extends Document {
  title: string;
  email: string;
  phoneNumber: string;
  desc: string;
  socialMedia: Array<{
    icon: string;
    link: string;
  }>;
  openingHours: Array<{
    day: string;
    hour: string;
  }>;
}

const FooterSchema = new mongoose.Schema<IFooter>(
  {
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    socialMedia: {
      type: [
        {
          icon: { type: String },
          link: { type: String },
        },
      ],
    },
    openingHours: {
      type: {
        day: { type: String },
        hour: { type: String },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Footer ||
  mongoose.model<IFooter>("Footer", FooterSchema);
