import ReactGA from "react-ga";

export const TRACKING_ID = "UA-198139037-1";

export const initialiseGA = (TRACKING_ID, testMode = false) => {
  ReactGA.initialize(TRACKING_ID, { testMode: testMode });
  // ReactGA.send('pageview')
};

export const triggerPageView = () => {
  ReactGA.send("pageview");
};
