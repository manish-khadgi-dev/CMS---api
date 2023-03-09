import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.set("strictQuery", false);
export default mongoose.model("Payment", paymentSchema);
