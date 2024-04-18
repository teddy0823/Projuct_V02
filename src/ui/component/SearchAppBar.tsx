import * as React from "react";
import {AppBar, Box, Button, CircularProgress, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {Search, ShoppingCart} from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserData} from "../../data/user/UserData.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts";



const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const loginUser = useContext<UserData | null|undefined>(LoginUserContext);
    const navigate = useNavigate();

    const renderLoginUser = () =>{
        if (loginUser){
            return(
                <Stack direction="row" >
                    <Box display="flex" alignItems="center" mr={2}>

                    <Typography>
                        {
                            loginUser.email
                        }
                    </Typography>
                    </Box>
                    <Button variant="contained" color="success"
                    sx={{mr:2}}
                    onClick={()=>{navigate("/shoppingcart")}}>
                        <ShoppingCart />
                    </Button>

                    <Button
                        color="error"
                        variant={"contained"}
                        onClick={() =>{
                        FirebaseAuthService.handleSignOut()
                    }}>
                        Logout
                    </Button>

                </Stack>
            )
        }else if(loginUser === null){
            return (
                <Button color="inherit"><Link to="/login" style={{
                    textDecoration: 'none',
                    color:"inherit"
                }}>Login</Link>
                </Button>
            )

        }else {
            return (
                <CircularProgress color="inherit"/>
            )
        }
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       <Link to="/" style={{
                           textDecoration: 'none',
                           color:"inherit"
                       }}>
                        Teddy SHOP'S

                       </Link>

                    </Typography>
                    {
                        renderLoginUser()
                    }
                </Toolbar>
            </AppBar>
        </Box>
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static">
        //         <Toolbar>
        //             <IconButton
        //                 size="large"
        //                 edge="start"
        //                 color="inherit"
        //                 aria-label="open drawer"
        //                 sx={{ mr: 2 }}
        //             >
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography
        //                 variant="h6"
        //                 noWrap
        //                 component="div"
        //                 sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        //             >
        //                 MUI
        //             </Typography>
        //             <SearchWrapper>
        //                 <SearchIconWrapper>
        //                     <SearchIcon />
        //                 </SearchIconWrapper>
        //                 <StyledInputBase
        //                     placeholder="Search…"
        //                     inputProps={{ 'aria-label': 'search' }}
        //                     value={searchKeyword} // 將搜尋關鍵字與輸入框綁定
        //                     onChange={handleSearchInputChange} // 監聽輸入框的變化
        //                 />
        //             </SearchWrapper>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
    );
}
