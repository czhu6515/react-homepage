import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div id="contacts">
        <h1 id='social-media'>Contacts</h1>
        <h1>
          <a href='https://www.facebook.com/chenyu.zhu' target='_blank'>
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href='https://www.linkedin.com/in/czhu72/' target='_blank'>
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href='https://github.com/czhu6515' target='_blank'>
            <i className="fab fa-github-square fa-2x" />
          </a>
        </h1>
      </div>
    );
  }
}

export default Contacts;
