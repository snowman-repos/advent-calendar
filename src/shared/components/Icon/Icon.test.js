import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Icon from "./Icon"

describe("Icon", function () {

  it("renders without problems", function () {

    let icon = TestUtils.renderIntoDocument(<Icon icon="test"/>);
    let svg = TestUtils.findRenderedDOMComponentWithTag(icon, "svg");
    let use = TestUtils.findRenderedDOMComponentWithTag(icon, "use");

    expect(svg.classList).toContain("o-icon--test");
    expect(use.getAttribute("xlink:href")).toBe("#icon-test");

  });

});