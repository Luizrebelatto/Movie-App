import api from "./api";

export function movies(){
    async function getMovies() {
        try {
            const response = api().get("movie/popular?language=pt-BR");
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    return { getMovies }
}
