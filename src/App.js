import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Redirect from='/*' to='/' />
        </Switch>
    );
};

export default App;