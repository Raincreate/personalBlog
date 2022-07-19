import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Comments() {
    return (
        <Card style={{ height: '80vh' }}>
          <Typography.Title heading={6}>
            评论管理
          </Typography.Title>
          <Typography.Text>评论管理</Typography.Text>
        </Card>
      );
}

export default Comments;