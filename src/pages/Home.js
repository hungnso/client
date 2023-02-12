import { Col, Layout, Row } from "antd";
import React from "react";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/list/BestSellers";
import CategoryList from "../components/list/CategoryList";
import Footer from "../components/nav/Footer";

const Home = () => {

  return (
    <>
      <Layout.Content>
        <Row gutter={[0, 24]} style={{ width: "100%", minWidth: "100%" }}
        >
          <Col span={24}>
            <CategoryList />
          </Col>
          <Col span={24}>
            <BestSellers />
          </Col>
          <Col span={24}>
            <NewArrivals />
          </Col>
        </Row>
      </Layout.Content>
      <Footer />
    </>
  );


};

export default Home;
