import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";





function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseTemplate)
    setHTML('houses', content)
}



export class HouseController {
    constructor() {
        console.log('house controller works');
        this.getHouses()
        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)
    }


    async getHouses() {
        try {
            await houseService.getHouses()

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async createHouse(event) {
        try {
            event.preventDefault()
            console.log('form works')
            const form = event.target
            const houseFormData = getFormData(form)
            await houseService.createHouse(houseFormData)
            form.reset()

        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


    async removeHouse(houseId) {
        try {
            const wantsToDelete = await Pop.confirm('do you want to delete?')
            if (!wantsToDelete) {
                return
            }

            await houseService.removeHouse(houseId)
        } catch (error) {
            Pop.error(error);
        }
    }
}