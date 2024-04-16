
import NavList from "../../component/NavList.tsx";
import SearchAppBar from "../../component/SearchAppBar.tsx";
import ProductGrid from "../../component/ProductGrid.tsx";
import {ProductDataDto} from "../../../data/ProductDataDto.ts";
// import  mockData from "./response.json"
import {useEffect, useState} from "react";
import {Container} from "@mui/material";
import * as ProductApi from "../../../api/ProductApi.ts";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import {useNavigate} from "react-router-dom";


export default function ProductListingPage(){

    const[productDataDto,setProductDataDto]=useState<ProductDataDto | undefined>(undefined);
    const navigate = useNavigate();
    const fetchAllProducts = async ()=>{
        try{

        const responseDtoList = await ProductApi.getAllProducts();
        setProductDataDto(responseDtoList);
        }catch(error){
            navigate("/error");


        }
    }
    useEffect(()=>{
        fetchAllProducts();
    },[])
    return(
        <>
            <SearchAppBar/>
            <Container>
                {
                    productDataDto
                    ? <ProductGrid products={productDataDto}/>
                        :<LoadingContainer/>
                }



            {/*<NavList/>*/}



            </Container>

        </>
    )
}