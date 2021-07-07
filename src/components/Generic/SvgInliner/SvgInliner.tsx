/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import Svg from 'react-inlinesvg';


function SvgInliner(value: { height?: number; src: string; width?: number }): JSX.Element  {
    return (
        <Svg
            height={value.height}
            src={value.src}
            width={value.width}
        />
    );
}

export default SvgInliner;
