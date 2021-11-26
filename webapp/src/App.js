import Form from "./Components/Form.jsx";
import FormData from "./Components/FormList.jsx"
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormData} />
          <Route path="/new" component={Form} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;