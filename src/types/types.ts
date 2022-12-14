export interface INews {
    author: string
    content: string
    description: string
    publishedAt?: string
    source?: object
    title: string
    url: string
    urlToImage: string
}

export interface IWeather {
    coord: {
        lon: number
        lat: number
    },
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ],
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    },
    visibility: number
    wind: {
        speed: number
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number
    sys: {
        type: number
        id: number
        message: number
        country: string
        sunrise: number
        sunset: number
    },
    timezone: number
    id: number
    name: string
    cod: number
}   

export interface IList {
    author: string
    title: string
    url: string
    urlToImage: string
    description: string
    publishedAt: string | undefined
}

export interface IExchangeUsd {
    date?: string
    usd: {
        byn: number
    }
}

export interface IExchangeEur {
    date?: string
    eur: {
        byn: number
    }
}