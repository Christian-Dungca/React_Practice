import React from 'react';
import { ThemeContext } from './ThemeContext';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;

        return (
            <button {...props} style={{ backgroundColor: theme.background, color: '#fff' }} />
        )
    }
}

/**
 * * contextType property on a class can be assigned a context object
 * ? this lets you consume the nearest current value of that context type using "this.context"
 * ! use Context.Consumer to subscribe to context changes within a function component 
 */
ThemedButton.contextType = ThemeContext

export default ThemedButton
