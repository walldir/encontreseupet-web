import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import './Footer.styles.less';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Sobre Nós</h2>
              <div>
                Encontre Seu Pet é uma ferramenta online, com o intuito de facilitar a adoção de animais, além de ajudar ONGs disponibilizando um espaço para que elas possam criar campanhas e cadastrar seus pets disponíveis para adoção.
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Useful Links</h2>
              <div>
              <Link to="/" href="#" key="a">
                <a rel="noopener" href="#">
                  Início
                </a>
              </Link>
              </div>
              <div>
              <Link to="pets" href="#" key="a">
                <a rel="noopener" href="#">
                  PETS
                </a>
              </Link>
              </div>
              {/* <div>
                <a rel="noopener" href="#">Service</a>
              </div>
              <div>
                <a rel="noopener" href="#">Case Study</a>
              </div> */}
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contact Us</h2>
              <div>
                <a href="#">suporte@encontreseupet.com</a>
              </div>
              {/* <div>
                <a target="_blank" rel="noopener" href="#">(85) 9.9999-9999</a>
              </div> */}
              <div>
                <a target="_blank" rel="noopener" href="#">Fortaleza - CE</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright 2020 &copy; Todos os direitos reservados</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
