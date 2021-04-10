import React, { useState } from 'react';
import '../../../scss/cart.scss';
import { useSelector } from 'react-redux';

const Cart = () => {
  const listCart = useSelector(store => store.Cart)
  const data = listCart

  const deleteItem = (id) => {
    console.log(id);
  }
  return (
    <div className="cart">
      <table class="table">
        <thead>
          <tr>
            <th>sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>xoá</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            data.map((item, index)=> {
              return (
                <>
                  <tr>
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
