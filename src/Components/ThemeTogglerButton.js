import React from 'react';
import { ThemeContext } from './ThemeContext'

function ThemeTogglerButton() {
    // ? Recieves theme and toggleTheme Function from the context
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background, color: theme.foreground }}
                >
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;