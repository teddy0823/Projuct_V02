import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {GetProductByPID} from "../../../data/GetProductByPid";
import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import SearchAppBar from "../../component/SearchAppBar.tsx";

const CenteredBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 垂直置中
});

const ProductPaper = styled(Paper)({
    padding: '20px',
    maxWidth: '800px', // 設定最大寬度
});

export default function ProductDetailPage() {
    const {pid} = useParams<{ pid: string }>(); // 從路由參數中獲取 pid
    const [productDetail, setProductDetail] = useState<GetProductByPID | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        //mockdata
        const mockProductData: GetProductByPID[] = [
            {
                "pid": 1,
                "name": "Sony A7C II Body (淨機身) ILCE-7CM2",
                "description": "拍攝像素:3300萬像素\n顯示屏:3.0吋\n感光元件:Exmor R 全片幅 CMOS\n儲存媒體:SD (兼容 UHS-I/II) 記憶卡插槽\n重量:429g\n機身大小:124 x 71.1 x 63.4mm\n感光度:靜態影像: ISO 100-51200 (可擴充至 ISO 50-204800)\n短片攝錄:XAVC HS 4K, XAVC S 4K, XAVC S HD, XAVC S-I 4K, XAVC S-I HD",
                "imageUrl": "https://www.price.com.hk/space/product/598000/598847_chpxfh_4.jpg",
                "price": 13850.00,
                "stock": 300
            },
            {
                pid: 2,
                name: "Sony A7CR Body (淨機身) ILCE-7CR",
                description: "拍攝像素:6100萬像素\n顯示屏:3.0吋\n感光元件:Exmor R 全片幅 CMOS\n儲存媒體:SD (兼容 UHS-I/II) 記憶卡插槽\n重量:430g\n機身大小:124 x 71.1 x 63.4mm\n感光度:靜態影像: ISO 100-32000 (可擴充至 ISO 50-102400)\n短片攝錄:XAVC HS 4K, XAVC S 4K, XAVC S HD, XAVC S-I 4K, XAVC S-I HD",
                imageUrl: "https://www.price.com.hk/space/product/598000/598855_p8u2dc_4.png",
                price: 18900.00,
                stock: 280
            },
            {
                pid: 3,
                name: "Sony A7C (淨機身)",
                description: "拍攝像素:2420萬像素\n顯示屏:3.0吋\n感光元件:CMOS\n儲存媒體:SD, SDHC, SDXC (兼容 UHS-II)\n重量:509g\n機身大小:124 x 71.1 x 59.7mm",
                imageUrl: "https://www.price.com.hk/space/product/468000/468895_azx43l_4.jpg",
                price: 8900.00,
                stock: 0
            }
        ];

        const selectedProduct = mockProductData.find(product => product.pid.toString() === pid);

        setProductDetail(selectedProduct || null);
    }, [pid]);


    //     const fetchProductDetail = async () => {
    //         try {
    //             const response = await fetch(`/public/product/${pid}`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setProductDetail(data);
    //             } else {
    //                 console.error('Failed to fetch product detail');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching product detail:', error);
    //         }
    //     };
    //
    //     fetchProductDetail();
    //
    // }, [pid]);

    //handle
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {

    };


    // loading
    if (!productDetail) {
        return <div>Loading...</div>;
    }

    return (
        // <div>
        //     <h2>Product Detail</h2>
        //
        //     <div>
        //         <img src={productDetail.imageUrl} alt={productDetail.name} />
        //         <h3>{productDetail.name}</h3>
        //         <p>Price: {productDetail.price}</p>
        //         <p>Stock: {productDetail.stock}</p>
        //         <p>Description: {productDetail.description}</p>
        //     </div>
        // </div>
        <>
            <SearchAppBar/>
            <CenteredBox>
                <ProductPaper elevation={3}>
                    <Grid container spacing={2}>
                        {/* 左側放置圖片 */}
                        <Grid item xs={12} md={5}>
                            <img src={productDetail.imageUrl} alt={productDetail.name}
                                 style={{maxWidth: '100%', borderRadius: '5px'}}/>
                        </Grid>
                        {/* 右側放置其他資料和加法數量的按鈕 */}
                        <Grid item xs={12} md={7} container justifyContent="center" alignItems="center">
                            <Typography variant="h4">{productDetail.name}</Typography>
                            <Typography variant="body1">Price: ${productDetail.price.toFixed(2)}</Typography>
                            <Typography variant="body1">Stock: {productDetail.stock}</Typography>
                            <Typography variant="body1">Description: {productDetail.description}</Typography>
                            <Box mt={2}>
                                <Typography variant="body1">Quantity:</Typography>
                                <Button onClick={handleDecreaseQuantity}>-</Button>
                                <TextField type="number" variant="outlined" value={quantity}/>
                                <Button onClick={handleIncreaseQuantity}>+</Button>
                            </Box>
                            <Button onClick={handleAddToCart} variant="contained" color="primary"
                                    style={{marginTop: '20px'}}>放進購物車</Button>
                        </Grid>
                    </Grid>
                </ProductPaper>
            </CenteredBox>
        </>
    );
}