import { Select } from "antd";
import { IAlgoliaRefinement } from "../../interfaces/algolia";

export const RefinementFilter = ({
  options,
  setOptions,
  placeholder,
}: {
  options: IAlgoliaRefinement[];
  setOptions: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}) => {
  const onTypeChange = (value: string) => {
    setOptions(value)
  };

  const selectOptions = options.map((option) => {
    return {
      label: option.label,
      value: option.value,
    };
  });

  selectOptions.push({
    value: "",
    label: `All ${placeholder}`
  })

  return (
    <div style={{ display: "flex" }}>
      <Select
        showSearch
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onTypeChange}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={selectOptions}
        style={{ width: "100%" }}
      />
    </div>
  );
};
