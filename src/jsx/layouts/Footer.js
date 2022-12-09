import React from "react";
import litecoin from "./../../images/litecoin.svg";
import bitcoin from "./../../images/bitcoin.svg";
import ethereum from "./../../images/ethereum.svg";
import tron from "./../../images/tron.svg";
import ripple from "./../../images/ripple.svg";
import dogecoin from "./../../images/dogecoin.svg";
import bitcoincash from "./../../images/bitcoincash.svg";
import tether from "./../../images/tether.svg";
import safegamble from "./../../images/safegamble.svg";
import plus from "./../../images/plus.svg";
const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <h6 className="text-bold text-white">Sports</h6>
              <div className="d-grid">
                <a className="text-grey">Home</a>
                <a className="text-grey">Live</a>
                <a className="text-grey">Sport Rules</a>
              </div>

            </div>
            <div className="col-lg-2">
              <h6 className="text-bold text-white">Casino</h6>
              <div className="d-grid">
                <a className="text-grey">Games</a>
                <a className="text-grey">Vip Club</a>
                <a className="text-grey">Promotion</a>
              </div>
            </div>
            <div className="col-lg-2">
              <h6 className="text-bold text-white">Support</h6>
              <div className="d-grid">
                <a className="text-grey">Fairness</a>
                <a className="text-grey">Affiliate</a>
                <a className="text-grey">Gamble Aware</a>
                <a className="text-grey">Gamble Aware</a>
                <a className="text-grey">Live Support</a>
                <a className="text-grey">Help Center</a>
              </div>
            </div>
            <div className="col-lg-2">
              <h6 className="text-bold text-white">Community</h6>
              <div className="d-grid">
                <a className="text-grey">Blog</a>
                <a className="text-grey">Forum</a>
                <a className="text-grey">Facebook</a>
                <a className="text-grey">Twitter</a>
                <a className="text-grey">Instagram</a>
                <a className="text-grey">YouTube</a>
                <a className="text-grey">Shop</a>
              </div>
            </div>
            <div className="col-lg-2">
              <h6 className="text-bold text-white">About Us</h6>
              <div className="d-grid">
                <a className="text-grey">Privacy Policy</a>
                <a className="text-grey">Licenses</a>
                <a className="text-grey">AML Policy</a>
                <a className="text-grey">Terms of Service</a>
                <a className="text-grey">Self Exclusion</a>
                <a className="text-grey">Primedice</a>
              </div>
            </div>
            <div className="col-lg-2">



            </div>
            <hr style={{ color: "#52316E" }} />
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto" }}>
              <img style={{ width: "80%", marginTop: "20px" }} src={litecoin} alt="litecoin" />
              <img style={{ width: "80%", marginTop: "20px" }} src={bitcoin} alt="bitcoin" />
              <img style={{ width: "80%", marginTop: "20px" }} src={ethereum} alt="ethereum" />
              <img style={{ width: "80%", marginTop: "20px" }} src={tron} alt="tron" />
              <img style={{ width: "80%", marginTop: "20px" }} src={ripple} alt="ripple" />
              <img style={{ width: "80%", marginTop: "20px" }} src={dogecoin} alt="dogecoin" />
              <img style={{ width: "80%", marginTop: "20px" }} src={bitcoincash} alt="bitcoincash" />
              <img style={{ width: "80%", marginTop: "20px" }} src={tether} alt="tether" />
              <img style={{ width: "80%", marginTop: "20px" }} src={safegamble} alt="safegamble" />
              <img style={{ width: "80%" }} src={plus} alt="plus" />
            </div>
            <hr style={{ color: "#52316E" }} />
            <div>
              <h3 className="pt-3 text-white text-center"><em style={{ fontFamily: "cursive" }}><b>Flip game</b></em></h3>
              <p className="text-white">© 2022 Flip game | All Rights Reserved.</p>
              <p className="text-white">1 BTC =$17,232.47</p>
              <br />
              <br />
              <p className="text-white">Flip game is owned and operated by Flip game., registration number: 00000, registered address: 123, 4 Willemstad Curaçao. Contact us at support@Flip-game.com.</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
