class Artwork {
  constructor(id, title, artists, year, material, dimensions, location, latitude, longitude, infoUrls, imageUrl) {
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.year = year;
    this.material = material;
    this.dimensions = dimensions;
    this.location = location;
    this.longitude = longitude;
    this.latitude = latitude;
    this.infoUrls = infoUrls;
    this.imageUrl = imageUrl;
  }
}

export default Artwork;
