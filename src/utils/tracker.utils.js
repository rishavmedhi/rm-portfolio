import ReactGA from "react-ga";

export const TRACKING_ID = "UA-198139037-1";

/**
 * initialises GA on the basis of the tracking ID
 * @param {string} TRACKING_ID
 * @param {boolean} testMode - if true, initialises in test mode for writing test cases
 */
export const initialiseGA = (TRACKING_ID, testMode = false) => {
  ReactGA.initialize(TRACKING_ID, { testMode: testMode });
};

/**
 * Triggers a pageview event in GA
 */
export const triggerPageView = () => {
  ReactGA.send("pageview");
};
