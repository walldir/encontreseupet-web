import React from 'react';
import { Input } from 'antd';

import './Field.styles.less';

export default function Field({ label, type, ...props }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <Input {...props} />
    </div>
  );
}