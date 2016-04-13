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
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
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

const ProductQuery = React.createClass({
    getInitialState: function () {
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
        let queryResults = [];
        for (let i = 0; i < 10; i++) {
            queryResults.push(
                <TableRow>
                    <TableRowColumn key={i*3}>{i + 1}</TableRowColumn>
                    <TableRowColumn key={i*3+1}>{i + 1}name {this.state.keyword}</TableRowColumn>
                    <TableRowColumn key={i*3+2}>{i + 1}status {this.state.keyword}</TableRowColumn>
                </TableRow>
            );
        }
        this.setState({queryResults: queryResults});
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
                <Table
                    fixHeader={true}
                    selectable={true}
                >
                    <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        showRowHover={true}
                        stripedRows={true}
                        displayRowCheckbox={false}
                    >
                        {this.state.queryResults}
                    </TableBody>
                </Table>
            </Paper>
        );
    },
});

export default ProductQuery;