import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import SocialLinks from "./SocialLinks"

describe("SocialLinks", function () {

  it("renders without problems", function () {

    let socialLinks = TestUtils.renderIntoDocument(<SocialLinks/>);
    let links = TestUtils.scryRenderedDOMComponentsWithTag(socialLinks, "li");

    expect(links.length).toBe(3);
    for(let i = 0; i < links.length; i++) {
      expect(links[i].classList).toContain("c-social-links__item");
    }

  });

});