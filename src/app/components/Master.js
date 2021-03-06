import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Avatar from 'material-ui/lib/avatar';
import {Spacing} from 'material-ui/lib/styles';
import {
    StylePropable,
    StyleResizable,
} from 'material-ui/lib/mixins';

import {
    Colors,
    getMuiTheme,
} from 'material-ui/lib/styles';

import AppLeftNav from './AppLeftNav';
import FullWidthSection from './FullWidthSection';

const githubButton = (
    <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/sunwenteng"
        linkButton={true}
    />
);

const Master = React.createClass({

    propTypes: {
        children: React.PropTypes.node,
        history: React.PropTypes.object,
        location: React.PropTypes.object,
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object,
    },

    mixins: [
        StylePropable,
        StyleResizable,
    ],

    contextTypes: {
        router: React.PropTypes.object,
    },

    getInitialState() {
        return {
            muiTheme: getMuiTheme(),
            leftNavOpen: false,
        };
    },

    getChildContext() {
        return {
            muiTheme: this.state.muiTheme,
        };
    },

    componentWillMount() {
        this.setState({
            muiTheme: this.state.muiTheme,
        });
    },

    componentWillReceiveProps(nextProps, nextContext) {
        const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
        this.setState({
            muiTheme: newMuiTheme,
        });
    },

    getStyles() {
        const darkWhite = Colors.darkWhite;

        const styles = {
            appBar: {
                position: 'fixed',
                // Needed to overlap the examples
                zIndex: this.state.muiTheme.zIndex.appBar + 1,
                top: 0,
            },
            root: {
                paddingTop: Spacing.desktopKeylineIncrement,
                minHeight: 400,
            },
            content: {
                margin: Spacing.desktopGutter,
            },
            contentWhenMedium: {
                margin: `${Spacing.desktopGutter * 2}px ${Spacing.desktopGutter * 3}px`,
            },
            footer: {
                backgroundColor: Colors.grey900,
                textAlign: 'center',
            },
            a: {
                color: darkWhite,
            },
            p: {
                margin: '0 auto',
                padding: 0,
                color: Colors.lightWhite,
                maxWidth: 335,
            },
            iconButton: {
                color: darkWhite,
            },
        };

        if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) ||
            this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
            styles.content = this.mergeStyles(styles.content, styles.contentWhenMedium);
        }

        return styles;
    },

    handleTouchTapLeftIconButton() {
        this.setState({
            leftNavOpen: !this.state.leftNavOpen,
        });
    },

    handleChangeRequestLeftNav(open) {
        this.setState({
            leftNavOpen: open,
        });
    },

    handleRequestChangeList(event, value) {
        // this.props.history.push(value);
        this.context.router.push(value);
        this.setState({
            leftNavOpen: false,
        });
    },

    handleChangeMuiTheme(muiTheme) {
        this.setState({
            muiTheme: muiTheme,
        });
    },

    render() {
        const {
            history,
            location,
            children,
        } = this.props;

        let {
            leftNavOpen,
        } = this.state;

        const styles = this.getStyles();

        const title = 'MEGO ISSUE';

        let docked = false;
        let showMenuIconButton = true;

        if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE) && title !== '') {
            docked = true;
            leftNavOpen = true;
            showMenuIconButton = false;

            styles.leftNav = {
                zIndex: styles.appBar.zIndex - 1,
            };
            styles.root.paddingLeft = 256;
            styles.footer.paddingLeft = 256;
        }

        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
                    title={title}
                    zDepth={0}
                    iconElementRight={
                    // TODO
                        <Avatar>S</Avatar>
                    }
                    style={styles.appBar}
                    showMenuIconButton={showMenuIconButton}
                />
                {title !== '' ?
                    <div style={this.prepareStyles(styles.root)}>
                        <div style={this.prepareStyles(styles.content)}>
                            {React.cloneElement(children, {
                                onChangeMuiTheme: this.handleChangeMuiTheme,
                            })}
                        </div>
                    </div>
                    :
                    children
                }
                <AppLeftNav
                    style={styles.leftNav}
                    history={history}
                    location={location}
                    docked={docked}
                    onRequestChangeLeftNav={this.handleChangeRequestLeftNav}
                    onRequestChangeList={this.handleRequestChangeList}
                    open={leftNavOpen}
                />
                <FullWidthSection style={styles.footer}>
                    <p style={this.prepareStyles(styles.p)}>
                        {'Done By '}
                        <a style={styles.a} href="https://github.com/sunwenteng">
                            Sunwenteng.
                        </a>
                        {' Still going on. '}
                    </p>
                    {githubButton}
                </FullWidthSection>
            </div>
        );
    },
});

export default Master;