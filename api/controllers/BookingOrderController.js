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
    })

export default router
