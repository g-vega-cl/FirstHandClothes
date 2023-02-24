import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useConfigure, useRefinementList } from "react-instantsearch-hooks-web";
import { RefinementFilter } from "./RefinementFilters";

export const FiltersModal = () => {
  const [typeFilter, setTypeFilter] = useState("");
  const [allTypes, setAllTypes] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFiltersString = () => {
    let filterString = "";
    if (typeFilter) {
      filterString += "type:" + typeFilter;
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
    if(allTypes.length < itemTypes.length) setAllTypes(itemTypes)
  }, [itemTypes]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ marginBottom: "10px" }}
      >
        Filters
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
      >
        <div style={{ marginTop: "30px" }}>
          <RefinementFilter options={allTypes} setOptions={setTypeFilter} placeholder={"clothe types"}/>
        </div>
      </Modal>
    </>
  );
};
