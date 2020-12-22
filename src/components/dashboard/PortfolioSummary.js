import React, { useContext } from "react";
import { Row, Col, Statistic, Card } from "antd";


const Total = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
        <Card>
          <Statistic
            title="Total Assets"
            value={4000}
            precision={2}
            prefix="USD"
          />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
        <Card style={{ textAlign: "right" }}>
          <Statistic
            title="Net Assets"
            value={1000.45}
            precision={2}
            prefix="USD"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Total;
