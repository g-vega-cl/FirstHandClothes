import { useHits, SearchBox } from "react-instantsearch-hooks-web";
import { ItemCard } from "../ItemCard";
import { FiltersModal } from "./FiltersModal";
import "./homepage.css";

export const HomePage = () => {
  const { results } = useHits();
  return (
    <div style={{ padding: "50px" }}>
      <div style={{ width: "300px", marginBottom: "20px" }}>
        <SearchBox
          classNames={{
            submit: "customAlgoliaSearchboxButton",
            form: "customAlgoliaSearchboxInput",
            reset: "customAlgoliaSearchboxButton",
            loadingIndicator: "customAlgoliaSearchboxButton",
          }}
          placeholder="Search clothes"
        />
      </div>
      <div>
        <FiltersModal hitNumber={results?.nbHits}/>
      </div>
      <div>
        <p>{results?.nbHits} results</p>
      </div>

      {results?.hits.map((hit: any) => {
        return (
          <ItemCard
            key={hit.objectID}
            image={hit.image}
            name={hit.name}
            size={hit.size}
            description={hit.description}
            price={hit.price}
          />
        );
      })}
    </div>
  );
};
