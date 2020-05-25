import React from 'react';
import { Row, Col } from 'antd';

import Header from '../../Header/Header';
import Footer from '../../../components/Footer/Footer';

import './PetDetails.styles.less';


function InfoRow(props) {
  const {
    title,
    description,
  } = props;
  return (
    <div className="infoContainer">
      <div className="infoTitle">{title}</div>
      <div className="infoDescription">{description}</div>
    </div>
  );
}

export default function PetDetailsContainer() {
  return (
    <div className="petDetails">
      <Header />
      <div className="petDetailsContent">
        <Row>
          <Col className="imageCol" flex={1}>
            <img className="petImage" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          </Col>
          <Col flex={3}>
            <h2>Cachorrinho 01</h2>
            <InfoRow title="Nome" description="Lorem ipsum " />
            <InfoRow title="Address" description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet" />
            <InfoRow title="Tipo" description="Lorem ipsum dolor sit amet" />
            <InfoRow title="Address" description="Lorem ipsum dolor sit amet" />
            <InfoRow title="Address" description="Lorem ipsum dolor sit amet" />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}