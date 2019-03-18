var schema = new Schema({
    name: { type: String, required: true },
    region: {
        type: Schema.Types.ObjectId,
        ref: "Regions"
    }
})
export default mongoose.model("Supplier", schema)
