import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Star = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    class: { type: String },
    imgUrl: { type: String, required: true, default: "https://live.staticflickr.com/4071/4692979051_4b456d783b_b.jpg" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;