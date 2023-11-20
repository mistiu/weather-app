const currentConditions = [
    {
        "LocalObservationDateTime": "2023-11-19T23:41:00+01:00",
        "EpochTime": 1700433660,
        "WeatherText": "Cloudy",
        "WeatherIcon": 7,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 3.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 38,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "RealFeelTemperature": {
            "Metric": {
                "Value": -0.4,
                "Unit": "C",
                "UnitType": 17,
                "Phrase": "Cold"
            },
            "Imperial": {
                "Value": 31,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Cold"
            }
        },
        "RealFeelTemperatureShade": {
            "Metric": {
                "Value": -0.4,
                "Unit": "C",
                "UnitType": 17,
                "Phrase": "Cold"
            },
            "Imperial": {
                "Value": 31,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Cold"
            }
        },
        "RelativeHumidity": 91,
        "IndoorRelativeHumidity": 30,
        "DewPoint": {
            "Metric": {
                "Value": 2.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 36,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Wind": {
            "Direction": {
                "Degrees": 225,
                "Localized": "SW",
                "English": "SW"
            },
            "Speed": {
                "Metric": {
                    "Value": 11.5,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 7.2,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "WindGust": {
            "Speed": {
                "Metric": {
                    "Value": 20.5,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 12.7,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "UVIndex": 0,
        "UVIndexText": "Low",
        "Visibility": {
            "Metric": {
                "Value": 24.1,
                "Unit": "km",
                "UnitType": 6
            },
            "Imperial": {
                "Value": 15,
                "Unit": "mi",
                "UnitType": 2
            }
        },
        "ObstructionsToVisibility": "R-",
        "CloudCover": 97,
        "Ceiling": {
            "Metric": {
                "Value": 7742,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 25400,
                "Unit": "ft",
                "UnitType": 0
            }
        },
        "Pressure": {
            "Metric": {
                "Value": 1009,
                "Unit": "mb",
                "UnitType": 14
            },
            "Imperial": {
                "Value": 29.8,
                "Unit": "inHg",
                "UnitType": 12
            }
        },
        "PressureTendency": {
            "LocalizedText": "Steady",
            "Code": "S"
        },
        "Past24HourTemperatureDeparture": {
            "Metric": {
                "Value": 3.9,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 7,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "ApparentTemperature": {
            "Metric": {
                "Value": 3.3,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 38,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WindChillTemperature": {
            "Metric": {
                "Value": 0.6,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 33,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WetBulbTemperature": {
            "Metric": {
                "Value": 2.9,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 37,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Precip1hr": {
            "Metric": {
                "Value": 0.5,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.02,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "PrecipitationSummary": {
            "Precipitation": {
                "Metric": {
                    "Value": 0.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.01,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PastHour": {
                "Metric": {
                    "Value": 0.5,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.02,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past3Hours": {
                "Metric": {
                    "Value": 0.5,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.02,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past6Hours": {
                "Metric": {
                    "Value": 0.5,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.02,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past9Hours": {
                "Metric": {
                    "Value": 0.6,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.02,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past12Hours": {
                "Metric": {
                    "Value": 2.5,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.1,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past18Hours": {
                "Metric": {
                    "Value": 2.5,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.1,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past24Hours": {
                "Metric": {
                    "Value": 2.5,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.1,
                    "Unit": "in",
                    "UnitType": 1
                }
            }
        },
        "TemperatureSummary": {
            "Past6HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 1.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 34,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 3.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 39,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past12HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 34,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 3.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 39,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past24HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": -3.3,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 26,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 3.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 39,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            }
        },
        "MobileLink": "http://www.accuweather.com/en/pl/gbokie/1408844/current-weather/1408844?lang=en-us",
        "Link": "http://www.accuweather.com/en/pl/gbokie/1408844/current-weather/1408844?lang=en-us"
    }
];

export default currentConditions;