import React, { useState, useEffect } from 'react';
import { Input, Button, Radio } from 'antd';
import '../../../../../scss/editLink.scss';
import userApi from '../../../../../api/userApi';
import affiliateApi from '../../../../../api/affiliateApi';


const optionsSelection = [
  { label: 'email', value: 'email' },
  { label: 'số điện thoại', value: 'phone' },
  { label: 'khác', value: 'khac'},
];
const EditLink = () => {
  const initialLink = 'http://test.newca.vn/affiliate/'
  const [user, setUser] = useState(null)
  const [valueSelect, setValueSelect] = useState('')
  const [inputSelect, setInputSelect] = useState('')
  const [valueLink, setValueLink] = useState('http://test.newca.vn/affiliate/')

  const fetchApi = async () => {
    const params = {
      email: "mr.tiennv@gmail.com"
    }
    const response = await userApi.getUsers(params)
    setUser(response)
  }

  useEffect(() => {
    fetchApi()
  },[])

  const onChangeSelection = (e) => {
    setValueSelect(e.target.value)
    if (e.target.value === 'email') {
      setValueLink(initialLink + user.email)
    }
    if (e.target.value === 'phone') {
      setValueLink(initialLink + user.phone)
    }
  }

  const onChangeInputSelect = e => {
    setInputSelect(e.target.value)
  }

  const saveEdit = async () => {
    setValueLink(initialLink + inputSelect)
    let params = {}
      if (valueSelect === 'email') {
        params = {
          affiliate_code: user.phone,
          email: user.email
        }
      }
      if (valueSelect === 'phone') {
        params = {
          affiliate_code: user.phone,
          email: user.email
        }
      }
      if (valueSelect === '') {
        params = {
          affiliate_code: valueLink,
          email: user.email
        }
      }

    const response = affiliateApi.getAffiliate(params)
    console.log(response);
    setValueSelect('')

  }

  return (
    <>
      <div className="editLink">
        <div className="editLink__link">
          <Input value={valueLink} disabled />
          <Button>copy link</Button>
        </div>
        <div className="editLink__title">Chọn định dạng cần thay đổi link</div>
        <div className="editLink__groupSelection">
          <Radio.Group
            options={optionsSelection}
            onChange={onChangeSelection}
            value={valueSelect}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div className="editLink__contentSelect">
          {
            user && <div className="editLink__contentSelect--groupInput">
              <Input onChange={onChangeInputSelect} placeholder= "Nhập tên link bạn muồn thay đổi" style={{display: valueSelect === 'khac' ? 'block' : 'none'}}/>
              <Button onClick={saveEdit} type='primary' danger>lưu thay đổi</Button>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default EditLink
