export type toritoDto = {
    id: number,
    addressText: string,
    tweetText: string,
    location: locationDto,
    createdAt: Date
}

export type locationDto = {
    lat: number,
    lng: number
}