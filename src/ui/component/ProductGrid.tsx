import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {styled} from "@mui/material/styles";

const ImageWrapper = styled('div')({
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.5s ease',
    '&:hover img': {
        transform: 'scale(1.2)',
    },
});

const ProductImage = styled('img')({
    width: '100%',
    height: 'auto',
    transition: 'transform 0.5s ease',
});

interface Product {
    pid: number;
    name: string;
    image_url: string;
    price: number;
    has_stock: boolean;
}

interface ProductGridProps {
    products: Product[];
}

const CustomButton = styled(Button)({
    backgroundColor: '#49A299',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#357c75',
    },
    margin:"10px 0",
});

export default function ProductGrid({ products }: ProductGridProps) {
    if (!products) {
        return null;
    }
    return (
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* 商品圖片 */}
                        <ImageWrapper>
                            <ProductImage src={product.image_url} alt={product.name} />
                        </ImageWrapper>

                        <Typography variant="subtitle1" align="center">{product.name}</Typography>

                        <Typography variant="body2" align="center" style={{ color: 'red' }}>
                            {product.has_stock?`HK${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`:"你走寶了"}</Typography>
                        <CustomButton  component={Link} to={`/public/product/${product.pid}`} variant="contained" >查看詳情</CustomButton>

                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}