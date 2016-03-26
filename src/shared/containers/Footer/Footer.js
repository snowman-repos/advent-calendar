import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import StripeCheckout from "react-stripe-checkout";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

class Footer extends Component {

  onToken(token) {
    return token;
  };

  render() {

    return (

      <footer className="c-footer">
        <div className="c-footer__attribution">Made by&nbsp;
          <a href="https://yourweb.expert" title="Go to my website">Darryl Snow</a>
          <StripeCheckout
            name="Darryl Snow"
            description="Thank you for your generous donation"
            image=""
            componentClass="div"
            panelLabel="Buy me a drink"
            amount={500}
            currency="USD"
            stripeKey="pk_test_K4i3N250qcdeJ9sIy0a09jqY"
            locale="en"
            email="darryl@yourweb.expert"
            shippingAddress={false}
            billingAddress={false}
            zipCode={false}
            alipay={true}
            bitcoin={true}
            allowRememberMe={true}
            token={this.onToken}
            reconfigureOnUpdate={false}
            >
              <button className="o-button o-button--ghost">Buy me a drink</button>
            </StripeCheckout>
        </div>
        <div className="c-footer__share">
          <SocialLinks></SocialLinks>
        </div>
      </footer>

    );

  };

}

export default Footer;