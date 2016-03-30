import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Create from "./Create"

describe("Create", function () {

  it("renders without problems", function () {

    let create = TestUtils.renderIntoDocument(<Create/>);
    let heading = TestUtils.findRenderedDOMComponentWithTag(create, "h1");
    expect(heading).not.toBeUndefined();
    expect(heading).not.toBeNull();
    expect(heading.innerText).toMatch(/Create New Calendar/g);

  });

});