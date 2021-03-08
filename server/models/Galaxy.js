import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Galaxy = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    inhabited: { type: Boolean, required: true},
    imgUrl: { type: String, required: false, default: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.sci-news.com%2Fimages%2F2018%2F07%2Fimage_6232f-Andromeda-Galaxy.jpg&imgrefurl=http%3A%2F%2Fwww.sci-news.com%2Fastronomy%2Fandromeda-galaxy-07663.html&tbnid=6mpIVOtJWQ8ReM&vet=12ahUKEwjo--XBiZXvAhUYjp4KHegXCrwQMygJegUIARDnAQ..i&docid=urRzaOxLq2OP9M&w=710&h=401&q=galaxy%20pictures&hl=en&ved=2ahUKEwjo--XBiZXvAhUYjp4KHegXCrwQMygJegUIARDnAQ" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;