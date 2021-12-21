import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Automation from 'pages/Automation';
import Qa from 'pages/Qa'
import WebApps from 'pages/Webapps'
import ScrollToTop from 'components/ScrollToTop';
import Services from 'pages/nav-pages/Services';
import About from 'pages/nav-pages/About';
import Projects from 'pages/nav-pages/Projects';
import Uiux from 'pages/Uiux';
import ContactUs from 'pages/Contact';

function App() {

  return (
    <div className="App font-mont">

      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/uiux">
            <Uiux />
          </Route>
          <Route path="/automation">
            <Automation />
          </Route>
          <Route path="/webapps">
            <WebApps />
          </Route>
          <Route path="/qa">
            <Qa />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
