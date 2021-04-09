import React from 'react';
import { Table } from 'antd';
import '../../../../scss/PurchaseOrder.scss';
import MyTitle from './Title';

const PurchaseOrder = () => {
  const expandedRowRender = () => {
    const columns = [
      { title: 'tên mặt hàng', dataIndex: 'orders', key: 'orders' },
      { title: 'Đơn giá', dataIndex: 'price', key: 'price' },
    ];

    const data = [];
    for (let i = 0; i < 5; ++i) {
      data.push({
        key: i,
        orders: `oder` + i
      });
    }
    return (
      <div className="purchaseOrder__table2">
        <div className="purchaseOrder__table2--titleTable">Chi tiết đơn hàng</div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    );
  };

  const columns = [
    { title: 'Mã đơn hàng', dataIndex: 'id', key: 'id' },
    { title: 'Ngày mua', dataIndex: 'date', key: 'date' },
    { title: 'Tổng đơn hàng', dataIndex: 'totalOrders', key: 'totalOrders' },
    { title: 'Trạng thái đơn hàng', dataIndex: 'status', key: 'status' },
  ];

  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push({
      key: i,
      id: `id` + i,
      date: '8/4/2021',
      totalOrders: '1532.1224.124',
      status: 'đang chờ xử lý'
    });
  }

  return (
    <div className="purchaseOrder">
      <MyTitle title="Đơn hàng"/>
      <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
    </div>
  )
}

export default PurchaseOrder
