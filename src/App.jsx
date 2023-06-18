import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experiences-gain/Experience1'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/education" component={Education}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/experience" component ={Experience}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}
export default App;
