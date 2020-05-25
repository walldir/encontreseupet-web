import React from 'react';
import { Modal, Spin, Input } from 'antd';
import Field from '../../components/Field/Field';
import { useDispatch } from 'react-redux';

import useRegister from './useRegister';

export default function RegisterContainer() {
  const {
    opened,
    closeModal,
    changeRegisterForm,
    registerForm,
    loading
  } = useRegister();
  const okButtonProps = {
    disabled: false,
    loading: false,
  };

  const onChangeForm = (value) => {
    changeRegisterForm({...registerForm, ...value});
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        visible={opened}
        onOk={() => dispatch.register.register(registerForm)}
        onCancel={closeModal}
        loading={loading}
        okButtonProps={okButtonProps}
        title="Cadastrar"
        okText="Cadastrar"
        cancelText="Cancelar"
      >
        <Spin spinning={loading}>
          <Field
            required
            type="input"
            name="name"
            label="Nome"
            placeholder="Ex.: João Mateus"
            value={registerForm.name}
            onChange={el => onChangeForm({ name: el.target.value })}
          />
          <Field
            required
            type="input"
            name="email"
            label="Email"
            placeholder="Ex.: example@adoteseupet.com"
            value={registerForm.email}
            onChange={el => onChangeForm({ email: el.target.value })}
          />
          <Field
            required
            type="input"
            name="phone"
            label="Telefone"
            placeholder="Ex.: (85) 9.9999-9999"
            value={registerForm.phone}
            onChange={el => onChangeForm({ phone: el.target.value })}
          />
          <div className="field">
            <label className="label">Senha</label>
            <Input
              required
              type="password"
              name="password"
              label="Senha"
              placeholder="Ex.: 123456"
              value={registerForm.password}
              onChange={el => onChangeForm({ password: el.target.value })}
            />
          </div>
        </Spin>
      </Modal>
    </div>
  );
}