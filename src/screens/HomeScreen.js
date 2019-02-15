import React from 'react';
import Banner from '../components/Banner';

const HomeScreen = props => {
    return (
        <div style={{ backgroundColor:'silver', display:'flex', flex:1, flexDirection:'column' }}>
        <Banner bannerTitle="-HOME-" style={{ backgroundColor:'gold', height:'100px', display:'flex', justifyContent: 'center'}} />
        </div>
    );
};

export default HomeScreen;

