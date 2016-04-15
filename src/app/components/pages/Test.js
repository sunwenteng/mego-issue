import React from 'react';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Container from './Container';
import Paper from 'material-ui/lib/paper';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import RaisedButton from 'material-ui/lib/raised-button';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

const Test = React.createClass({

    getInitialState: () => {
        return {
            value: 'a',
            history: []
        }
    },

    handleChange(value) {
        this.setState({
            value: value,
        });
    },

    render()
    {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="产品&评测" value="a">
                    <div>
                        <Paper>
                            <Toolbar>
                                <ToolbarGroup
                                    float="left"
                                >
                                    <ToolbarTitle
                                        text='基本信息'
                                    />
                                </ToolbarGroup>
                            </Toolbar>
                        </Paper>

                        <Container
                            text='综述'
                        >
                        </Container>

                        <Container
                            text='评测打分'
                        >
                        </Container>

                        <Container
                            text='产品技术问题'
                        >
                        </Container>

                        <Container
                            text='用户体验与行为阐述'
                        >
                        </Container>

                        <Container
                            text='特色系统'
                        >
                        </Container>

                        <Container
                            text='核心系统'
                        >
                        </Container>

                        <Container
                            text='用户养成评析'
                        >
                        </Container>

                        <Container
                            text='优劣分析'
                        >
                        </Container>

                        <Container
                            text='游戏截图'
                        >
                        </Container>
                    </div>
                </Tab>
                <Tab label="相关记录" value="b">
                    <div>
                        <Paper>
                            <Toolbar>
                                <ToolbarGroup
                                    float="right"
                                >
                                    <RaisedButton label="新增活动记录"
                                                  secondary={true}
                                                  onTouchTap={this.handleSave}
                                    />
                                </ToolbarGroup>
                            </Toolbar>
                        </Paper>
                    </div>
                </Tab>
                <Tab label="文件下载" value="c">
                    <div>
                        <Paper>
                            <Toolbar>
                                <ToolbarGroup
                                    float="right"
                                >
                                    <RaisedButton
                                        label="上传文件"
                                        secondary={true}
                                    >
                                        <input type="file" style={styles.exampleImageInput}/>
                                    </RaisedButton>
                                </ToolbarGroup>
                            </Toolbar>
                        </Paper>
                    </div>
                </Tab>
                <Tab label="历史版本" value="d">
                    <div>
                        <Paper>
                            <Container
                                text='产品名称:'
                            >
                            </Container>

                            <div
                                style={{margin: 16}}
                            >
                                <BootstrapTable
                                    data={this.state.history}
                                    striped={true}
                                    hover={true}
                                    condensed={true}
                                    pagination={true}
                                    insertRow={false}
                                    deleteRow={false}
                                    columnFilter={false}
                                    search={false}
                                >
                                    <TableHeaderColumn dataField="time" isKey={true}>
                                        时间
                                    </TableHeaderColumn>
                                    <TableHeaderColumn dataField="content">
                                        修改内容
                                    </TableHeaderColumn>
                                    <TableHeaderColumn dataField="owner">
                                        修改者
                                    </TableHeaderColumn>
                                </BootstrapTable>
                                <br />
                            </div>

                        </Paper>
                    </div>
                </Tab>
            </Tabs>
        );
    }
});

export default Test;