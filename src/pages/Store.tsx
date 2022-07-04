import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item}></StoreItem>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Store;
