import { LOGO_URL } from "../utils/constants";
import { SEARCH_LOGO_URL } from "../utils/constants";
import { CART_LOGO_URL } from "../utils/constants";

/*
-header
--logo
--search
--nav items
--cart logo
*/

const Header = () => {
    return (
      <div id="Header">
        <div>
          <img
            id="Logo"
            src={LOGO_URL}
          />
        </div>
        
        <div id="title">Santra waley</div>
        <div>
          <ul id="Nav_items">
            <li>Home</li>
            <li>Get the App</li>
            <li>Become a Partner</li>
          </ul>
        </div>
        <div>
          <img
            id="cart"
            src={CART_LOGO_URL}
          />
        </div>
      </div>
    );
  };

export default Header