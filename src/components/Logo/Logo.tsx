import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import LogoSvg from '~svg/logoWithHexa.svg';
import SvgInliner from '~frontendComponents/Generic/SvgInliner';


function Logo() {
    return (
        <Link to="/">
            <SvgInliner
                height={80}
                width={190}
                src={LogoSvg}
            />
        </Link>
    );
}

export default Logo;
