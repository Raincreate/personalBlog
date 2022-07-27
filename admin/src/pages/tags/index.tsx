import React from 'react';
import {
  Breadcrumb,
} from '@arco-design/web-react';


import styles from './style/index.module.less';

function Tags() {

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>Tags管理</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Tags;