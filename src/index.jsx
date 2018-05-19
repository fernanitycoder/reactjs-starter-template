import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>This ReactJS project is now working</h2>
            </div>
        )
    }
}

render(<App />, document.getElementById('root-app'))
