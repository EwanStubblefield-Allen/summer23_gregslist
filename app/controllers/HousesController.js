import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHouses() {
  const houses = AppState.houses
  let template = ''

  houses.forEach(house => template += house.houseTemplate)
  setHTML('houseCards', template)
}

export class HousesController {
  constructor() {
    console.log('The Houses Controller has loaded', AppState.houses);
    _drawHouses()

    AppState.on('houses', _drawHouses)
  }

  createHouse(event) {
    event.preventDefault()
    const form = event.target
    const formData = getFormData(form)

    housesService.createHouse(formData)
    form.reset()
  }
  async deleteHouse(houseId) {
    console.log('success');
    const doesWant = await Pop.confirm('Are you sure you want to delete this house?')
    if (!doesWant) {
      return
    }
    housesService.deleteHouse(houseId)
  }
}