import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Drink from './pages/Drink'
import Drinks from './pages/Drinks'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/:id">
                    <Drink />
                </Route>
                <Route exact path="/:category/:id">
                    <Drinks />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
