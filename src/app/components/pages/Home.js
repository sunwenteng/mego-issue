import React from 'react';
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins';
import MarkdownElement from '../MarkdownElement';
import changeLog from '../../../../CHANGELOG.md';

const HomePage = React.createClass({

    mixins: [
        StylePropable,
        StyleResizable,
    ],

    _onstartClick() {
        this.history.pushState(null, '/home');
    },

    render() {
        return (
            <div>
                <MarkdownElement text={changeLog} />
            </div>
        );
    },
});

export default HomePage;