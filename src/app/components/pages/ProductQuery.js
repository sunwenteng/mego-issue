import React from 'react';
import {StylePropable, StyleResizable} from 'material-ui/lib/mixins';

const ProductQuery = React.createClass({

    mixins: [
        StylePropable,
        StyleResizable,
    ],

    render() {
        return (
            <div>
                <p>this is ProductQuery Page</p>
            </div>
        );
    },
});

export default ProductQuery;