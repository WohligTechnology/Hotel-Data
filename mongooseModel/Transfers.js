var schema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: "Regions"
    },
    contentData: String,
    availabilityData: String,
    priceData: String
})
export default mongoose.model("Transfers", schema)
