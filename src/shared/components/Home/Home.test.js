import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Home from "./Home"

describe("Home", function () {

  it("renders without problems", function () {

    let home = TestUtils.renderIntoDocument(<Home/>);
    let heading = TestUtils.findRenderedDOMComponentWithTag(home, "h1");
    expect(heading).not.toBeUndefined();
    expect(heading).not.toBeNull();
    expect(heading.innerText).toMatch(/Home/g);

  });

});