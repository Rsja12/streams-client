import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => <div>Page One</div>
const PageTwo = () => <div>Page Two</div>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
