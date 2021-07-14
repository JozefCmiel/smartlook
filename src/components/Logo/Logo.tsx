/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { Link } from 'react-router-dom';
import React from 'react';

import LogoSvg from '~svg/logoWithHexa.svg';
import SvgInliner from '~frontendComponents/Generic/SvgInliner';


const Logo: React.FC = function() {
    return (
        <Link to="/">
            <SvgInliner
                height={80}
                width={190}
                src={LogoSvg}
            />
        </Link>
    );
};

export default Logo;
