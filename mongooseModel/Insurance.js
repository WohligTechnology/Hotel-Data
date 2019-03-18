var schema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: "Regions"
    },
    contentData: { type: String },
    priceData: { type: String }
})
export default mongoose.model("Insurance", schema)