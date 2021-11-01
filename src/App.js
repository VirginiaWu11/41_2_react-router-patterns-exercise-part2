import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";
import { useState } from "react";

function App() {
  const INITIAL_COLORS = ["red", "green", "blue", "yellow"];
  const [colors, setColors] = useState(INITIAL_COLORS);
  const addColor = (color) => {
    setColors([color, ...colors]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <NewColorForm addColor={addColor} />
          </Route>
          <Route exact path="/colors">
            <ColorList colors={colors} />
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
