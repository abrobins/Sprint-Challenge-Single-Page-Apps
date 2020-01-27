import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Route exact path="/" component={CharacterList} />
        <Route
          path="/characters/:id"
          render={props => <CharacterCard {...props} />}
        />
      </div>

      {/* <WelcomePage /> */}
    </main>
  );
}
