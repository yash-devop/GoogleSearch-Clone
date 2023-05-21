import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key : 'AIzaSyDlXSGXndvEEWy8sZ_LgEYlacDE6j5ERII',
    cx:'576f31a00956e4f8e'
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params : {...params , ...payload} //here spreadOperator is used to join 2 objects.
    })
    return data;
};
