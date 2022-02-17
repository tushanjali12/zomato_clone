import React from 'react';
import { render } from 'react-dom';
import Card from 'react-credit-cards';
import { useHistory } from "react-router-dom";


import {
   formatCreditCardNumber,
   formatCVC,
   formatExpirationDate,
   formatFormData,
 } from './PaymentUtils';
import  './Payment.css';

import 'react-credit-cards/es/styles-compiled.css';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

 class Payment extends React.Component {
   handleClick = e => {
   this.props.history.push("/Thankyou");
   };
  state = {
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    issuer: '',
    focused: '',
    formData: null,
  };
  

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvv') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvv, focused, issuer, formData } = this.state;
    //history.push("/Thankyou");

    return (
      <div key="Payment">
        <div className="App-payment">
          
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvv={cvv}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="password"
                  name="cvc"
                  className="form-control"
                  placeholder="CVV"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block" onClick={this.handleClick}>PAY NOW</button>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => <div key={i}>{d}</div>)}
            </div>
          )}
          
        </div>
        
      </div>
    );
  }
}
export default withRouter(Payment);



