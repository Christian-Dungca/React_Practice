import React, { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary'
import BuggyComponent from './Components/BuggyComponent'

/** 
 * * React.lazy function lets you render a dynamic import as a regular component 
 * * should be rendered in a Suspense component 
 */

const HeaderComponent = React.lazy(() => import('./Components/Header'));


function App() {
    return (
      <div>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <HeaderComponent />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </div>
    );
}

export default App;
