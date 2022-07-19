import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Orders() {
    return (
        <Card style={{ height: '80vh' }}>
          <Typography.Title heading={6}>
            订单管理
          </Typography.Title>
          <Typography.Text>订单管理</Typography.Text>
        </Card>
      );
}

export default Orders;