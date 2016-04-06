import React from 'react';
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins';

const ProductInsert = React.createClass({

    mixins: [
        StylePropable,
        StyleResizable,
    ],


    render() {
        return (
            <div>
                <p>this is ProductInsert Page</p>
                <p>中文</p>
            </div>
        );
    },
});

export default ProductInsert;