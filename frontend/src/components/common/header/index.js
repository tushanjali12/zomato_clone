import React from "react";
import "./header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>
                <select className="location" name="location" id="location">
                    <option value="Delhi">Delhi</option>  
                  <option value="Mumbai">Mumbai</option>  
                  <option value="Kolkata">Kolkata</option>  
                  <option value="Banglore">Banglore</option>
                </select>
              </div>
            </div>
             {/* <i className="fi fi-rr-caret-down absolute-center"></i> */}
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span
            className="header-username"
            onClick={() => {
              history.push("/Signup");
            }}
          >
            Signup
          </span>
          <button
            type="submit"
            className="order_button"
            onClick={() => {
              history.push("/Order")}}>Order Here</button>
            
          
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
