import React from 'react';
import icoInstagram from '../../assets/images/icons/instagram.png'
import icoFace from '../../assets/images/icons/face.png'
import icoWhatsapp from '../../assets/images/icons/whatsapp.png'
import icoMail from '../../assets/images/icons/mail.png'

const Social = () => {
  return ( 
    <div className="social">
      <img src={icoInstagram} />
      <img src={icoFace} />
      <img src={icoWhatsapp} />
      <img src={icoMail} />
    </div>
   );
}
 
export default Social;