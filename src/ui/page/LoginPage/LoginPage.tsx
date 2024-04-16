import React from 'react';
import { Container, Grid, TextField, Button, Typography, Paper } from '@mui/material';
import SearchAppBar from "../../component/SearchAppBar.tsx";
import minionImage from './minion.png'; // 導入相片

export default function LoginPage() {
    return (
        <>
            <SearchAppBar />
            <Container maxWidth="md">
                {

                <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: 20 }}>
                    {/* 左側相片 */}
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3}>
                            <img src={minionImage} alt="minion" style={{ width: '100%' }} />
                        </Paper>
                    </Grid>
                    {/* 右側登入表格 */}
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <Typography variant="h4" align="center" gutterBottom>
                                登入
                            </Typography>
                            <form>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary" type="submit">
                                            登入
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            取消
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
                }
            </Container>
        </>
    );
}