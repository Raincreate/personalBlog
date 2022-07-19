import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Abouts() {
    return (
        <Card style={{ height: '80vh' }}>
          <Typography.Title heading={6}>
            这是一个关于管理的组件
          </Typography.Title>
          <Typography.Text>这是一个关于管理的组件</Typography.Text>
        </Card>
      );
}

export default Abouts;