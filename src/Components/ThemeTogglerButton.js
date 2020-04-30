import React from 'react'
import { ThemeContext } from './ThemeContext'

/**
 * * Context.Consumer lets you subscribe to a context within a function component
 * ! requires a function component. the function recieves teh current context value and returns a react node
 * ? the value argument passed into the function will be the value prop of the closest provider of the context above in the tree
 */

function ThemeTogglerButton() {
    // ? Recieves theme and toggleTheme Function from the context
    return (
        // ! Context.Consumer returns a React Node
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{
                        backgroundColor: theme.background,
                        color: theme.foreground,
                    }}
                >
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeTogglerButton
