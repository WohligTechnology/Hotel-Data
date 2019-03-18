var schema = new Schema({
    name: { type: String },
    endPoint: { type: String }
})
export default mongoose.model("Backend", schema)
