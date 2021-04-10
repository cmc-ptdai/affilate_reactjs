import React, { useState } from 'react';
import { Table, Button, Tag, Space } from 'antd';
import '../../../scss/cart.scss';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'http://test.newca.vn/img/uploads/fca.jpg',
      name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
      price: '800.000',
      number: 3,
      money: '800.000',
    },
    {
      id: 2,
      img: 'http://test.newca.vn/img/uploads/fca.jpg',
      name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
      price: '800.000',
      number: 5,
      money: '800.000',
    },
    {
      id: 3,
      img: 'http://test.newca.vn/img/uploads/fca.jpg',
      name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
      price: '800.000',
      number: 4,
      money: '800.000',
    }
  ]

  const deleteItem = (id) => {
    console.log(id);
  }
  return (
    <div className="cart">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">sản phẩm</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Đơn giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Thành tiền</th>
            <th scope="col">xoá</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            data.map((item, index)=> {
              return (
                <>
                  <tr>
                    <td>{index}</td>
                    <td><img src={item.img}/></td>
                    <td className="cart__table--name"><span>{item.name}</span></td>
                    <td className="cart__table--price">{item.price}</td>
                    <td>
                      <div className="cart__table__number">
                        <button className="cart__table__number--increment">+</button>
                        <input value={item.number}/>
                        <button className="cart__table__number--decrement">-</button>
                      </div>
                    </td>
                    <td className="cart__table--price">{item.money}</td>
                    <td className="cart__table--delete"><button onClick={() => deleteItem(item.id)}>xoá</button></td>
                  </tr>
                </>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
