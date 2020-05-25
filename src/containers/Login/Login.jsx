import React from 'react';
import { Modal, Spin, Input } from 'antd';
import Field from '../../components/Field/Field';
import { useDispatch } from 'react-redux';

import useLogin from './useLogin';

export default function LoginContainer() {
  const {
    opened,
    closeModal,
    changeLoginForm,
    loginForm,
    loading,
  } = useLogin();
  const okButtonProps = {
    disabled: false,
    loading: loading,
  };

  const onChangeForm = (value) => {
    changeLoginForm({...loginForm, ...value});
  }

  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        visible={opened}
        onOk={() => dispatch.login.login(loginForm)}
        onCancel={closeModal}
        loading={loading}
        okButtonProps={okButtonProps}
        title="Login"
        okText="Login"
        cancelText="Cancelar"
      >
        <Spin spinning={loading}>
          <Field
            required
            type="input"
            name="email"
            label="E-mail"
            placeholder="Ex.: exemplo@adoteseupet.com"
            value={loginForm.email}
            onChange={el => onChangeForm({ email: el.target.value })}
          />
          <div className="field">
            <label className="label">Senha</label>
            <Input
              required
              type="password"
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              value={loginForm.password}
              onChange={el => onChangeForm({ password: el.target.value })}
            />
          </div>
        </Spin>
      </Modal>
    </div>
  );
}