import React                                from "react";
import ReactDOM                             from "react-dom";
import { Provider }                         from "react-redux";
import DevTools                             from "../shared/containers/DevTools.js";

/*
 * Puts Redux DevTools into a separate window.
 * Based on https://gist.github.com/tlrobinson/1e63d15d3e5f33410ef7#gistcomment-1560218.
 */
export default function createDevToolsWindow(store) {
  const popup = window.open(null, "Redux DevTools", "menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=450,height=600");

  if (!popup) {
    console.error( // eslint-disable-line no-console
      "Couldn\"t open Redux DevTools due to a popup blocker. " +
      "Please disable the popup blocker for the current page."
    );
    return;
  }

  // Reload in case it"s reusing the same window with the old content.
  popup.location.reload();

  // Wait a little bit for it to reload, then render.
  setTimeout(() => {
    popup.document.write("<div id='react-devtools-root'></div>");
    ReactDOM.render(
      <DevTools store={store} />,
      popup.document.getElementById("react-devtools-root")
    );
  }, 10);
}