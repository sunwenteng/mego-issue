import React from 'react';

import LinkedStateMixin from 'react-addons-linked-state-mixin';
import Paper from 'material-ui/lib/paper';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
    container: {
        // width: '50%'
    },
    content: {
        marginLeft: 32
    },
    saveBtDiv: {
        textAlign: 'center',
        padding: 32
    }
};

const frontItems = [
    <MenuItem key={1} value={1} primaryText="Objective-C"/>,
    <MenuItem key={2} value={2} primaryText="C/C++"/>,
    <MenuItem key={3} value={3} primaryText="Java"/>,
    <MenuItem key={4} value={4} primaryText="Flash/AIR"/>,
    <MenuItem key={5} value={5} primaryText="Unity3D"/>,
    <MenuItem key={6} value={6} primaryText="Cocos2d-x"/>,
    <MenuItem key={7} value={7} primaryText="Html5"/>,
    <MenuItem key={8} value={8} primaryText="UnReal"/>,
    <MenuItem key={9} value={9} primaryText="其他"/>
];

const endItems = [
    <MenuItem key={1} value={1} primaryText="无后端"/>,
    <MenuItem key={2} value={2} primaryText="Java"/>,
    <MenuItem key={3} value={3} primaryText="Python"/>,
    <MenuItem key={4} value={4} primaryText="C/C++"/>,
    <MenuItem key={5} value={5} primaryText="PHP"/>,
    <MenuItem key={6} value={6} primaryText="Erlang"/>,
    <MenuItem key={7} value={7} primaryText=".Net"/>,
    <MenuItem key={8} value={8} primaryText="Node.js"/>,
    <MenuItem key={9} value={9} primaryText="其他"/>
];

var ProductInsert = React.createClass({

    mixins: [LinkedStateMixin],

    getInitialState: () => {
        return {
            name: '',
            company: '',
            area: '',
            type: '',
            ip: '',
            market: '',
            finish: '',
            rule: '',
            team: '',
            producer: '',
            frontValue: '',
            endValue: ''
        };
    },

    createHandler(key){
        return (event, index, value) => {
            var o = {};
            o[key] = value;
            this.setState(o);
        }
    },

    handleSave () {
        console.log(this.state);
    },

    render() {
        return (
            <Paper style={styles.container}>
                <Toolbar>
                    <ToolbarGroup float="left">
                        <ToolbarTitle text='产品信息'/>
                    </ToolbarGroup>
                </Toolbar>
                <TextField style={styles.content}
                           hintText="产品名称,必须输入"
                           floatingLabelText="产品名称"
                           valueLink={this.linkState('name')}
                /><br/>
                <TextField style={styles.content}
                           hintText="研发公司名称,必须输入"
                           floatingLabelText="研发公司"
                           valueLink={this.linkState('company')}
                />
                <TextField style={styles.content}
                           hintText="国家,地区,城市"
                           floatingLabelText="所在地"
                           valueLink={this.linkState('area')}
                />
                <br/>
                <TextField style={styles.content}
                           hintText="可输入多个关键字,空格分割,如:手游ARPG"
                           floatingLabelText="产品类型"
                           multiLine={true}
                           rows={2}
                           valueLink={this.linkState('type')}
                />
                <TextField style={styles.content}
                           hintText="可输入多个关键字,空格分割,如:欧美魔幻"
                           floatingLabelText="产品题材"
                           multiLine={true}
                           rows={2}
                           valueLink={this.linkState('ip')}
                />
                <br/>
                <TextField style={styles.content}
                           hintText="可输入多个关键字,空格分割,如:女性 休闲"
                           floatingLabelText="主打市场"
                           multiLine={true}
                           rows={2}
                           valueLink={this.linkState('market')}
                />
                <TextField style={styles.content}
                           hintText="完成度(0-100)%"
                           floatingLabelText="完成度"
                           multiLine={true}
                           rows={2}
                           valueLink={this.linkState('finish')}
                />
                <br/>
                <SelectField id='frontValue' style={styles.content}
                             hintText="前端技术..."
                             floatingLabelText="前端"
                             value={this.state.frontValue}
                             onChange={this.createHandler('frontValue')}

                >
                    {frontItems}
                </SelectField>

                <SelectField style={styles.content}
                             hintText="后端技术..."
                             floatingLabelText="后端"
                             value={this.state.endValue}
                             onChange={this.createHandler('endValue')}

                >
                    {endItems}
                </SelectField>
                <br/>
                <TextField style={styles.content}
                           hintText="多少预付/版权,分成多少?"
                           floatingLabelText="合作条件"
                           multiLine={true}
                           rows={2}
                           valueLink={this.linkState('rule')}
                /><br />
                <TextField style={styles.content}
                           hintText="团队介绍"
                           floatingLabelText="团队介绍"
                           multiLine={true}
                           rows={2}
                           valueLink={this.linkState('team')}
                /><br />
                <TextField style={styles.content}
                           hintText="制作人介绍"
                           floatingLabelText="制作人介绍"
                           multiLine={true}
                           rows={2}
                           valueLink={this.linkState('producer')}
                /><br />
                <div style={styles.saveBtDiv}>
                    <RaisedButton label="保存"
                                  secondary={true}
                                  onTouchTap={this.handleSave}
                    />

                </div>
            </Paper>
        );
    }
});

export default ProductInsert;