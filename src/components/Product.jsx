import Card from "./card.jsx";

function Product({ title, price }) {
  return (
    <Card>
      <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
      <p style={{ margin: 0 }}>Price: ${price}</p>
    </Card>
  );
}

export default Product;
