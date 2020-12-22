import React from "react";
import { Layout, Tabs, Row, Col } from "antd";
import { LineChartOutlined, RiseOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Dashboard from "./Dashboard";
import Defi from "./Defi";

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
            <Tabs defaultActiveKey="t1" size="large">
              <TabPane
                tab={
                  <span>
                    <LineChartOutlined />
                    Dashboard
                  </span>
                }
                key="t1"
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
                key="t2"
              >
                <Defi />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
