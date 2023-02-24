import React from "react";
import { Card, Space } from "antd";
import { IAlgoliaProductHit } from "../../interfaces/algoliaTypes";
import "./itemCard.css"

export const ItemCard = ({
  name,
  size,
  description,
  image,
  price,
}: Partial<IAlgoliaProductHit>) => (
  <Space size="small" style={{ marginBottom: "8px" }}>
    <Card className="customAntCardBody" style={{ width: 300, padding: 5 }} cover={<img alt="example" src={image} height={250}/>} hoverable>
      <h2 style={{margin: 0}}>{name}</h2>
      <p style={{margin: 0}}>{description}</p>
      <p style={{margin: 0}}>Size: {size}</p>
      <p style={{margin: 0}}>Price: ${price}</p>
    </Card>
  </Space>
);
