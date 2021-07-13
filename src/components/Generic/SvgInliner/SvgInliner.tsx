/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import Svg from 'react-inlinesvg';


interface Props {
    height?: number
    src: string
    width?: number
}

const SvgInliner = function({ height, src, width }: Props): JSX.Element  {
    return (
        <Svg
            height={height}
            src={src}
            width={width}
        />
    );
};

export default SvgInliner;
