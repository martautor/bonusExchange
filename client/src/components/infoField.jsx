import React from 'react';
import TextField from '@mui/material/TextField';
import '../css/infoField.css'
const UserInfoField = ({ label, value }) => {
  return (
    <TextField
      label={label}
      value={value}
      variant="outlined"
      fullWidth
      InputProps={{
        readOnly: true,
      }}
      style={{ marginBottom: '10px' }}
    />
  );
};

const InfoField = (props) => {
    console.log(props)
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 300, textAlign: 'center'}}>
      <UserInfoField label="Номер телефона" value={props.data.customer.login} />
      <UserInfoField label="Номер карты" value={props.data.card.cardNumber} />
      <UserInfoField label="Количество баллов" value={props.data.markParameters.mark} />
      <UserInfoField label="ФИО" value={props.data.customer.fio} />
    </div>
  );
};

export default InfoField;