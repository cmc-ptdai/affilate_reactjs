import React from 'react';
import { Card } from 'antd';
import '../../../scss/ProjectItem.scss';

const { Meta } = Card;


const ProductItem = () => {
  return (
    <div className="productItem">
      <Card
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <div className="productItem__footer">
          <div className="productItem__footer--title">
            <label>Chữ kí số cho cá nhân gói 3 năm</label>
          </div>
          <div className="productItem__footer--price">
            <label>800.000 VND</label>
          </div>
          <div className="productItem__footer--addCart">
            <button><i className="fas fa-cart-plus"></i> thêm vào giỏ hàng</button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductItem
