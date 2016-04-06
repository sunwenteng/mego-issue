import React from 'react';
import FullWidthSection from '../FullWidthSection';

import RaisedButton from 'material-ui/lib/raised-button';
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins';
import {Colors, Spacing, Typography} from 'material-ui/lib/styles';
import MarkdownElement from '../MarkdownElement';
import changeLog from '../../../../CHANGELOG.md';

const HomePage = React.createClass({

    mixins: [
        StylePropable,
        StyleResizable,
    ],

    _getHomePurpose() {
        const styles = {
            root: {
                backgroundColor: Colors.grey200,
            },
            content: {
                maxWidth: 700,
                padding: 0,
                margin: '0 auto',
                fontWeight: Typography.fontWeightLight,
                fontSize: 20,
                lineHeight: '28px',
                paddingTop: 19,
                marginBottom: 13,
                letterSpacing: 0,
                color: Typography.textDarkBlack,
            },
        };

        return (
            <FullWidthSection
                style={styles.root}
                useContent={true}
                contentStyle={styles.content}
                contentType="p"
                className="home-purpose"
            >
                Just for fun to copy from material-ui-doc. Hope to learn something through the website training.
            </FullWidthSection>
        );
    },

    _getHomeContribute() {
        const styles = {
            root: {
                backgroundColor: Colors.grey200,
                textAlign: 'center',
            },
            h3: {
                margin: 0,
                padding: 0,
                fontWeight: Typography.fontWeightLight,
                fontSize: 22,
            },
            button: {
                marginTop: 32,
            },
        };

        return (
            <FullWidthSection useContent={true} style={styles.root}>
                <h3 style={styles.h3}>
                    Want to help make this <span style={styles.nowrap}>project awesome? </span>
                    <span style={styles.nowrap}>Check out our repo.</span>
                </h3>
                <RaisedButton
                    label="GitHub"
                    primary={true}
                    linkButton={true}
                    href="https://github.com/sunwenteng/mego-issue"
                    style={styles.button}
                />
            </FullWidthSection>
        );
    },

    _onstartClick() {
        this.history.pushState(null, '/home');
    },

    render() {
        const style = {
            paddingTop: Spacing.desktopKeylineIncrement,
        };

        return (
            <div style={style}>
                {this._getHomePurpose()}
                {this._getHomeContribute()}
                <MarkdownElement text={changeLog} />
            </div>
        );
    },
});

export default HomePage;