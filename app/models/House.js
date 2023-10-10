export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }



    get houseTemplate() {
        return `
        <div class="row justify-content-center mt-5">

          <div class="col-5 bg-secondary boxbrdr">
            <img class="car-img"
              src="${this.imgUrl}"
              alt="house">

          </div>

          <div class="col-3 bg-secondary boxbrdr">
            <h1>Year: ${this.year}</h1>
            <p>Bedrooms: ${this.bedrooms}</p>
            <p>Bathrooms: ${this.bathrooms}</p>
            <p>Levels: ${this.levels}</p>
            <p>Price: $${this.price}</p>
            <p>${this.description}</p>
            <img class="img-fluid rounded-circle car-creator"
            src="${this.creator.picture}"
            alt="${this.creator.name}">
          <h4 class="ms-2">${this.creator.name}</h4>
          <button onclick="app.HouseController.removeHouse()" class="btn btn-danger">Delete<button>
          </div>
        </div>`
    }
}