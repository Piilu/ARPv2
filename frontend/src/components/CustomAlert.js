import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function CustomAlert(props) {
    const{closeAlert,text,variant,item} = props
  

    return (

        <Alert className=' m-0' show={true} variant={variant} onClose={()=>{closeAlert(item)}} dismissible >
        {text}
        {item.id}
      </Alert>
    );

}

export default CustomAlert;