import React from "react";
import { Layout, Tabs, Row, Col } from "antd";
import { LineChartOutlined, RiseOutlined, DollarCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Dashboard from "./Dashboard";
import Defi from "./Defi";
import Market from './Market';

const { Content } = Layout;
const { TabPane } = Tabs;

export default function App() {
  return (
    <Layout>
      <Content style={{ background: "#fff" }}>
        <Row>
          <Col
            xs={{ offset: 2, span: 20 }}
            sm={{ offset: 2, span: 20 }}
            md={{ offset: 4, span: 16 }}
            xl={{ offset: 4, span: 16 }}
            xll={{ offset: 4, span: 16 }}
          >
            <Tabs defaultActiveKey="dashboard" size="large">
              <TabPane
                tab={
                  <span>
                    <LineChartOutlined />
                    Dashboard
                  </span>
                }
                key="dashboard"
              >
                <Dashboard />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <RiseOutlined />
                    DeFi
                  </span>
                }
                key="defi"
              >
                <Defi />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <DollarCircleOutlined />
                    Market
                  </span>
                }
                key="market"
              >
                <Market />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
