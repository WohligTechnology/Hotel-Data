export default {
    getContentData: (data, callback) => {
        var contentData = {
            hotelData: {
                id: "id",
                name: "name"
            },
            address: {
                street: "street",
                city: "city",
                country: "country",
                phone: "phone",
                fax: "fax",
                email: "email"
            },
            geoinfos: {
                code: "code",
                source: "source",
                touroperatorcode: "touroperatorcode",
                tpuroperatorname: "touroperatorname"
            },
            description: {
                text: "text",
                language: "language"
            },
            multimedia: {
                images: {
                    image: [{}]
                },
                videos: {
                    video: []
                }
            },
            features: {
                feature: []
            },
            roomdata: {
                id: "id",
                name: "name",
                description: {
                    text: "text",
                    language: "language"
                },
                multimedia: {
                    images: {
                        image: [{}]
                    },
                    videos: {
                        video: []
                    }
                }
            },
            message: "This is content data"
        }
        callback(null, contentData)
    },
    getAvailabilityData: (data, callback) => {
        var availabilityData = {
            availabilityData: [
                {
                    roomId: "roomId",
                    count: "count",
                    rate: "rate"
                }
            ],

            message: "This is availability data"
        }
        callback(null, availabilityData)
    },
    getPriceData: (data, callback) => {
        var priceData = {
            priceData: {
                kind: "travelpartner#prices",
                googleClusterId: "13493672096533882764",
                Prices: [
                    {
                        Checkin: "06/01/2016",
                        Nights: 2,
                        Baserate: 164.98,
                        TaxAndOtherFees: 21.61,
                        Currency: "USD",
                        LastUpdateTime: "2016-05-30 11:44:01",
                        IsVisible: true,
                        IsComplete: true
                    },
                    {
                        Checkin: "06/01/2016",
                        Nights: 1,
                        LastUpdateTime: "2016-05-27 13:09:31",
                        IsVisible: false,
                        IsComplete: true,
                        ErrorReasons: ["Room unavailable."]
                    }
                ]
            },
            message: "This is price data"
        }
        callback(null, priceData)
    },
    //no api fro getRealtimeRate till now
    getRealtimeRate: (data, callback) => {
        var realTimeRate = {
            message: "This is realTimeRate data"
        }
        callback(null, realTimeRate)
    },
    //no api fro getRealtimeRateForHotel till now
    getRealtimeRateForHotel: (data, callback) => {
        var realTimeRateForHotel = {
            message: "This is realTimeRateForHotel data"
        }
        callback(null, realTimeRateForHotel)
    },
    makeBooking: (data, callback) => {
        var data = {
            bookingId: "This is your bookingId",
            message: "Booking successful"
        }
        callback(null, data)
    }
}
