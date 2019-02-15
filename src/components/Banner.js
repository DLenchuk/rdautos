import React from 'react';

const Banner = ({ bannerTitle, style }) => {
    return (
        <div style={style}>
            <h1  >{bannerTitle}</h1>
        </div>
    );
};

export default Banner;