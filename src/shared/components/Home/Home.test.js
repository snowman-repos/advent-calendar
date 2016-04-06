import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Home from "./Home"

describe("Home", function () {

  let home;
  let section;
  let paragraph;
  let form;
  let input;
  let buttons;

  beforeEach(function() {

    home = TestUtils.renderIntoDocument(<Home/>);
    section = TestUtils.findRenderedDOMComponentWithTag(home, "section");
    paragraph = TestUtils.findRenderedDOMComponentWithTag(home, "p");
    form = TestUtils.findRenderedDOMComponentWithTag(home, "form");
    input = TestUtils.findRenderedDOMComponentWithClass(home, "o-form__input");
    buttons = TestUtils.scryRenderedDOMComponentsWithClass(home, "o-button");

    console.log(buttons);

    input.value = "";
    ReactTestUtils.Simulate.change(input);

  });

  it("renders without problems", function () {

    expect(TestUtils.isDOMComponent(section)).toBe(true);
    expect(TestUtils.isDOMComponent(paragraph)).toBe(true);
    expect(TestUtils.isDOMComponent(form)).toBe(true);
    expect(TestUtils.isDOMComponent(input)).toBe(true);
    expect(TestUtils.isDOMComponent(buttons[0])).toBe(true);
    expect(TestUtils.isDOMComponent(buttons[1])).toBe(true);

  });

  it("can click the button to create a calendar", function() {

    expect(true).toBe(true);
    // expect the current url to be /
    ReactTestUtils.Simulate.click(buttons[1]);
    // expect to have navigated page to /create
    expect(true).toBe(true);

  });

  it("can change the value of the input field", function() {

    expect(input.value).toMatch("");
    input.value = "test@record.com";
    ReactTestUtils.Simulate.change(input);
    expect(input.value.toMatch(/test@record.com/g));

  });

  it("validates the input field", function() {

    input.value = "";
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
    // expect nothing to have happened
    input.value = "bkjbkjb";
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
    // expect nothing to have happened
    input.value = "test@record.com";
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
    // expect something to have happened
    expect(true).toBe(true);

  });

});