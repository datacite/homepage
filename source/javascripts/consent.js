"use strict";

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import * as React from "react";
import ReactDOM from "react-dom";
import CookieConsent from "react-cookie-consent";

const e = React.createElement;

function Consent() {
  let domain = "localhost";
  let hostname = window.location.hostname.split(".");
  switch (hostname.length) {
    case 2:
    case 3:
      domain = ".datacite.org";
      break;
    case 4:
      domain = window.location.hostname;
  }

  // handle random hostname from Vercel platform
  if (window.location.hostname.endsWith(".vercel.app"))
    domain = window.location.hostname;

  const cookieStyle = {
    fontSize: "16px",
    height: "95px",
    flexWrap: "nowrap !important",
  };
  const linkStyle = { color: "#fecd23" };
  const myContentStyle = {};

  return (
    <CookieConsent
      style={cookieStyle}
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      sameSite="strict"
      cookieName="_consent"
      extraCookieOptions={{ domain: domain }}
      overlay={true}
      enableDeclineButton
      buttonWrapperClasses="MY_BUTTON_WRAPPER_CLASS"
      containerClasses="CookieConsent MY_CONTAINER_CLASS"
      contentClasses="MY_CONTENT_CLASS"
      contentStyle={myContentStyle}
      declineButtonClasses="MY_DECLINE_BUTTON_CLASS"
    >
      We use cookies on our website. Some are technically necessary, others help
      us improve your user experience. You can decline non-essential cookies by
      selecting “Reject”. Please see our{" "}
      <a
        href="https://datacite.org/privacy.html"
        style={linkStyle}
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>{" "}
      for further information about our privacy practices and use of cookies.{" "}
    </CookieConsent>
  );
}

const domContainer = document.querySelector("#consent");
ReactDOM.render(e(Consent), domContainer);
