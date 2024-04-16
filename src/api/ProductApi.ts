import  axios from "axios";
import {ProductDataDto} from "../data/ProductDataDto.ts";

const baseURL = "http://localhost:8080";

export async function getAllProducts() {

try{
    const response = await axios.get<ProductDataDto[]>(`${baseURL}/public/product`);
    return response.data;

}catch(error){
    console.log(error);
    throw error;
}


}