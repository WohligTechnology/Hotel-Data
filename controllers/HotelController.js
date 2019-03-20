import HotelModel from "../models/HotelModel"

const router = Router()
router.post("/getContentData", (req, res) => {
    HotelModel.getContentData(req.body, res.callback)
}),
    router.post("/getAvailabilityData", (req, res) => {
        HotelModel.getAvailabilityData(req.body, res.callback)
    }),
    router.post("/getPriceData", (req, res) => {
        HotelModel.getPriceData(req.body, res.callback)
    }),
    //no api for getRealtimeRate till now
    router.post("/getRealtimeRate", (req, res) => {
        HotelModel.getRealtimeRate(req.body, res.callback)
    }),
    //no api for getRealtimeRateForHotel till now
    router.post("/getRealtimeRateForHotel", (req, res) => {
        HotelModel.getRealtimeRateForHotel(req.body, res.callback)
    }),
    router.post("/makeBooking", (req, res) => {
        HotelModel.makeBooking(req.body, res.callback)
    })
export default router
