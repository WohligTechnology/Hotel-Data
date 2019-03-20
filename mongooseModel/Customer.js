var schema = new Schema({
    name: { type: String },
    email: { type: String },
    address: { type: String },
    city: { type: String },
    backend: {
        type: Schema.Types.ObjectId,
        ref: "Backend"
    }
})
export default mongoose.model("Customer", schema)
