import SearchAppBar from "../../component/SearchAppBar.tsx";
import {Typography} from "@mui/material";
import {useEffect} from "react";
import * as CartItemApi from "../../../api/CartitemApi.ts"

export default function ShoppingCartPage() {


        const putCartItem = async () =>{
            await CartItemApi.putCartItem("1","1")


        }
    useEffect(() => {
        putCartItem();

    });
    return (
        <>
            <SearchAppBar/>
            <Typography variant="h1">
                Shopping Cart
            </Typography>


        </>
    )
}