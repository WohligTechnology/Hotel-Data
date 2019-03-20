var schema = new Schema({
    type: {
        type: String,
        enum: ["Hotels", "Airlines", "Transfers", "RentACar", "Insurance"]
    },
    date: Date,
    price: { type: Number },
    details: { type: String },
    hotels: {
        type: Schema.Types.ObjectId,
        ref: "Hotels"
    },
    airlines: {
        type: Schema.Types.ObjectId,
        ref: "Airlines"
    },
    transfers: {
        type: Schema.Types.ObjectId,
        ref: "Transfers"
    },
    rentacar: {
        type: Schema.Types.ObjectId,
        ref: "RentACar"
    },
    insurance: {
        type: Schema.Types.ObjectId,
        ref: "Insurance"
    },
    tickets: {
        type: Schema.Types.ObjectId,
        ref: "Tickets"
    },
    cancellationPolicies: { type: String },
    region: {
        type: Schema.Types.ObjectId,
        ref: "Regions"
    },
    status: { type: String },
    passangers: { type: String }
})
export default mongoose.model("BookingProduct", schema)
