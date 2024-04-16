import {Box} from "@mui/material";


export default function LoadingContainer() {
    return (
        <Box sx={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhlYXVtdGZ1cHhpYTA4bXB2OHpmbXI0bjQyazRuZzU0ZTA2Zm9hcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0U7bWQK9s75PjRKcHz/giphy.gif"/>
        </Box>
)
}