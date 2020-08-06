import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
              <section className="navWrapper">
                <div className="navLeftIcon">
                  <div>
                    <img className="navLeftBoxIcon" alt="BoxLogo"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
                  </div>
                  <div className="splitLine"></div>
                  <div>
                    <img className="navLeftLogo" alt="LiteralLogo" src="../images/logo_text.png"/>
                  </div>
                </div>
                <div className="searchInput">
                  <input type="text"/>
                  <div>
                    <span>Search</span>
                  </div>
                </div>
                <div className="navRightIcon">
                  <img alt="campus" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                  <img alt="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                  <img alt="myInfo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                </div>
              </section>
            </nav>
        );
    }
}

export default Header;