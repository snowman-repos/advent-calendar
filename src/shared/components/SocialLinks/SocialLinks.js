import React, { Component } from "react";
import Icon                 from "../Icon/Icon";
import pkg                  from "json!../../../../package.json";

class SocialLinks extends Component {

  render() {

    const FacebookURL = "https://www.facebook.com/sharer/sharer.php?u=" + pkg.homepage;
    const TwitterURL = "https://twitter.com/home?status=Better%20than%20chocolate%20-%20your%20own%20customised%20advent%20calendar%20that%20you%20can%20share%20with%20your%20friends!%20" + encodeURIComponent(pkg.homepage);
    const LinkedinURL = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(pkg.homepage) + "&title=Custom%20Advent%20Calendar&summary=Better%20than%20chocolate%20-%20your%20own%20customised%20advent%20calendar%20that%20you%20can%20share%20with%20your%20friends!%20&source=";

    return (

      <ul className="c-social-links">
        <li className="c-social-links__item">
          <a href={FacebookURL} title="Share on Facebook">
            <Icon icon="facebook"></Icon>
          </a>
        </li>
        <li className="c-social-links__item">
          <a href={TwitterURL} title="Share on Twitter">
            <Icon icon="twitter"></Icon>
          </a>
        </li>
        <li className="c-social-links__item">
          <a href={LinkedinURL} title="Share on Linkedin">
            <Icon icon="linkedin"></Icon>
          </a>
        </li>
      </ul>

    );
  }
}

export default SocialLinks;