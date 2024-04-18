import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import axios from "axios";

const baseURL = "http://localhost:8080";
export async function putCartItem(pid:string,quantity:string){
    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken){
        throw new Error();
    }

    try {
        await axios.put(
            `${baseURL}/cart/${pid}/${quantity}`,
            null,
            {
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                }
            }


        )
    }catch (error){
        console.log(error);
        throw error;

    }

}