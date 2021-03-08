import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const SpeciesPlanet = new Schema(
    {
        planet: { type: ObjectId, ref: "Planet", required: true },
        specie: { type: ObjectId, ref: "Specie", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default SpeciesPlanet;