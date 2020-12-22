import React, { useContext } from "react";
import { Row, Col, Divider, Button } from "antd";
import AccountSummary from "./dashboard/AccountSummary";
import PortfolioSummary from "./dashboard/PortfolioSummary";
import Context from "../context/Context";
import { updateAccount } from '../actions/account';

const Dashboard = () => {
  const [state, dispatch] = useContext(Context);

  const { accounts } = state;

  const refreshDashboard = () => {
    accounts.map(async (account) => {
      dispatch(await updateAccount(account));
    })
  }


  return (
    <React.Fragment>
      <PortfolioSummary />
      <Button onClick={refreshDashboard}>Refresh</Button>
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
