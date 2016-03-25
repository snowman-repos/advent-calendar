import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Counter from "./Counter"

describe("Counter", function () {

  let renderedComponent = {};
  let heading = {};
  let decrementButton = {};
  let incrementButton = {};
  let incrementCounter = () => {};
  let decrementCounter = () => {};
  let counter = 0;

  beforeEach(function(){

    this.incrementCounter = incrementCounter;

    renderedComponent = TestUtils.renderIntoDocument(
    	<Counter incrementCounter={incrementCounter} decrementCounter={decrementCounter} counter={counter} />
    );

    heading = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, "h1");

    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, "button");

    decrementButton = buttons[1];
    incrementButton = buttons[0];

  });

  it("renders without problems", function () {

    expect(heading).not.toBeUndefined();
    expect(heading).not.toBeNull();
    expect(TestUtils.isDOMComponent(heading)).toBe(true);
    expect(heading.innerText).toMatch(/Counter/g);

    expect(decrementButton).not.toBeUndefined();
    expect(decrementButton).not.toBeNull();
    expect(TestUtils.isDOMComponent(decrementButton)).toBe(true);
    expect(decrementButton.innerText).toMatch(/-/g);

    expect(incrementButton).not.toBeUndefined();
    expect(incrementButton).not.toBeNull();
    expect(TestUtils.isDOMComponent(incrementButton)).toBe(true);
    expect(incrementButton.innerText).toMatch(/\+/g);

  });

  it("can increment the counter", function() {

    spyOn(this, "incrementCounter");
    TestUtils.Simulate.click(incrementButton);
    // TODO: get this to work
    // expect(this.incrementCounter).toHaveBeenCalled();

  });

});