import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/views/Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path={'/'}
          component={Homepage}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
