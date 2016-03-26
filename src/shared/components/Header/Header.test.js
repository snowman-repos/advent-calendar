import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Header from "./Header"

describe("Header", function () {

  it("renders without problems", function () {

    let header = TestUtils.renderIntoDocument(<Header/>);
    let media = TestUtils.findRenderedDOMComponentWithClass(header, "o-media");
    let logo = TestUtils.findRenderedDOMComponentWithClass(header, "o-image--logo");
    let heading = TestUtils.findRenderedDOMComponentWithTag(header, "h1");

    expect(TestUtils.isDOMComponent(heading)).toBe(true);
    expect(TestUtils.isDOMComponent(logo)).toBe(true);
    expect(TestUtils.isDOMComponent(media)).toBe(true);
    expect(heading.innerText).toContain("Advent Calendar");

  });

});