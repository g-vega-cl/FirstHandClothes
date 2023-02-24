import {
  useConfigure,
  useHits,
  SearchBox,
  useRefinementList
} from "react-instantsearch-hooks-web";
import { ItemCard } from "../ItemCard";
import "./homepage.css";

export const HomePage = () => {
  useConfigure({
    hitsPerPage: 1000,
  });

  const { refine: refineByType, items: typeItems } = useRefinementList({
    attribute: 'type',
    operator: 'and',
  })

  console.log("typeItems", typeItems)

  const { results } = useHits();
  return (
    <div style={{padding: "50px"}}>
      <div style={{ width: "300px", marginBottom: "20px"}}>
        <SearchBox
          classNames={{
            submit: "customAlgoliaSearchboxButton",
            form: "customAlgoliaSearchboxInput",
            reset: "customAlgoliaSearchboxButton",
            loadingIndicator: "customAlgoliaSearchboxButton"
          }}
          placeholder="Search clothes"
        />
      </div>
      <div>
        {/* <RefinementList attribute="type"/> */}
      </div>
      {results?.hits.map((hit: any) => {
        return <ItemCard key={hit.objectID} image={hit.image} name={hit.name} size={hit.size} description={hit.description} price={hit.price}/>
        })}
    </div>
  );
};
