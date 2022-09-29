import React from 'react'
// Package to take care of the numbers
import millify from 'millify';
// Antd design components
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data)

  if(isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading">Global crypto stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total market cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 currencies in the wrold</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest crypto news</Title>
        <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage;
