import React from 'react'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
}

/**
 * * Create a context object using React.createContext() API
 * * when renders a component that subscribes to this context, it will read the current context value from the closest matching Provider above the treee
 */
export const ThemeContext = React.createContext({
    themes: themes.dark,
    toggleTheme: () => {},
}) // ? Default Values
