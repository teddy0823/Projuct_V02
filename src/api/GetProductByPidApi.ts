import axios from "axios";
import {GetProductByPID} from "../data/GetProductByPid.ts";

const baseURL = "http://localhost:8080";

export async function getProductByPid(pid:string){
    try {
        const respinse =await axios.get<GetProductByPID>(`${baseURL}/public/product/${pid}`);
        return respinse.data;

    }catch (error){
        console.log(error);
        throw error;
    }
}