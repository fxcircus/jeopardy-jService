import { StrictMode } from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import './style.css'

ReactDOM.render(
    <StrictMode>
        <Router>
            <App/>
        </Router>
    </StrictMode>, document.getElementById('root')
)