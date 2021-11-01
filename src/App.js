import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <NewColorForm />
          </Route>
          <Route exact path="/colors">
            <ColorList />
          </Route>
          <Route path="/colors/:color">
            <Color />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
