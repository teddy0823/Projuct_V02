import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from 'react';
import {Container, Grid, TextField, Button, Typography, Paper, Alert, Box} from '@mui/material';
import SearchAppBar from "../../component/SearchAppBar.tsx";
import minionImage from './minion.png'; // 導入相片
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {UserData} from "../../../data/user/UserData.ts";

export default function LoginPage() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);

    const navigate = useNavigate();
    const loginUser = useContext<UserData|null|undefined>(LoginUserContext)

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (enent:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
        if (loginResult) {
            navigate(-1);
        } else {
            setIsLoginFailed(true);
        }

        useEffect(() => {
            if (loginUser){
                navigate("/");
            }

        }, [loginUser]);
    }

    return (
        <>
            <SearchAppBar/>
            <Container maxWidth="md">
                <Grid container spacing={2} justifyContent="center" alignItems="center" style={{marginTop: 20}}>
                    {/* 左側相片 */}
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3}>
                            <img src={minionImage} alt="minion" style={{width: '100%'}}/>
                        </Paper>
                    </Grid>
                    {/* 右側登入表格 */}
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} style={{padding: 20}}>
                            <Typography variant="h4" align="center" gutterBottom>
                                登入
                            </Typography>
                            <Paper
                            component="form" onSumbmit={handleLogin}>

                                {isLoginFailed && <Alert severity="error" sx={{mb: 2}}>登入失敗</Alert>}
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            onClick={handleLogin}>
                                            登入
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
