import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Paper from 'material-ui/lib/paper';

const Container = React.createClass({

    propTypes: {
        children: React.PropTypes.node,
        text: React.PropTypes.string,
        style: React.PropTypes.object
    },

    render()
    {
        return (
            <Paper>
                <Toolbar>
                    <ToolbarGroup
                        float="left"
                    >
                        <ToolbarTitle
                            style={this.props.style}
                            text={this.props.text}
                        />
                    </ToolbarGroup>
                </Toolbar>
                {this.props.children}
            </Paper>
        );
    }
});

export default Container;