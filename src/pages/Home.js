import { Col, Layout, Row } from "antd";
import React from "react";
import BestSellers from "../components/list/BestSellers";
import CategoryList from "../components/list/CategoryList";

const Home = () => {

  return (

    <Layout.Content>
      <Row gutter={[0, 24]} style={{ width: "100%", minWidth: "100%" }}
      >
        <Col span={24}>
          <CategoryList />
        </Col>
        <Col span={24}>
          <BestSellers />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Home;
