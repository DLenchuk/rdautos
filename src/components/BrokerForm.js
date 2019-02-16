import React from 'react';
import { Field, reduxForm } from 'redux-form';

class BrokerForm extends React.Component {
    renderInput({ input, label, placeholder }) {
        return(
            <div className="field" style={{ display:"flex", flexDirection:"column" }} >
            <label style={{ fontSize: 14 , fontWeight:"900" }} >{ label }</label>
                <input {...input} placeholder={ placeholder } />
            </div>
        );
    }

    render() {
        return (
            <div style={{ border:"solid", borderColor:"black", borderWidth:"2px" }} >
                <form>
                    <Field name="firstName" component={this.renderInput} label="First Name" placeholder="John" />
                    <Field name="lastName" component={this.renderInput} label="Last Name" placeholder="Smith" />
                    <Field name="email" component={this.renderInput} label="Email" placeholder="johnsmith@email.com" />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'brokerForm'
})(BrokerForm);