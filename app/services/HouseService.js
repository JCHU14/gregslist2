import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HouseService {

    async getHouses() {
        const res = await api.get('api/houses')
        console.log('Houses', res.data);
        const newHouses = res.data.map(housesPOJO => new House(housesPOJO))
        AppState.houses = newHouses
    }

    async createHouse(houseFormData) {
        const res = await api.post('api/houses', houseFormData)
        console.log('created car', res.data);
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }


    async removeHouse(houseId) {
        const res = await api.delete(`api/houses/${houseId}`)
        console.log('deleted house', res.data);
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        if (houseIndex == -1) {
            return
        }
        AppState.houses.splice(houseIndex, 1)
        AppState.emit('houses')
    }
}

export const houseService = new HouseService