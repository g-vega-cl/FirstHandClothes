export interface IAlgoliaProductHit {
  name: string;
  type: string;
  color: string;
  size: string;
  price: number;
  image: string;
  description: string;
  objectID: string;
}

export interface IAlgoliaRefinement {
  count: number;
  highlighted?: string;
  isExcluded?: boolean;
  isRefined?: boolean;
  label: string;
  value: string;
}
