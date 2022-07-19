import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Tags() {
    return (
        <Card style={{ height: '80vh' }}>
            <Typography.Title heading={6}>
                这是一个标签管理的组件
            </Typography.Title>
            <Typography.Text>标签管理的内容</Typography.Text>
        </Card>
    );
}

export default Tags;