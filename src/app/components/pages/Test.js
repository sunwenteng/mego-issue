import React from 'react';
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins';
import MarkdownElement from '../MarkdownElement';
import changeLog from '../../../../CHANGELOG.md';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

const style = {
    marginLeft: 20,
};

const DividerExampleForm = (
    <Paper zDepth={2}>
        <TextField hintText="First name" style={style} underlineShow={false}/>
        <Divider />
        <TextField hintText="Middle name" style={style} underlineShow={false}/>
        <Divider />
        <TextField hintText="Last name" style={style} underlineShow={false}/>
        <Divider />
        <TextField hintText="Email address" style={style} underlineShow={false}/>
        <Divider />
    </Paper>
);

export default DividerExampleForm;


const githubButton = (
    <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/sunwenteng"
        linkButton={true}
    />
);

const iconStyles = {
    marginRight: 24,
};

const FontIconExampleSimple = (
    <div>
        <FontIcon
            className="muidocs-icon-action-home"
            style={iconStyles}
        />

        <FontIcon
            className="muidocs-icon-action-home"
            style={iconStyles}
            color={Colors.blue500}
        />

        <FontIcon
            className="muidocs-icon-action-home"
            style={iconStyles}
            color={Colors.red500}
            hoverColor={Colors.greenA200}
        />
    </div>
);

const Test = React.createClass({

    mixins: [
        StylePropable,
        StyleResizable,
    ],


    render() {
        return (
            <div>
                {githubButton}
                {FontIconExampleSimple}
                {DividerExampleForm}
            </div>
        );
    },
});

export default Test;