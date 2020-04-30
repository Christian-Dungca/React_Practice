import React, { Suspense } from 'react'
import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
import BuggyComponent from './Components/BuggyComponent'
import { ThemeContext, themes } from './Components/ThemeContext'
import ThemedButton from './Components/ThemedButton'
import ThemeTogglerButton from './Components/ThemeTogglerButton'

/**
 * * React.lazy function lets you render a dynamic import as a regular component
 * * should be rendered in a Suspense component
 */

const HeaderComponent = React.lazy(() => import('./Components/Header'))

// ? This is an intermediate component that uses the ThemedButton
function Toolbar(props) {
    return <ThemedButton>Change Theme</ThemedButton>
}

/**
 * * Context.Provider - accepts a value prop to be passed to consuming component that are descendents of Provider
 * * All consumers that are descendents will re-render whenever the Provider's value prop changes
 */

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }

        this.toggleTheme = this.toggleTheme.bind(this)
        this.focusTextInput = this.focusTextInput.bind(this)

        this.textInput = React.createRef()
    }

    toggleTheme = () => {
        this.setState((state) => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark,
        }))
    }

    focusTextInput = () => {
        // ? accessing current to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <h1> Error Boundaries and Suspense Components </h1>
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderComponent />
                    </Suspense>
                </ErrorBoundary>

                <ErrorBoundary>
                    <BuggyComponent />
                </ErrorBoundary>ß 

                <h1> Using Context to change the color theme </h1>
                <ThemeContext.Provider value={this.state}>
                    <Content />
                </ThemeContext.Provider>

                <h1> Using Refs to target DOM nodes and React Elements </h1>
                <input type="text" ref={this.textInput} />
                <input
                    type="button"
                    value="focus on text input"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    )
}

export default App
