import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function WebPage() {
    return (
        <Card style={{ height: '80vh' }}>
          <Typography.Title heading={6}>
            网页管理
          </Typography.Title>
          <Typography.Text>网页管理</Typography.Text>
        </Card>
      );
}

export default WebPage;