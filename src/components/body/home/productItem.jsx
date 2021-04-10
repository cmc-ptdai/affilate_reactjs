import React from 'react';
import { Card } from 'antd';
import '../../../scss/ProjectItem.scss';
import { useDispatch } from 'react-redux';
import {addCart as addCartAction} from '../../../redux/action/Cartaction'



const ProductItem = ({dataItem}) => {
  console.log(dataItem);
  const dispatch = useDispatch()

  const addproduct = () => {
    dispatch(addCartAction(dataItem))
  }
  return (
    <div className="productItem">
      <Card
        hoverable
        cover={<img alt="example" src={dataItem.img} />}
      >
        <div className="productItem__footer">
          <div className="productItem__footer--title">
            <label>{dataItem.name}</label>
          </div>
          <div className="productItem__footer--price">
            <label>{dataItem.price} VND</label>
          </div>
          <div className="productItem__footer--addCart">
            <button onClick={addproduct}><i className="fas fa-cart-plus"></i> thêm vào giỏ hàng</button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductItem
