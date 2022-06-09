import axios from "axios"

export const getProduct = async() => {
    
    return await axios.get("https://fakestoreapi.com/products");
    
}
