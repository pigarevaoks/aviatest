import React from 'react';
import './Logo.sass';
import LogoImage from '../../images/Logo.svg'

export default function Logo() {
  return (
    <div className="logo">
			<img src={LogoImage} alt="logo"/>
		</div>
  );
}
