import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const SpeciesPlanet = new Schema(
    {
        stars: { type: ObjectId, ref: "Stars", required: true },
        planets: { type: ObjectId, ref: "Planets", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default SpeciesPlanet;