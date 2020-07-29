import React, { Component } from 'react'

class HomeBanner extends Component {
    render() {
        return (
          <div class="home-banner">
            <div className="container">
              <div className="banner-text">
                <h1>AGIR Montréal</h1>
                <h2>Support • Empower • Together</h2>
                <p>BY AND FOR LGBTQ+ MIGRANT COMMUNITY IN MONTREAL</p>
              </div>
              <div className="subscribe">
                <form action="#">
                  <h3>Stay Updated!</h3>
                  <p>Subscribe to our monthly newsletter to get informed of AGIR's latest, activities and initiatives.</p>
                  <input type="text" placeholder="Enter Email"/>
                  <button type="submit">Sign Up</button>
                </form>

              </div>
            </div>
          </div>
        )
    }
}

export default HomeBanner;