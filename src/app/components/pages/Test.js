import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const productLong = [
    {id: 1, name: 1, price: 1},
    {id: 2, name: 2, price: 2},
    {id: 3, name: 3, price: 3},
    {id: 1, name: 1, price: 1},
    {id: 2, name: 2, price: 2},
    {id: 3, name: 3, price: 3},
    {id: 1, name: 1, price: 1},
    {id: 2, name: 2, price: 2},
    {id: 3, name: 3, price: 3},
    {id: 1, name: 1, price: 1},
    {id: 2, name: 2, price: 2},
    {id: 3, name: 3, price: 3},
    {id: 1, name: 1, price: 1},
    {id: 2, name: 2, price: 2},
    {id: 3, name: 3, price: 3},
    {id: 1, name: 1, price: 1},
    {id: 2, name: 2, price: 2},
    {id: 3, name: 3, price: 3},
];

//Row select setting
const selectRowProp = {
    mode: 'radio',
    clickToSelect: true,   //click row will trigger a selection on that row.
    bgColor: "rgb(238, 193, 213)",   //selected row background color
    onSelect: (row, isSelected) => {
        alert(row + ':' + isSelected);
    }
};

function format(cell, row){
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

const Test = React.createClass({
    render() {
        return (
            <BootstrapTable
                data={productLong}
                striped={true}
                hover={true}
                condensed={true}
                pagination={true}
                selectRow={selectRowProp}
                insertRow={false}
                deleteRow={false}
                columnFilter={false}
                search={false}
                exportCSV={true}
            >
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="right" dataSort={true}>
                    产品名称
                </TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataAlign="center" dataFormat={format}>Product
                    Price</TableHeaderColumn>
            </BootstrapTable>
        );
    },
});

export default Test;