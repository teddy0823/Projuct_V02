import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetProductByPID } from "../../../data/GetProductByPid";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as GetProductByPidApi from "../../../api/GetProductByPidApi.ts";
import SearchAppBar from "../../component/SearchAppBar.tsx";
import LoadingContainer from "../../component/LoadingContainer.tsx";

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
    const { pid } = useParams<{ pid: string }>(); // 從路由參數中獲取 pid
    const [productDetail, setProductDetail] = useState<GetProductByPID | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const productDetailData = await GetProductByPidApi.getProductByPid(pid);
                setProductDetail(productDetailData);
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        };

        fetchProductDetail();
    }, [pid]);

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
        // Add to cart functionality
    };


    return (
        <>
            <SearchAppBar />
            <CenteredBox>
                {
                productDetail

               ? <ProductPaper elevation={3}>
                    <Grid container spacing={2}>
                        {/* 左側放置圖片 */}
                        <Grid item xs={12} md={5}>
                            <img src={productDetail.imageUrl} alt={productDetail.name}
                                 style={{ maxWidth: '100%', borderRadius: '5px' }} />
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
                                <TextField type="number" variant="outlined" value={quantity} />
                                <Button onClick={handleIncreaseQuantity}>+</Button>
                            </Box>
                            <Button onClick={handleAddToCart} variant="contained" color="primary"
                                    style={{ marginTop: '20px' }}>放進購物車</Button>
                        </Grid>
                    </Grid>

                </ProductPaper>
                    :<LoadingContainer/>
                }
            </CenteredBox>
        </>
    );
}
