import React from 'react';
import { Link } from 'react-router-dom';

const ServicesScreen = () => {
    return (
            <div class="ui grid">
                <div class="four wide column">
                    <div class="ui vertical fluid tabular menu">
                    <Link to="/about" class="item active">
                        Dealer Services
                    </Link>
                    <a class="item">
                        Odor Remediation
                    </a>
                    <a class="item">
                        Companies
                    </a>
                    <a class="item">
                        as
                    </a>
                    </div>
                </div>
                <div class="twelve wide stretched column">
                    <div class="ui segment">
                    This is an stretched grid column. This segment will always match the tab height
                    </div>
                </div>
                </div>
    );
};

export default ServicesScreen;