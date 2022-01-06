import React from "react";
import { Grid, Typography } from "@mui/material"
import styled from "styled-components";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AllMessages from "./AllMessages";
import { dataMessages } from "../data/messages";
const CardContainerHorizontal = styled.div`
    border: ${({ withBorder, boderColor }) => withBorder ? boderColor : "none"};
    display: flex;
    height: 150px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: #EEEEEE;
        transition: background-color .5s;
    }
`

const CardContainerHorizontalM = styled.div`
    border: ${({ withBorder, boderColor }) => withBorder ? boderColor : "none"};
    height: 150px;
    cursor: pointer;
    border-radius: 5px;
    background: #EEEEEE;
    &:hover {
        background-color: #EEEEEE;
        transition: background-color .5s;
    }
`

const TitleMessage = styled.div`
font-size: 30px;
font-weight: 600;
padding-bottom: 20px;
padding-top: 30px;
float: left;
font-family: 'Open Sans', sans-serif;
`;

const Div = styled.div`
padding-left: 20px;
padding-right: 20px;
`;

const MessageContainer = () => {
    return (
        <Div>
            <div>
                <TitleMessage> Mensajes Salientes </TitleMessage>
                <div style={{ paddingTop: "20px" }}>
                    <Fab variant="extended" style={{ float: "right", background: "white" }} >
                        <AddIcon color="primary" style={{ paddingRight: '4px' }} />
                        <Typography variant="h6" style={{ textTransform: "capitalize" }}>Nuevo Mensaje</Typography>
                    </Fab>
                </div>
            </div>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <CardContainerHorizontal style={{ background: '#EEEEEE' }}>
                        <AllMessages />
                    </CardContainerHorizontal>
                </Grid>
                {
                    dataMessages.map((el) => (
                        <Grid item xs={2}>
                            <CardContainerHorizontalM>
                            <div style={{paddingTop: '25px', paddingBottom:'10px'}}>
                                    <center>
                                        <img src={el.img} alt={el.title}></img>
                                    </center>  
                                </div>
                                <div style={{
                                    paddingLeft:'30%',
                                }}>
                                    <Typography style={{textAlign: 'left', borderLeft: el.border, paddingLeft: '5px'}}>{el.title}</Typography>
                                    <Typography style={{textAlign: 'left', borderLeft: el.border, paddingLeft: '5px'}}>{el.account}</Typography>
                                </div>
                            </CardContainerHorizontalM>
                                
                        </Grid>
                    ))
                }
            </Grid>
        </Div>
    )
};

export default MessageContainer; 
