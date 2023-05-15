import React from 'react';
import {MDBDataTable} from 'mdbreact';
import studentData from './studentData';

const data= {
    columns: [
        {
            label: 'Name',
            field: 'name',
            sort: 'asc',
        },
        {
            label: 'Age',
            field: 'age',
        },
        {
            label: 'Birthday',
            field: 'bday',
        },
        {
            label: 'Subject 1',
            field: 'sub1',
            sort: 'desc',
            
        },
        {
            label: 'Subject 2',
            field: 'sub2',
            sort: 'desc',
            
        },
        {
            label: 'Subject 3',
            field: 'sub3',
            sort: 'desc',
            
        },

    ],

    rows: studentData,

}

function Table(){
    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
    
}



export default Table;