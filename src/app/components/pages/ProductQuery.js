import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import TextField from 'material-ui/lib/text-field';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import RaisedButton from 'material-ui/lib/raised-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Paper from 'material-ui/lib/paper';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import FontIcon from 'material-ui/lib/font-icon';

const pcState = [
    <MenuItem key={0} value={0} primaryText="不限"/>,
    <MenuItem key={1} value={1} primaryText="评测中"/>,
    <MenuItem key={2} value={2} primaryText="未评审"/>,
    <MenuItem key={3} value={3} primaryText="已评审"/>,
];

const pjState = [
    <MenuItem key={1} value={1} primaryText="不限"/>,
    <MenuItem key={1} value={1} primaryText="S"/>,
    <MenuItem key={2} value={2} primaryText="A"/>,
    <MenuItem key={3} value={3} primaryText="A+"/>,
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

function format(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

const ProductQuery = React.createClass({
    getInitialState: () => {
        return {
            pc: '',
            pj: '',
            queryResults: [],
            keyword: ''
        };
    },

    mixins: [LinkedStateMixin],

    createHandler(key){
        return (event, index, value) => {
            var o = {};
            o[key] = value;
            this.setState(o);
        }
    },

    handleQuery() {
        this.setState({
            queryResults: [
                {id: 1, name: 1, price: 1},
                {id: 2, name: 2, price: 2},
                {id: 3, name: 3, price: 3},
                {id: 4, name: 1, price: 1},
                {id: 5, name: 2, price: 2},
                {id: 6, name: 3, price: 3},
                {id: 7, name: 1, price: 1},
                {id: 8, name: 2, price: 2},
                {id: 9, name: 3, price: 3},
                {id: 10, name: 1, price: 1},
                {id: 11, name: 2, price: 2},
                {id: 12, name: 3, price: 3},
                {id: 13, name: 1, price: 1},
                {id: 14, name: 2, price: 2},
                {id: 15, name: 3, price: 3},
                {id: 16, name: 1, price: 1},
                {id: 17, name: 2, price: 2},
                {id: 18, name: 3, price: 3},
                {id: 1, name: 1, price: 1},
                {id: 2, name: 2, price: 2},
                {id: 3, name: 3, price: 3},
                {id: 4, name: 1, price: 1},
                {id: 5, name: 2, price: 2},
                {id: 6, name: 3, price: 3},
                {id: 7, name: 1, price: 1},
                {id: 8, name: 2, price: 2},
                {id: 9, name: 3, price: 3},
                {id: 10, name: 1, price: 1},
                {id: 11, name: 2, price: 2},
                {id: 12, name: 3, price: 3},
                {id: 13, name: 1, price: 1},
                {id: 14, name: 2, price: 2},
                {id: 15, name: 3, price: 3},
                {id: 16, name: 1, price: 1},
                {id: 17, name: 2, price: 2},
                {id: 18, name: 3, price: 3},
                {id: 1, name: 1, price: 1},
                {id: 2, name: 2, price: 2},
                {id: 3, name: 3, price: 3},
                {id: 4, name: 1, price: 1},
                {id: 5, name: 2, price: 2},
                {id: 6, name: 3, price: 3},
                {id: 7, name: 1, price: 1},
                {id: 8, name: 2, price: 2},
                {id: 9, name: 3, price: 3},
                {id: 10, name: 1, price: 1},
                {id: 11, name: 2, price: 2},
                {id: 12, name: 3, price: 3},
                {id: 13, name: 1, price: 1},
                {id: 14, name: 2, price: 2},
                {id: 15, name: 3, price: 3},
                {id: 16, name: 1, price: 1},
                {id: 17, name: 2, price: 2},
                {id: 18, name: 3, price: 3},
                {id: 1, name: 1, price: 1},
                {id: 2, name: 2, price: 2},
                {id: 3, name: 3, price: 3},
                {id: 4, name: 1, price: 1},
                {id: 5, name: 2, price: 2},
                {id: 6, name: 3, price: 3},
                {id: 7, name: 1, price: 1},
                {id: 8, name: 2, price: 2},
                {id: 9, name: 3, price: 3},
                {id: 10, name: 1, price: 1},
                {id: 11, name: 2, price: 2},
                {id: 12, name: 3, price: 3},
                {id: 13, name: 1, price: 1},
                {id: 14, name: 2, price: 2},
                {id: 15, name: 3, price: 3},
                {id: 16, name: 1, price: 1},
                {id: 17, name: 2, price: 2},
                {id: 18, name: 3, price: 3},
                {id: 1, name: 1, price: 1},
                {id: 2, name: 2, price: 2},
                {id: 3, name: 3, price: 3},
                {id: 4, name: 1, price: 1},
                {id: 5, name: 2, price: 2},
                {id: 6, name: 3, price: 3},
                {id: 7, name: 1, price: 1},
                {id: 8, name: 2, price: 2},
                {id: 9, name: 3, price: 3},
                {id: 10, name: 1, price: 1},
                {id: 11, name: 2, price: 2},
                {id: 12, name: 3, price: 3},
                {id: 13, name: 1, price: 1},
                {id: 14, name: 2, price: 2},
                {id: 15, name: 3, price: 3},
                {id: 16, name: 1, price: 1},
                {id: 17, name: 2, price: 2},
                {id: 18, name: 3, price: 3},
                {id: 1, name: 1, price: 1},
                {id: 2, name: 2, price: 2},
                {id: 3, name: 3, price: 3},
                {id: 4, name: 1, price: 1},
                {id: 5, name: 2, price: 2},
                {id: 6, name: 3, price: 3},
                {id: 7, name: 1, price: 1},
                {id: 8, name: 2, price: 2},
                {id: 9, name: 3, price: 3},
                {id: 10, name: 1, price: 1},
                {id: 11, name: 2, price: 2},
                {id: 12, name: 3, price: 3},
                {id: 13, name: 1, price: 1},
                {id: 14, name: 2, price: 2},
                {id: 15, name: 3, price: 3},
                {id: 16, name: 1, price: 1},
                {id: 17, name: 2, price: 2},
                {id: 18, name: 3, price: 3},
                {id: 1, name: 1, price: 1},
                {id: 2, name: 2, price: 2},
                {id: 3, name: 3, price: 3},
                {id: 4, name: 1, price: 1},
                {id: 5, name: 2, price: 2},
                {id: 6, name: 3, price: 3},
                {id: 7, name: 1, price: 1},
                {id: 8, name: 2, price: 2},
                {id: 9, name: 3, price: 3},
                {id: 10, name: 1, price: 1},
                {id: 11, name: 2, price: 2},
                {id: 12, name: 3, price: 3},
                {id: 13, name: 1, price: 1},
                {id: 14, name: 2, price: 2},
                {id: 15, name: 3, price: 3},
                {id: 16, name: 1, price: 1},
                {id: 17, name: 2, price: 2},
                {id: 18, name: 3, price: 3},
            ]
        });
    },

    render() {
        return (
            <Paper>
                <Toolbar>
                    <ToolbarGroup
                        float="left"
                    >
                        <ToolbarTitle
                            text='产品信息'
                        />

                    </ToolbarGroup>

                    <ToolbarGroup float="right">
                        <FontIcon className="material-icons">search</FontIcon>
                        <TextField
                            style={{width: 100, height: 56}}
                            hintText="关键字..."
                            valueLink={this.linkState('keyword')}
                        />
                        <ToolbarSeparator />
                        <RaisedButton label="查找" primary={true} onTouchTap={this.handleQuery}/>
                    </ToolbarGroup>
                </Toolbar>

                <div
                    style={{margin: 16}}
                >
                    <BootstrapTable
                        data={this.state.queryResults}
                        striped={true}
                        hover={true}
                        condensed={true}
                        pagination={true}
                        insertRow={false}
                        deleteRow={false}
                        columnFilter={false}
                        search={false}
                    >
                        <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>
                            编号
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataSort={true}>
                            名称
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="type">
                            类型
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="ip">
                            题材
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="status" dataSort={true}>
                            评测状态
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="finish">
                            完成度
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="company">
                            研发公司
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="createTime" dataSort={true}>
                            创建日期
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="creator">
                            创建人
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="modifyDate" dataSort={true}>
                            修改日期
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="modifyer">
                            修改人
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="score" dataSort={true}>
                            综合评分
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="steper">
                            跟进
                        </TableHeaderColumn>
                    </BootstrapTable>
                    <br />
                </div>
            </Paper>
        );
    },
});

export default ProductQuery;