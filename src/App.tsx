import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { HomePage } from "./components/HomePage";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  if (process.env.REACT_APP_ALGOLIA_KEY) {
    const searchClient = algoliasearch("URI18YZQS6", process.env.REACT_APP_ALGOLIA_KEY);
    return (
      <InstantSearch searchClient={searchClient} indexName="FirstHandClothes">
        <div>
          <HomePage />
        </div>
      </InstantSearch>
    );
  }
  return (
    <div>
      <ErrorPage />
    </div>
  );
}

export default App;
