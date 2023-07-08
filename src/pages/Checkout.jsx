import React from "react";
import processors from "../data/items.json";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";
import GooglePayButton from "@google-pay/button-react";
import "../Styles/Checkout.css";
import { Link } from "react-router-dom";
import AccountContext from "../context/AccountContext";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { user, handleCallbackResponse } = useContext(AccountContext);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "413293266690-78rcc8u2aik1q4n9ihqvl3j9ais1oktc.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("checkout-sigin"), {
      theme: "outline",
      size: "large",
    });
  }, [user, handleCallbackResponse]);

  if (cartItems.length > 0) {
    var p = cartItems
      .reduce((total, cartItem) => {
        const item = processors.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
      }, 0)
      .toString();
  }

  const handleOrder = (e) => {
    //send states + email from account + price + items
    e.preventDefault();
    const cred = {
      firstName: fname,
      lastName: lname,
      address,
      city,
      state,
      zip,
      phone,
      email: user.email,
      price: p,
      products: cartItems,
      time: new Date().toLocaleString(),
    };
    console.log(cred);
    setIsPending(true);
    fetch("http://localhost:5000/api/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    }).then(() => {
      console.log("success");
      setCartItems({});
      setIsPending(false);
    });
    //redirect to homepage
  };

  if (p > 0)
    if (Object.keys(user).length === 0) {
      return (
        <div id="checkout">
          <ul id="checkout-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
          <div id="pay">
            <div id="total-price">
              <h3>Total to pay:</h3>
              <h3>${p}</h3>
            </div>
            <div id="checkout-sigin"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="checkout">
          <ul id="checkout-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
          <div id="pay">
            <div id="total-price">
              <h3>Total to pay:</h3>
              <h3>${p}</h3>
            </div>
            <div id="method">
              <GooglePayButton
                environment="TEST"
                buttonSizeMode="fill"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "Demo Merchant",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: p,
                    currencyCode: "USD",
                    countryCode: "US",
                  },
                  shippingAddressRequired: true,
                  callbackIntents: [
                    "SHIPPING_ADDRESS",
                    "PAYMENT_AUTHORIZATION",
                  ],
                }}
                onLoadPaymentData={(paymentRequest) => {
                  console.log("Success", paymentRequest);
                }}
                onPaymentAuthorized={(paymentData) => {
                  console.log("Payment Authorised Success", paymentData);
                  return { transactionState: "SUCCESS" };
                }}
                onPaymentDataChanged={(paymentData) => {
                  console.log("On Payment Data Changed", paymentData);
                  return {};
                }}
                existingPaymentMethodRequired="false"
                buttonColor="black"
                buttonType="Buy"
              />
              <h3>Or Pay on Delivery by filling the fields below</h3>
            </div>
            <form onSubmit={handleOrder} id="credentials">
              <div id="names">
                <input
                  value={fname}
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  id="input-fname"
                  className="credential-input right-gap"
                  required
                  onChange={(e) => setFname(e.target.value)}
                />
                <input
                  value={lname}
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  id="input-lname"
                  className="credential-input"
                  required
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <input
                value={address}
                type="text"
                name="address"
                placeholder="Address"
                id="input-address"
                className="credential-input"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              <div id="city-state">
                <input
                  value={city}
                  type="text"
                  name="city"
                  placeholder="City"
                  id="input-city"
                  className="credential-input right-gap"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  value={state}
                  type="text"
                  name="state"
                  placeholder="State"
                  id="input-state"
                  className="credential-input right-gap"
                  required
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  value={zip}
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  id="input-zip"
                  className="credential-input"
                  required
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <input
                value={phone}
                type="text"
                name="phone"
                placeholder="Phone Number"
                id="input-phone"
                className="credential-input"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              {isPending && (
                <button
                  type="submit"
                  className="credential-input btn-pending"
                  disabled
                >
                  Pending
                </button>
              )}
              {!isPending && (
                <button type="submit" className="credential-input btn-orange">
                  Order
                </button>
              )}
            </form>
          </div>
        </div>
      );
    }
  else
    return (
      <div id="checkout">
        <div id="pay">
          <div>
            <h1 style={{ marginBottom: "20px" }}>Cart is empty</h1>
            <Link to="../all">
              <h1 className="btn-white">Buy something ?</h1>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Checkout;
