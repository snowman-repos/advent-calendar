import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Error from "./Error"

describe("Error", function () {

  it("renders without problems", function () {

    let error = TestUtils.renderIntoDocument(<Error/>);
    let heading = TestUtils.findRenderedDOMComponentWithTag(error, "h1");

    expect(heading).not.toBeUndefined();
    expect(heading).not.toBeNull();
    expect(heading.innerText).toMatch(/404: Page not found/g);

  });

});