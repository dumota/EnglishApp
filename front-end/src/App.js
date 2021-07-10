import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import AddWords from './component/AddWord';
import AllWord from './component/AllWord';
import EditWord from './component/EditWord';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add" component={AddWords}/>
        <Route exact path="/all" component={AllWord}/>
        <Route exact path="/edit/:id" component={EditWord}/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
