import axios from "axios"
import { formatData } from "../format/formatStateData"

const statesUrl = 'https://countriesnow.space/api/v0.1/countries/states'
const country = {
    "country": "United States"
}

export const getStateOptions = async () => {
    const response = await axios.post(statesUrl, country)
    const stateData = response.data.data.states.map(formatData)    
    return stateData
}


