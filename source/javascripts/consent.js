'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import * as React from 'react';
import ReactDOM from 'react-dom';
import CookieConsent from 'react-cookie-consent'

const e = React.createElement;

function Consent() {
  let domain = 'localhost';
  let hostname = window.location.hostname.split('.');
  switch (hostname.length) {
    case 1:
      domain = 'localhost';
      break;
    case 2:
    case 3:
      domain = '.datacite.org';
      break;
    case 4:
      domain = '.stage.datacite.org';
  }

  const cookieStyle = { fontSize: '16px', height: '90px' }
  const linkStyle = { color: '#fecd23' }

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
    >
      We use cookies on our website. Some are technically necessary, others help
      us improve your user experience. You can decline non-essential cookies by
      selecting “Reject”. Please see our{' '}
      <a
        href="https://datacite.org/privacy.html"
        style={linkStyle}
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>{' '}
      for further information about our privacy practices and use of cookies.{' '}
    </CookieConsent>
  )
}

const domContainer = document.querySelector('#consent');
ReactDOM.render(e(Consent), domContainer);
