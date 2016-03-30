import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Calendar from "./Calendar"

describe("Calendar", function () {

  it("renders without problems", function () {

    let calendar = TestUtils.renderIntoDocument(<Calendar/>);
    let heading = TestUtils.findRenderedDOMComponentWithTag(calendar, "h1");
    expect(heading).not.toBeUndefined();
    expect(heading).not.toBeNull();
    expect(heading.innerText).toMatch(/Calendar/g);

  });

});