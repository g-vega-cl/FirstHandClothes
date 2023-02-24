import {
  useConfigure,
  useHits,
  SearchBox,
} from "react-instantsearch-hooks-web";

export const HomePage = () => {
  useConfigure({
    hitsPerPage: 1000,
  });

  const { results } = useHits();

  return (
    <div>
      <SearchBox />
      {results?.hits.map((hit: any) => (
        <div key={hit.objectID}>{hit.name}</div>
      ))}
    </div>
  );
};
