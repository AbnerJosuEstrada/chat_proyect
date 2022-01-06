import React from 'react';
import DataGrid, { Column, Sorting, Paging, Pager } from 'devextreme-react/data-grid';
import { dataMessage } from "../data/tabledata";
import verified from "../img/verified.svg";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Table = () => {

    const statusComponent = ({ data }) => {
        if(data.status === "Verificado"){
            return(
                <div>
                    {data.status}
                    <img src={verified} alt={data.status}></img>
                </div>
            )
        }else{
            return(
                <div>
                    {data.status}
                    <WatchLaterIcon style={{width:'20px', heigth: 'auto'}}/>
                </div>
            )
        }

    };

    const allowedPageSizes = [5, 10, 'all'];
    return (
        <div style={{padding: '30px 20px'}}>
            <DataGrid
                dataSource={dataMessage}
                keyExpr="ID"
                showBorders={true}

            >
                <Pager
                    visible={true}
                    allowedPageSizes={allowedPageSizes}
                />
                <Paging defaultPageSize={5} />
                <Column dataField={"title"} caption={"Titulo"} />
                <Column caption={"Estado"} cellRender={statusComponent} />
                <Column dataField={"date"} caption={"Fecha de creación"} />
                <Column dataField={"effectiveness"} caption={"Efectividad"} />

            </DataGrid>
        </div>
    );
}

export default Table;

