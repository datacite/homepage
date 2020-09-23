'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Cookies } from 'react-cookie-consent';
const e = React.createElement;
const domContainer = document.querySelector('#ga');

function GoogleAnalytics() {
  const hasGivenConsent = Cookies.get('_consent') == 'true';
  const trackingId = domContainer.attributes.getNamedItem("data-ga").value;

  if (!hasGivenConsent || !trackingId) {
    return <div></div>
  }
  
  return (
    <>
      <script
        async
        src={'https://www.googletagmanager.com/gtag/js?id=' + trackingId}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${trackingId}');
          `
        }}
      />
    </>
  )
}

ReactDOM.render(e(GoogleAnalytics), domContainer);
