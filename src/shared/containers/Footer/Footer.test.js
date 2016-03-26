import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Footer from "./Footer"

describe("Footer", function () {

  let renderedComponent = null;
  let footerElement = null;
  let attribution = null;
  let share = null;

  beforeEach(function() {

    renderedComponent = TestUtils.renderIntoDocument(
      <Footer />
    );

    footerElement = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, "footer");
    attribution = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, "c-footer__attribution");
    share = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, "c-footer__share");

  });

  it("renders without problems", function () {

    expect(TestUtils.isDOMComponent(footerElement)).toBe(true);
    expect(TestUtils.isDOMComponent(attribution)).toBe(true);
    expect(TestUtils.isDOMComponent(share)).toBe(true);

  });

});