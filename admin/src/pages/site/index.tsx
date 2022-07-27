import React from 'react';
import {
  Breadcrumb,
} from '@arco-design/web-react';


import styles from './style/index.module.less';

function Site() {

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>Site管理</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Site;