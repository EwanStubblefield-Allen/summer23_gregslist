import { generateId } from "../utils/generateId.js"

export class House {
  constructor(data) {
    // data.id || 
    this.id = generateId()
    this.creatorName = data.creatorName || 'Anonymous'
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description || 'None'
    this.imgUrl = data.imgUrl
  }

  get houseTemplate() {
    return `
    <div class="col-10 m-auto my-3">
      <section class="row bg-light elevation-5 rounded" data-bs-toggle="collapse" data-bs-target="#${this.id}Collapse">
        <div class="col-12 col-md-4 p-0">
          <img class="img-fluid card-img rounded"
            src=${this.imgUrl}
            alt="${this.name}">
        </div>
        <div class="col-12 col-md-8 p-3">
          <h2>${this.name}</h2>
          <h3>Posted By: ${this.creatorName}</h3>
          <h4>$${this.price}</h4>
          <i onclick="app.HousesController.deleteHouse('${this.id}')" class="fa fa-trash fs-5"></i>
        </div>
        <div class="col-12">
          <div class="collapse" id="${this.id}Collapse">
            <section class="row">
              <div class="col-6">
                <p>Number of Bedrooms: ${this.bedrooms}</p>
                <p>Number of Bathrooms: ${this.bathrooms}</p>
                <p>Area: ${this.sqft} ft²</p>
              </div>
              <div class="col-6">
                <h4>Description</h4>
                <p>${this.description}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>`
  }
}