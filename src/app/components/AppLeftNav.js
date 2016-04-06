import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
import {
    Colors,
    Spacing,
    Typography,
} from 'material-ui/lib/styles';
import {StylePropable} from 'material-ui/lib/mixins';

const SelectableList = SelectableContainerEnhance(List);

const AppLeftNav = React.createClass({

    propTypes: {
        docked: React.PropTypes.bool.isRequired,
        history: React.PropTypes.object.isRequired,
        location: React.PropTypes.object.isRequired,
        onRequestChangeLeftNav: React.PropTypes.func.isRequired,
        onRequestChangeList: React.PropTypes.func.isRequired,
        open: React.PropTypes.bool.isRequired,
        style: React.PropTypes.object,
    },

    contextTypes: {
        muiTheme: React.PropTypes.object,
        router: React.PropTypes.object,
    },

    mixins: [
        StylePropable,
    ],

    handleRequestChangeLink(event, value) {
        window.location = value;
    },

    handleTouchTapHeader() {
        // this.props.history.push('/');
        this.context.router.push('/');
        this.setState({
            leftNavOpen: false,
        });
    },

    getStyles() {
        return {
            logo: {
                cursor: 'pointer',
                fontSize: 24,
                color: Typography.textFullWhite,
                lineHeight: Spacing.desktopKeylineIncrement + 'px',
                fontWeight: Typography.fontWeightLight,
                backgroundColor: Colors.cyan500,
                paddingLeft: Spacing.desktopGutter,
                marginBottom: 8,
            },
        };
    },

    render() {
        const {
            location,
            docked,
            onRequestChangeLeftNav,
            onRequestChangeList,
            open,
            style,
        } = this.props;

        const styles = this.getStyles();

        return (
            <LeftNav
                style={style}
                docked={docked}
                open={open}
                onRequestChange={onRequestChangeLeftNav}
            >
                <div style={this.prepareStyles(styles.logo)} onTouchTap={this.handleTouchTapHeader}>
                    MEGO ISSUE
                </div>
                <SelectableList
                    valueLink={{value: location.pathname, requestChange: onRequestChangeList}}
                >

                    <ListItem primaryText="Home" value="/home"/>

                    <ListItem
                        primaryText="Product Info"
                        primaryTogglesNestedList={true}
                        nestedItems={[
              <ListItem primaryText="Insert" value="/product/insert" />,
              <ListItem primaryText="Query" value="/product/query" />,
            ]}
                    />
                </SelectableList>
                <Divider />
                <SelectableList
                    subheader="Resources"
                    valueLink={{value: '', requestChange: this.handleRequestChangeLink}}
                >
                    <ListItem primaryText="GitHub" value="https://github.com/sunwenteng/mego-issue"/>
                    <ListItem primaryText="React" value="http://facebook.github.io/react"/>
                    <ListItem
                        primaryText="Material Design"
                        value="https://www.google.com/design/spec/material-design/introduction.html"
                    />
                </SelectableList>
            </LeftNav>
        );
    },
});

export default AppLeftNav;