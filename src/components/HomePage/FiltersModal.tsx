import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useConfigure, useRefinementList } from "react-instantsearch-hooks-web";
import { RefinementFilter } from "./RefinementFilters";
import { MaxPriceFilter } from "./MaxPriceFilter";

export const FiltersModal = ({ hitNumber }: { hitNumber?: number }) => {
  const [typeFilter, setTypeFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState(0);
  const [allTypes, setAllTypes] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFiltersString = () => {
    let filterString = "";
    if (typeFilter) {
      filterString += "type:" + typeFilter;
    }

    if (maxPriceFilter) {
      if (filterString.length > 8) {
        filterString += ` AND price < ${maxPriceFilter}`;
      } else {
        filterString += `price < ${maxPriceFilter}`;
      }
    }
    return filterString;
  };

  useConfigure({
    hitsPerPage: 1000,
    filters: getFiltersString(),
  });

  const { items: itemTypes } = useRefinementList({
    attribute: "type",
  });

  useEffect(() => {
    if (allTypes.length < itemTypes.length) setAllTypes(itemTypes);
  }, [itemTypes.length, allTypes.length]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const clearFilters = () => {
    setMaxPriceFilter(0)
    setTypeFilter("")
  }

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        style={{ marginBottom: "10px" }}
      >
        Filters
      </Button>
      <Button
        type="default"
        onClick={clearFilters}
        style={{ marginBottom: "10px", marginLeft: "20px" }}
      >
        Clear filters
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
      >
        <div style={{ marginTop: "30px" }}>
          <RefinementFilter
            options={allTypes}
            setOptions={setTypeFilter}
            placeholder={"clothes type"}
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <MaxPriceFilter setMaxPriceFilter={setMaxPriceFilter} />
        </div>
        <div style={{ marginTop: "10px" }}>
        {hitNumber} results
        </div>
      </Modal>
    </>
  );
};
