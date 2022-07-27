import React from 'react';
import {
  Breadcrumb,
} from '@arco-design/web-react';


import styles from './style/index.module.less';

function User() {

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>User管理</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default User;