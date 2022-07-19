import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Example() {
  return (
    <Card style={{ height: '80vh' }}>
      <Typography.Title heading={6}>
        这是一个基础的组件
      </Typography.Title>
      <Typography.Text>在这里你不能添加内容</Typography.Text>
    </Card>
  );
}

export default Example;
