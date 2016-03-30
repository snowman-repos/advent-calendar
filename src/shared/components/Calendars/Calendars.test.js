import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Calendars from "./Calendars"

describe("Calendars", function () {

  it("renders without problems", function () {

    let calendars = TestUtils.renderIntoDocument(<Calendars/>);
    let heading = TestUtils.findRenderedDOMComponentWithTag(calendars, "h1");
    expect(heading).not.toBeUndefined();
    expect(heading).not.toBeNull();
    expect(heading.innerText).toMatch(/Calendars/g);

  });

});