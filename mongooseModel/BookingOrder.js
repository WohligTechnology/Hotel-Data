var schema = new Schema({
    date: Date,
    products: {
        type: String,
        enum: ["Hotels", "Airlines", "Transfers", "RentACar", "Insurance"]
    },
    status: { type: String },
    paymentStatus: { type: String },
    paymentDetails: { type: String },
    amount: { type: String },
    transactionId: { type: String },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    backend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Backend"
    }
})
export default mongoose.model("BookingOrder", schema)
