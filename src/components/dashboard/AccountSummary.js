import React from "react";
import { Collapse, Table, Typography, Image, Space, Tag, Row, Col } from "antd";
import { assets, market } from "../../data";

const { Panel } = Collapse;

const accountBalances = (assets, account) => {
  return assets.map((asset) => {
    return {
      key: asset,
      name: asset,
      balance: account[asset],
      price: market[asset],
      value: account[asset] * market[asset]
    };
  });
};

const totalValue = (assets, account) => {
  const balances = accountBalances(assets, account);
  return balances.map(({ value }) => value).reduce((a, b) => a + b, 0).toFixed(2)
}

const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    render: (value) => (
      <Space>
        <Image src={`${value.toLowerCase()}.png`} width="35px" />
        <Typography.Text>{value.toUpperCase()}</Typography.Text>
      </Space>
    )
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    align: "right",
    render: (value) => (
      <span>{parseFloat(value).toFixed(2)}</span>
    )
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "right"
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    align: "right",
    render: (value) => (
      <span>{parseFloat(value).toFixed(2)}</span>
    )

  }
];

const compressAddress = (address) => {
  return (
    address.substring(0, 7) +
    ".." +
    address.substring(address.length - 7, address.length)
  );
};

const AccountSummary = (props) => {
  const { account } = props;
  const { name, address } = account;
  const availableAssets = assets.filter((asset) => account[asset] > 0);
  const balances = accountBalances(availableAssets, account);

  return (
    <Collapse ghost expandIconPosition="right">
      <Panel
        header={
          <Space direction="vertical" size="small">
            <Typography.Title level={5}>{name}</Typography.Title>
            <Tag>
              {compressAddress(address)}
            </Tag>
          </Space>
        }
        key="a1"
        extra={
          <Row>
            <Col span={12} style={{ textAlign: 'left' }}>
              <Space align='end'>
                {availableAssets.map((asset) => (
                  <Image key={asset} src={`${asset.toLowerCase()}.png`} width="25px" />
                ))}
              </Space>
            </Col>
            <Col span={12} style={{ textAlign: 'right', width: 120 }}>
              <Typography.Text>$ {totalValue(availableAssets, account)}</Typography.Text>
            </Col>
          </Row>

        }
      >
        <Table
          columns={columns}
          dataSource={balances}
          pagination={false}
          size="middle"
        />
      </Panel>
    </Collapse>
  );
};

export default AccountSummary;
