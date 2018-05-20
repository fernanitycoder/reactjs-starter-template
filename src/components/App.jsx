import React from 'react'
import { render } from 'react-dom'


class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul className="navbar">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">About</a></li>
                    <li className="nav-item"><a href="#">Contact</a></li>
                    <li className="nav-item">
                        <a href="#">
                            <span>User account</span>
                            <ul className="dropdown">
                                <li className="dropdown-item">Profile</li>
                            </ul>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <h2>This ReactJS project is now working</h2>
            </div>
        )
    }
}

render(<App />, document.getElementById('root-app'))
