import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Users() {
    return (
        <Card style={{ height: '80vh' }}>
          <Typography.Title heading={6}>
            users管理
          </Typography.Title>
          <Typography.Text>用还管理</Typography.Text>
        </Card>
      );
}

export default Users;