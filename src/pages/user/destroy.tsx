import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import { useState, useEffect } from 'react'
import api from '@/api'
import './list.scss'

interface DataType {
  key: React.Key
  id: number
  name: string
  username: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '账号',
    dataIndex: 'username',
    key: 'username',
    width: 100,
  },
  {
    title: '用户名',
    width: 100,
    dataIndex: 'name',
    key: 'name',
  },
  // {
  //   title: '操作',
  //   key: 'operation',
  //   width: 100,
  //   render: () => <a>编辑</a>,
  // },
]

const Destroy = () => {
  const [params, setParams] = useState({
    page: 1,
    pageSize: 10,
    conditions: {},
  })
  const [data, setData] = useState({ list: [], total: 0 })
  const changePage = (page: number, pageSize: number) => {
    setParams({ ...params, page: page, pageSize: pageSize })
  }

  useEffect(() => {
    const loadList = async () => {
      const res = await api.user.list(params)
      const { list, total } = res.data
      setData({ list: list, total: total })
    }
    loadList()
  }, [params])

  return (
    <Table
      columns={columns}
      dataSource={data.list}
      sticky={{ offsetHeader: 64 }}
      rowKey={(record) => record.id}
      pagination={{
        current: params.page,
        total: data.total,
        pageSize: params.pageSize,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: () => `共 ${data.total} 条`,
        onChange: (page: number, pageSize: number) => {
          changePage(page, pageSize)
        },
      }}
    />
  )
}

export default Destroy
