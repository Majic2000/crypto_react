import React from 'react'
// Package to take care of the numbers
import millify from 'millify';
// Antd design components
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(data)

  if(isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading">Global crypto stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total exchanges" value={globalStats.totalExchanges}/></Col>
        <Col span={12}><Statistic title="Total market cap" value={globalStats.totalMarketCap}/></Col>
        <Col span={12}><Statistic title="Total 24h volume" value={globalStats.total24hVolume}/></Col>
        <Col span={12}><Statistic title="Total markets" value={globalStats.totalMarkets}/></Col>
      </Row>
    </>
  )
}

export default Homepage;
