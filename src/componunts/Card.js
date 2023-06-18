import * as React from 'react';
import Typography from '@mui/material/Typography';
import { StyledCard } from './StyledCard';
import { StyledCardContent } from './StyledCard';
import { StyledButton } from './StyledCard';
import { useNavigate } from 'react-router-dom';




export default function Card(props) {
    const Navigate = useNavigate();
    return (
           
        <StyledCard sx={{ minWidth: 275 }} >

            <StyledCardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.data.title}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.data.description}
                </Typography>

                <StyledButton variant="contained" disableElevation onClick={()=> Navigate(props.data.route)}>
                    <Typography variant="h5" component="div">
                        {props.data.icon}
                    </Typography>
                </StyledButton>

            </StyledCardContent>

        </StyledCard>

    );
}