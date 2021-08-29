import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Drink from './pages/Drink'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/:id">
                    <Drink />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
