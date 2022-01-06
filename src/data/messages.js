import received from "../img/received.svg";
import not_received from "../img/not_received.svg";
import answered from "../img/answered.svg";
import sent from "../img/sent.svg";



export const dataMessages = [
    {
        title: "Enviados",
        account: 25,
        color: 'skyblue',
        img:sent,
        border: "2px solid skyblue",
    },
    {
        title: "Recibidos",
        account: 25,
        color: 'green',
        img:received,
        border: "2px solid green",
    },
    {
        title: "No Recibidos",
        account: 0,
        color: 'red',
        img: not_received,
        border: "2px solid red",
    },
    {
        title: "Respondidos",
        account: 0,
        color: 'orange',
        img:answered,   
        border: "2px solid orange",
    },
];
