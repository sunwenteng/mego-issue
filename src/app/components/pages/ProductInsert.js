import React from 'react';
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins';
import MarkdownElement from '../MarkdownElement';
import changeLog from '../../../../CHANGELOG.md';

const ProductInsert = React.createClass({

    mixins: [
        StylePropable,
        StyleResizable,
    ],

    render() {
        return (
            <div>
                <p>this is ProductInsert Page</p>
                <MarkdownElement text={changeLog} />
            </div>
        );
    },
});

export default ProductInsert;