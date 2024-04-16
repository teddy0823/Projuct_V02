import * as React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

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
    const [searchKeyword, setSearchKeyword] = React.useState(""); // 狀態用於存儲搜尋關鍵字

    const handleSearchInputChange = (event) => {
        setSearchKeyword(event.target.value); // 更新搜尋關鍵字
    };

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
                    <Button color="inherit"><Link to="/login"style={{
                        textDecoration: 'none',
                        color:"inherit"
                    }}>Login</Link>
                    </Button>
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
