import React from "react";
import logo from "./logo.svg";
import "./App.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { HomePage } from "./components/HomePage";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  if (process.env.ALGOLIA_KEY) {
    const searchClient = algoliasearch("URI18YZQS6", process.env.ALGOLIA_KEY);
    return (
      <InstantSearch searchClient={searchClient} indexName="FirstHandClothes">
        <div className="App">
          <HomePage />
        </div>
      </InstantSearch>
    );
  }
  return (
    <div className="App">
      <ErrorPage />
    </div>
  );
}

export default App;
