import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown } from 'antd';

import { UserOutlined, DownOutlined } from '@ant-design/icons';

import logo from '../../assets/images/default.png';

import './Header.styles.less';



export default function Header(props) {
  const {
    onLogin,
    onRegister,
    onLogout,
    logged,
    session,
    ...rest
  } = props;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">
          Editar Perfil
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={onLogout}>
          Sair
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header {...rest}>
      <a className="logo-wrapper" target="_blank">
        {/* <img src={logo} className="logo" /> */}
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
        {/* <Link to="/"><span>Encontre Seu Pet</span></Link> */}
      </a>
      <div className="button">
        {!logged && (
          <div>
            <Button onClick={onLogin}>Login</Button>  
            <Button onClick={onRegister} style={{ marginLeft: 10 }}>Cadastrar</Button>
          </div>
        )}

        {logged && (
          <div>
            <Button onClick={() => {}}>Cadastrar PET</Button>
            <Dropdown className="userNameMenu" overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <UserOutlined style={{  marginLeft: 10 }} /> <span> {session.name}</span> <DownOutlined />
              </a>
            </Dropdown>
          </div>
        )}
        
      </div>
    </header>
  );
}
