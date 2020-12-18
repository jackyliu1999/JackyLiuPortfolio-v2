import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Archive from "./components/Archive"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Archives" exact component={Archive} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Resume" exact component={Resume} />
      </Router>
    </div>
  );
}

export default App;
