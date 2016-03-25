import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Other from "./Other"

describe("Other", function () {

  it("renders without problems", function () {

    let other = TestUtils.renderIntoDocument(<Other/>);
    let heading = TestUtils.findRenderedDOMComponentWithTag(other, "h1");
    expect(heading).not.toBeUndefined();
    expect(heading).not.toBeNull();
    expect(heading.innerText).toMatch(/Other/g);

  });

});