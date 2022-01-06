import React from 'react'
import LinearProgress, {
    linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import styleds from "styled-components";
import { dataMessages } from "../data/messages";
import Grid from "@mui/material/Grid"
const Div = styleds.div`
padding-left: 5px;
padding-right: 20px;
padding-top: 5px;
`;


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    width: "150px",
}));



export default function AllMessages() {
    return (
        <Div>
            {
                <Grid container style={{paddingLeft: '10px'}}>
                    {
                        dataMessages.map((el) => (
                            <Grid item xs={12} style={{display:'flex', justifyContent: 'space-between',paddingBottom: '10px'}}>
                                <Typography style={{
                                    fontFamily: "Open Sans, sans-serif"
                                }}>{el.title}</Typography>
                                <center>
                                    <div>
                                    <Box sx={{ flexGrow: 1, paddingTop:'10px' }}  style={{justifyContent:'center'}}>
                                        <BorderLinearProgress variant="determinate" value={0} style={{ background: el.color }} />
                                    </Box>
                                    </div>
                                </center>
                                <Typography style={{
                                    fontFamily: "Open Sans, sans-serif"
                                }}>{el.account}</Typography>
                            </Grid>

                        ))
                    }
                </Grid>
            }
        </Div>
    )
}
