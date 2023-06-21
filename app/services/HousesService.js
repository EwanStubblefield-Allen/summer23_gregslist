import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js";

function _saveHouses() {
  saveState('houses', AppState.houses)
  AppState.emit('houses')
}

class HousesService {
  createHouse(formData) {
    const newHouse = new House(formData)
    AppState.houses.push(newHouse)
    _saveHouses()
  }

  deleteHouse(houseId) {
    let foundHouse = AppState.houses.findIndex(h => h.id == houseId)
    AppState.houses.splice(foundHouse, 1)
    _saveHouses()
  }
}

export const housesService = new HousesService