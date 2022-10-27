import ReactGA from "react-ga";
import { initialiseGA, triggerPageView } from "../tracker.utils";

it("Initialising React GA in test mode", () => {
  initialiseGA("foo", true);
  expect(ReactGA.testModeAPI.calls).toEqual([["create", "foo", "auto"]]);
});

it("ReactGA Triggering Pageview", () => {
  triggerPageView();
  expect(ReactGA.testModeAPI.calls).toEqual([
    ["create", "foo", "auto"],
    ["send", "pageview"],
  ]);
});
