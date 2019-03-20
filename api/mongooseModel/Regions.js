var schema = new Schema({
    name: { type: String },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: "Supplier"
    },
    endPoint: { type: String },
    servicesProvided: {
        type: String,
        enum: ["Hotels", "Airlines", "Transfers", "RentACar", "Insurance"],
        default: "Hotels"
    }
})
export default mongoose.model("Regions", schema)
