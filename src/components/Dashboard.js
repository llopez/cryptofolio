import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Divider, Button, Spin } from "antd";
import AccountSummary from "./dashboard/AccountSummary";
import PortfolioSummary from "./dashboard/PortfolioSummary";
import Context from "../context/Context";
import { updateAccount } from '../actions/account';
import { dai, usdc, eth, bat, uni } from "../blockchain/contracts";
import { assets, market } from '../data';

const Dashboard = () => {
  const [state, dispatch] = useContext(Context);

  const { accounts } = state;

  const [loading, setLoading] = useState(false);

  const refreshDashboard = () => {
    setLoading(true);
    accounts.map(async (account) => {
      const { address } = account;
      const daiBalance = await dai.getBalance(address);
      const usdcBalance = await usdc.getBalance(address);
      const ethBalance = await eth.getBalance(address);
      const batBalance = await bat.getBalance(address);
      const uniBalance = await uni.getBalance(address);

      dispatch(updateAccount({
        ...account,
        dai: daiBalance,
        usdc: usdcBalance,
        eth: ethBalance,
        bat: batBalance,
        uni: uniBalance,
      }));
      setLoading(false);
    })
  }

  useEffect(() => {
    refreshDashboard();
  }, [])


  const totalValue = accounts.map(account =>
    assets
      .filter(asset => !!account[asset])
      .map(asset => account[asset] * market[asset])
      .reduce((a, b) => a + b, 0)
  ).reduce((a, b) => a + b, 0)

  return (
    <React.Fragment>
      <PortfolioSummary totalValue={totalValue} />
      <Button onClick={refreshDashboard}>Refresh</Button>
      <Divider />
      <Row>
        <Col span="24">
          {
            loading &&
            <Row>
              <Col span='24' style={{ textAlign: 'center' }}>
                <Spin size='large' />
              </Col>
            </Row>
          }
          {!loading &&
            accounts.map((account) => (
              <AccountSummary account={account} key={account.address} />
            ))
          }
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
