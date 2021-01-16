import React, { useEffect, useContext } from 'react';
import { Table, Space, Image, Typography } from 'antd';
import Context from '../../context/Context';
import { addRate } from '../../actions/rates';

const columns = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol",
    render: (symbol) => (
      <Space>
        <Image src={`${symbol.toLowerCase()}.png`} width="35px" />
        <Typography.Text>{symbol.toUpperCase()}</Typography.Text>
      </Space>
    )
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
]

const Rates = () => {
  const [state, dispatch] = useContext(Context);

  const { rates } = state;

  const data = Object.keys(rates).map(key => ({
    key,
    symbol: key,
    value: rates[key]
  }));

  const fetchRates = async () => {

    const res = await fetch('/api/rates', {
      method: 'GET',
    });

    const result = await res.json();

    console.log(result)

    result.map(({ symbol, price }) => {
      dispatch(addRate(symbol, price));
    });
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <Table columns={columns} dataSource={data} />
  );
}

export default Rates;