import axios from "axios"

export const CardServise = {
    async getCard() {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=e59ad144&s=all`)

        return response.data.Search
    },

    async getSearch(movie, type) {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=e59ad144&s=${movie}&type=${type}`)

        return response.data.Search
    },


    async getMoviePage(id) {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=e59ad144&i=${id}`)
        return response.data

    }
}