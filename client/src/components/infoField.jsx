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
  return (<>
      <h2>Данные уже перенесены.</h2>
      <h3>Найдена информация по данной карте:</h3>
    <div style={{display: 'flex', flexDirection: 'column', width: 300, textAlign: 'center'}}>
      
      <UserInfoField label="Номер телефона" value={props.data.customer.login} />
      <UserInfoField label="Номер карты" value={props.data.card.cardNumber} />
    </div>
    </>);
};

export default InfoField;