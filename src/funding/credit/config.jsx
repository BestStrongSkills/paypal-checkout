/* @flow */
/* @jsx jsxToHTML */

import { COUNTRY } from 'paypal-braintree-web-client';
import { jsxToHTML, JsxHTMLNode, Fragment, SVG } from 'belter/src'; // eslint-disable-line no-unused-vars

import { URLS } from '../../config';
import { BUTTON_LABEL, BUTTON_COLOR, LOGO_COLOR } from '../../constants';
import { PPLogo, PayPalLogo } from '../paypal/logo';
import { DEFAULT_LABEL_CONFIG } from '../common';

import { CreditLogo } from './logo';

export const CREDIT_CONFIG = {
    url: URLS.CHECKOUT,

    defaultLabel: BUTTON_LABEL.CREDIT,

    labels: {
        [BUTTON_LABEL.CREDIT]: {
            ...DEFAULT_LABEL_CONFIG,

            Label: ({ locale, logoColor }) => {
                if (locale.country === COUNTRY.DE) {
                    return <CreditLogo logoColor={ logoColor } />;
                }

                return (
                    <Fragment>
                        <PPLogo logoColor={ logoColor } /> <PayPalLogo logoColor={ logoColor } /> <CreditLogo logoColor={ logoColor } />
                    </Fragment>
                );
            },

            colors: [
                BUTTON_COLOR.DARKBLUE
            ],

            logoColors: {
                [ BUTTON_COLOR.DARKBLUE ]: LOGO_COLOR.WHITE
            },

            secondaryColors: {
                [BUTTON_COLOR.GOLD]:   BUTTON_COLOR.DARKBLUE,
                [BUTTON_COLOR.BLUE]:   BUTTON_COLOR.DARKBLUE,
                [BUTTON_COLOR.SILVER]: BUTTON_COLOR.DARKBLUE
            },

            defaultColor: BUTTON_COLOR.DARKBLUE,

            allowPrimary: false
        }
    }
};