import React from 'react';
import {
  Breadcrumb,
} from '@arco-design/web-react';


import styles from './style/index.module.less';

function Articles() {

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Articles;
