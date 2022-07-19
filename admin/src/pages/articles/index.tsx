import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Articles(){
    return (
        <Card style={{ height: '80vh' }}>
          <Typography.Title heading={6}>
            这是一个文章管理的组件
          </Typography.Title>
          <Typography.Text>文章管理的内容</Typography.Text>
        </Card>
      );
}

export default Articles;