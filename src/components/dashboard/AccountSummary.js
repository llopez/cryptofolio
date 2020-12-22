import React, { useEffect, useContext } from "react";
import { Collapse, Table, Typography, Image, Space } from "antd";
import { assets, market } from "../../data";
import Context from '../../context/Context';
import { updateAccount } from '../../actions/account'

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
  console.log(account.address, balances)
  return balances.map(({ value }) => value).reduce((a, b) => a + b, 0)
}

const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    render: (value) => (
      <Space>
        <Image src={`${value.toLowerCase()}.png`} width="35px" />
        <Typography.Text>{value}</Typography.Text>
      </Space>
    )
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    align: "right"
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
    align: "right"
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

  const [, dispatch] = useContext(Context);

  useEffect(() => {
    (async () => {
      dispatch(await updateAccount(account));
    })()
  }, []);

  return (
    <Collapse ghost expandIconPosition="right">
      <Panel
        header={
          <Space direction="vertical" size="small">
            <Typography.Title level={5}>{name}</Typography.Title>
            <Typography.Text
              underline
              type="secondary"
              style={{ fontSize: "10px" }}
            >
              {compressAddress(address)}
            </Typography.Text>
          </Space>
        }
        key="a1"
        extra={
          <Space>
            {availableAssets.map((asset) => (
              <Image key={asset} src={`${asset.toLowerCase()}.png`} width="25px" />
            ))}
            <Typography.Text>{totalValue(assets, account)}</Typography.Text>
          </Space>
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
