import React from 'react';
import {
  Typography,
  Card,
  Table,
  TableColumnProps,
  Button,
  Input,
} from '@arco-design/web-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getList } from '../../api/categories';

import {
  UPDATE_FORM_PARAMS,
  UPDATE_LIST,
  UPDATE_LOADING,
  UPDATE_PAGINATION,
} from './redux/actionTypes';

function Categories() {
  const dispatch = useDispatch();

  const findData = () => {
    console.log('aaa');

  }

  const columns: TableColumnProps[] = [
    {
      title: '分类名称',
      dataIndex: 'name',
    },
    {
      title: '文章数量',
      dataIndex: 'articleNum',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
    },
    {
      title: '操作',
      dataIndex: '',
      render: () => {
        return (
          <div>
            <Button type='text' size='small' onClick={findData}>查看</Button>
            <Button type='text' size='small'>更新</Button>
            <Button type='text' size='small' status='danger'>删除</Button>
          </div>
        )
      }
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ];

  async function fetchData(current = 1, pageSize = 20, params = {}) {
    dispatch({ type: UPDATE_LOADING, payload: { loading: true } });

    try {
      const postData = {
        page: current,
        pageSize,
        ...params,
      };
      console.log('postData', postData);
      const res: any = await getList(postData);
      console.log('res:', res);
      if (res) {
        dispatch({ type: UPDATE_LIST, payload: { data: res.data.list } });
        dispatch({
          type: UPDATE_PAGINATION,
          payload: { pagination: { ...pagination, current, pageSize, total: res.data.totalCount } },
        });
        dispatch({ type: UPDATE_LOADING, payload: { loading: false } });
        dispatch({ type: UPDATE_FORM_PARAMS, payload: { params } });
      }
    } catch (error) { }
  }

  function onSearch(name) {
    fetchData(1, pagination.pageSize, { name })
  }

  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true,
    total: 96,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  const [loading, setLoading] = useState(false);

  function onChangeTable(pagination) {
    const { current, pageSize } = pagination;
    setLoading(true);
    setTimeout(() => {
      setPagination((pagination) => ({ ...pagination, current, pageSize }));
      setLoading(false);
    }, 1000);
    fetchData(1, pagination.pageSize, {  })
    console.log('fetchData(1, pagination.pageSize, {  })');
    
  }

  return (
    <Card style={{ height: '80vh' }}>
      <div style={{ marginBottom: 15 }}>
        <Button type='primary'>添加分类</Button>
        <Input.Search
          style={{ width: 300, float: 'right' }}
          searchButton
          placeholder='请输入分类名称搜索'
          onSearch={onSearch}
        />
      </div>
      <Typography.Text>
        <Table
          loading={loading}
          columns={columns}
          data={data}
          pagination={pagination}
          onChange={onChangeTable}
        />
      </Typography.Text>
    </Card>
  );
}

export default Categories;