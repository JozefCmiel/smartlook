/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import Svg from 'react-inlinesvg';
import React from 'react';


interface Props {
    height?: number
    src: string
    width?: number
}

const SvgInliner: React.FC<Props> = function({ height, src, width }: Props) {
    return (
        <Svg
            height={height}
            src={src}
            width={width}
        />
    );
};

export default SvgInliner;
