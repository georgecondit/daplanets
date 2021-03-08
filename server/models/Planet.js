import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Planet = new Schema(
 {
    name: { type: String, required: true },
    type: { type: String, required: true },
    Gravity: { type: Number },
    Star: {type: String, required: true},
    imgUrl: { type: String, required: true, default: "https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2010/11/19/1290191411132/ An-alien-from-Mars-Attack-006.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=8432f2468b9ff837bb53d4d618a97c7fß" },
},
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;