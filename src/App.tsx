import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import "@assecosolutions/fox-select";
import "@assecosolutions/fox-list";
import "@assecosolutions/fox-textfield";
import "@assecosolutions/fox-app-bar";
import "@assecosolutions/fox-back-layer";
import "@assecosolutions/fox-content-layer";
import "@assecosolutions/fox-front-layer";

import "@assecosolutions/fox-card"; /*
import "@assecosolutions/fox-checkbox";*/
import "@assecosolutions/fox-button";
import "@assecosolutions/fox-icon";
import "@assecosolutions/fox-progress";

export const step1 = () => (
  <fox-content-layer>
    <div slot="header" className="content-header">
      <h2 className="p-3">Produktkonfigurator "Kugelschreiber"</h2>
    </div>
    <div slot="body" className="h-100 p-3 content-body">
      <div className="row">
        <fox-card class="col-6  ">
          <div className="p-3">
            <h3 className="text-client-base-color">Edel</h3>
            <p>Kugelschreiber mit Aluminuiumspitze</p>
            <div className="pt-2">
              <a href="#">
                Konfiguration <fox-icon>navigate_next</fox-icon>
              </a>
            </div>
          </div>
        </fox-card>
        <fox-card class="col-6">22</fox-card>
        <fox-card class="col-6">22</fox-card>
        <fox-card class="col-6">22</fox-card>
      </div>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/step2">step2</Link>
            <Link to="/step3">step3</Link>
            <Link to="/step4">step4</Link>
          </nav>
        </div>
      </Router>
    </div>
  </fox-content-layer>
);
export const step2 = () => <h1>Foo Page</h1>;
export const step3 = () => <h1>Bar Page</h1>;
export const step4 = () => <h1>Bar Page1</h1>;

function App() {
  return (
    <div className="App">
      <fox-app-bar></fox-app-bar>
      <div className="content-wrapper">
        <fox-back-layer>AP Way?</fox-back-layer>
        <fox-front-layer large>
          <Router>
            <Switch>
              <Route exact path="/" component={step1} />
              <Route exact path="/step2" component={step2} />
              <Route exact path="/step3" component={step3} />
              <Route exact path="/step4" component={step4} />
            </Switch>
          </Router>
        </fox-front-layer>
      </div>
    </div>
  );
}

export default App;
