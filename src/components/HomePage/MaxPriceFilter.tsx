import { InputNumber, Space } from "antd";

export const MaxPriceFilter = ({
  setMaxPriceFilter,
}: {
  setMaxPriceFilter: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const onChange = (value: number | null) => {
    if (value) {
      setMaxPriceFilter(value);
    } else setMaxPriceFilter(0);
  };
  return (
    <Space>
      $ <InputNumber onChange={onChange} placeholder="Max price" />
    </Space>
  );
};
