import React, { useState } from 'react';
import { Input, Button } from 'antd'
import '../../../../../scss/DrawalMoney.scss';

const DrawalMoney = () => {
  const [isActive, setIsActive] = useState(false)
  const activeConfirm = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="drawal-money">
      <table style={{width: "60%", margin: "auto"}}>
        <tbody>
          <tr>
            <td>Tiền hoa hông</td>
            <td>Số dư hiện tại</td>
          </tr>
          <tr className="drawal-money__number">
            <td>0</td>
            <td>0</td>
          </tr>
          <tr className="drawal-money__button">
            <td colSpan="2">
              <Button onClick={activeConfirm} type="primary" danger >Gởi yêu cầu rút tiền</Button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="drawal-money__confirm" style={{display: isActive ? "block" : "none"}}>
        <Input className="drawal-money__confirm--input" placeholder="nhập số tiền cần rút. Tổi thiểu 0 đống"/>
        <Button type="primary" danger className="drawal-money__confirm--button">xác nhận</Button>
      </div>
    </div>
  )
}

export default DrawalMoney
