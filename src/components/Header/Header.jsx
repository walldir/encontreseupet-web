import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import logo from '../../assets/images/logo.png';

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

  return (
    <header {...rest}>
      <a className="logo-wrapper" target="_blank">
        {/* <img src={logo} className="logo" /> */}
        {/* <Link to="/"><img src={logo} alt="logo" className="logo" /></Link> */}
        <Link to="/"><span>Encontre Seu Pet</span></Link>
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
            <UserOutlined style={{ color: '##fdb43e', marginRight: 3 }} /> <span className="userName"> {session.name}</span>
            <Button onClick={() => {}}>Cadastrar PET</Button>
            <Button onClick={onLogout} style={{ marginLeft: 10 }}>Sair</Button>
          </div>
        )}
        
      </div>
    </header>
  );
}
