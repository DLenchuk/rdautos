import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import ServicesScreen from '../screens/ServicesScreen';
import DealerServiceScreen from '../screens/DealerServiceScreen';
import DetailingScreen from '../screens/DetailingScreen';
import OdorRemediationScreen from '../screens/OdorRemediationScreen';
import Header from './Header';

const App = () => {
    return (
        <div >
            
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={HomeScreen} />

                    <Route path="/services" exact component={ServicesScreen} />
                    <Route path="/services/dealer-service" exact component={DealerServiceScreen} />
                    <Route path="/services/detailing" exact component={DetailingScreen} />
                    <Route path="/services/odor-remediation" exact component={OdorRemediationScreen} />

                    <Route path="/about" exact component={AboutScreen} />

                    <Route path="/contact" exact component={ContactScreen} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;