import React from 'react';
import { List, Card } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../../components/Footer/Footer';

import './PetsList.styles.less';

import usePetsList from './usePetsList';

export default function PetsListContainer() {
  const {
    pets,
  } = usePetsList();
  const listConfig = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 4,
    xxl: 3,
  };

  return (
    <div className="petsList">
      <Header />
      <div className="petsListBackground">
        <h1>Encontre seu amado pet</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      </div>
      <div className="content">
        <List
          grid={listConfig}
          dataSource={pets}
          renderItem={item => (
            <List.Item>
              <Link to="pets/id">
                <Card
                  hoverable
                  style={{ width: 290, }}
                  cover={<img alt="example" src={item.image} style={{ height: 200, backgroundSize: 'cover' }} />}
                >
                  <Card.Meta title={item.name} description={item.address} />
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>
      <Footer />
    </div>
  );
}