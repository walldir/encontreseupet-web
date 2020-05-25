import React from 'react';
import { Row, Col } from 'antd';

import './Footer.styles.less';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>About Us</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec libero lobortis, hendrerit tortor ut, elementum elit. Vivamus pellentesque diam ut pharetra facilisis. Nunc nec dignissim arcu. Nulla dapibus, urna bibendum commodo pharetra, quam lacus convallis ante, nec aliquam sem nulla non est.
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Useful Links</h2>
              <div>
                <a rel="noopener" href="#">Home</a>
              </div>
              <div>
                <a href="#">About</a>
              </div>
              <div>
                <a rel="noopener" href="#">Service</a>
              </div>
              <div>
                <a rel="noopener" href="#">Case Study</a>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contact Us</h2>
              <div>
                <a href="#">contact@encontreseupet.com</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">(85) 9.9999-9999</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Av. Rui Barbosa, Fortaleza - CE</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright &copy; All rights reserved</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
