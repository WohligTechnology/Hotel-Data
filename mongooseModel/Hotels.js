var schema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: "Regions"
    },
    contentData: {
        HotelData: {
            Id: {
                type: "string"
            },
            Name: {
                type: "string"
            },
            Address: {
                Street: {
                    type: "string"
                },
                City: {
                    type: "string"
                },
                Country: {
                    type: "string"
                },
                Phone: {
                    type: "string"
                },
                Fax: {
                    type: "string"
                },
                Email: {
                    type: "string"
                }
            },
            GeoInfos: {
                Location: {
                    type: "array",
                    items: {
                        Name: {
                            type: "string"
                        },
                        Type: {
                            type: "string"
                        }
                    }
                },
                GeoCode: {
                    Latitude: {
                        type: "string"
                    },
                    Longitude: {
                        type: "string"
                    }
                }
            },
            Code: {
                type: "string"
            },
            Source: {
                type: "string"
            },
            TourOperatorCode: {
                type: "string"
            },
            TourOperatorName: {
                type: "string"
            },
            Description: {
                text: {
                    type: "string"
                },
                language: {
                    type: "string"
                }
            }
        },
        MultiMedia: {
            Images: {
                Image: {
                    type: "array",
                    items: {
                        type: "object"
                    }
                }
            },
            Videos: {
                Video: {
                    type: "array",
                    items: {}
                }
            }
        },
        Features: {
            Feature: {
                type: "array",
                items: {}
            }
        },
        RoomData: {
            Id: {
                type: "string"
            },
            Name: {
                type: "string"
            },
            Description: {
                type: "object",
                properties: {
                    text: {
                        type: "string"
                    },
                    language: {
                        type: "string"
                    }
                }
            }
        },
        // hotel object end
        MultiMedia: {
            Images: {
                Image: {
                    type: "array",
                    items: {
                        type: "object"
                    }
                }
            },
            Videos: {
                Video: {
                    type: "array",
                    items: {}
                }
            }
        },

        Features: {
            Feature: [{ items: { type: String } }]
        }
    },

    // content Data end

    availabilityData: {
        hotel: {
            type: "string"
        },
        fromDate: {
            type: "string"
        },
        toDate: {
            type: "string"
        },
        occupancy: {
            type: "number"
        },
        contentProvider: {
            type: "string"
        }
    },

    priceData: {
        hotel: {
            type: "string"
        },
        fromDate: {
            type: "string"
        },
        toDate: {
            type: "string"
        },
        occupancy: {
            type: "number"
        },
        contentProvider: {
            type: "string"
        }
    }
})
export default mongoose.model("Hotels", schema)
