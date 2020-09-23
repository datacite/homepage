'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import * as React from 'react';
import ReactDOM from 'react-dom';
import CookieConsent from 'react-cookie-consent'

const e = React.createElement;
const domContainer = document.querySelector('#consent');

function Consent() {
  let domain = 'localhost'
  const cdnUrl = domContainer.attributes.getNamedItem("data-cdn-url").value;
  if (
    cdnUrl === 'https://datacite.org'
  ) {
    domain = '.datacite.org'
  } else if (
    cdnUrl === 'https://www.stage.datacite.org'
  ) {
    domain = '.stage.datacite.org'
  }

  return (
    <CookieConsent
      containerClasses="consent-cookie"
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      sameSite="strict"
      cookieName="_consent"
      extraCookieOptions={{ domain: domain }}
      overlay={true}
      enableDeclineButton
    >
      We use cookies on our website. Some are technically necessary, others help
      us improve your user experience. You can decline non-essential cookies by
      selecting “Reject”. Please see our{' '}
      <a
        href="https://datacite.org/privacy.html"
        className="consent-link"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>{' '}
      for further information about our privacy practices and use of cookies.{' '}
    </CookieConsent>
  )
}

ReactDOM.render(e(Consent), domContainer);
