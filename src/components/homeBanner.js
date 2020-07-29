import React, { Component } from 'react'

class HomeBanner extends Component {
    render() {
        return (
          <div class="home-banner">
            <div className="container" id="home-banner">
              <div className="banner-text">
                <h1>AGIR Montréal</h1>
                <h2>Support • Empower • Together</h2>
                <p>BY AND FOR LGBTQ+ MIGRANT COMMUNITY IN MONTREAL</p>
              </div>
              <form action="#" className="card-subscribe">
                <p>Subscribe to our monthly newsletter to stay updated!</p>
                <input type="text" placeholder="Enter Email"/>
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        )
    }
}

export default HomeBanner;