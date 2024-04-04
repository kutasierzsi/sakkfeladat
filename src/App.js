import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sakkdelete from './Sakkdelete';
import Sakkput from './Sakkput';
import Sakkpost from './Sakkpost';
import Sakkgetid from './Sakkgetid';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/new" component={Sakkpost} />
        <Route exact path="/edit/:id" component={Sakkput} />
        <Route exact path="/delete/:id" component={Sakkdelete} />
        <Route exact path="/:id" component={Sakkgetid} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
