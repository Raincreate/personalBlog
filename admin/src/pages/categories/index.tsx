import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Categories() {
    return (
        <Card style={{ height: '80vh' }}>
          <Typography.Title heading={6}>
            这是一个分类管理的组件
          </Typography.Title>
          <Typography.Text>在这里你暂时可以添加内容</Typography.Text>
        </Card>
      );
}

export default Categories;