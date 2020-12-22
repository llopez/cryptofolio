import React, { useContext } from "react";
import { Row, Col, Divider } from "antd";
import AccountSummary from "./dashboard/AccountSummary";
import PortfolioSummary from "./dashboard/PortfolioSummary";
import Context from "../context/Context";

const Dashboard = () => {
  const [state,] = useContext(Context);

  const { accounts } = state;

  return (
    <React.Fragment>
      <PortfolioSummary />
      <Divider />
      <Row>
        <Col span="24">
          {accounts.map((account) => (
            <AccountSummary account={account} key={account.address} />
          ))}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
