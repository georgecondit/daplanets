import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Moon = new Schema(
 {
    name: { type: String, required: true },
    type: { type: String, required: true },
    Gravity: { type: Number },
    imgUrl: { type: String, required: true, default: "https://cdn.mos.cms.futurecdn.net/steeVbQDTNm7ikspshc23D.jpg"}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;