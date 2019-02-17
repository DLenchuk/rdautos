import React from 'react';

import Banner from '../components/Banner';
import BrokerForm from '../components/BrokerForm';
import BrokerServiceSummary from '../components/BrokerServiceSummary';

class BrokerServiceScreen extends React.Component {
    render() {
        return (
            <div >
                <Banner bannerTitle="Broker Service" style={{ backgroundColor:'green', height:'100px', display:'flex', justifyContent: 'center'}} />
                <hr/>
                <div className="ui grid container" style={{ paddingTop:"3rem", justifyContent:"center" }} >
                    <BrokerServiceSummary textContainerStyle={{ width:"60%" }} />
                    <BrokerForm />
                </div>
            </div>
        );
    };
};

export default BrokerServiceScreen;