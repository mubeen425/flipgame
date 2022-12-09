/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() { }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");
    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }
    handleheartBlast.addEventListener("click", heartBlast);
  }, []);

  // For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  //let scrollPosition = useScrollPosition();

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
    "",
    "dashboard-dark",
    "kanban",
    "clients",
    "project-details",
    "messages",
    "latest-activity",
    "task",
  ],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
    redux = ["redux-form", "redux-wizard", "todo"],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`dlabnav ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? hideOnScroll > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <img style={{ marginBottom: "4px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABIElEQVQ4jdWTvUoDQRSFzyTprezsJUisRBtra7Gw9QXEB7AWBAV7E7WyEnwIFR/AQoxYib6BlZDls5kJ18nc3Q3YeGBg58y5H3d+Vvo3Ai6ACc2aAKNYswfsAv0SsA1sCo01t8Y7kKSOYXbn2FDKVsZbzYEljeJoozdJ6tUEDkMIx5IEvEs6agCOf82yMzrJ08CpDUTvxljLHvARmDlPoAPcOcBvoOcB1709ARsO8DllSpcyLnhJL44/rSkBt2uAO03A0i0PgUHs5iN6S5JWJO07wNnOC3/DPbAQx0O+GGvSGa7VdZh0LWnLfG86OSS9tgGe16xZfYYQvtLEXkpVCHtK2a6yV2GBVy2hlaRLIEgaSHqaoxFfQB84Axb/BOjpB3HeWhz9JCF0AAAAAElFTkSuQmCC" />
              <span className="nav-text ms-3">Casino</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "table-filtering" ? "mm-active" : ""}`}
                  to="/table-filtering"
                >
                  Favourite
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Recent
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Challenges
                </Link>
              </li>
              <hr style={{ color: "#67508b" }} />
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Stake Originals
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Stake Exclusives
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Slots
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Live Casino
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Game Shows
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Feature Buy-in
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Table Games
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Blackjack
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Baccarat
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >

                  Roulette
                </Link>
              </li>
              <hr style={{ color: "#67508b" }} />
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <img style={{ marginBottom: "4px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABuElEQVQ4jcXUsUvWcRDH8c8jUWGDpNbUELQUEbVEo1QuJkZLW0PQYjQFgUNb0FZ/gLQE0ZhmQ1k4OEZGQRBFQUvRJE0m2BO+Ws76+aRWRHRww+99d5/v8b37/pL/YehH/9+KnMQUFv2wxWIjf9rNDNp4gWVcLV8u1sajX3aNHXiLZ9iLLozhS/lYsX14jjfo20hwBh/R08GP4EgH68E8ppu8q5EwkuRokp1Jtnactau8aduT9CYZxPBa3d3DTXzA+WLdGMfX8nF0V+wi3lXN3VUdopXkeJLFJFuSHMb+JHNJhpIcKx9KMlexQ0m2Vc1gaXzvrr/WYhnXsRnnsNScZOUtVWwzrlWNVcNBX8GzHcVtDDTYQLHmIWebgpuKf6rWl1YSW63WPGaTnMH7wmeSzLZarfnG9X9JslAaq4YyhVsdbNTPNtqRcxuTK9+bGrEbSSbwOEm72LMke7LadmOsUX86yamsZfWc4GUt+J01ch7War2q3PtrilVyfz2nJ7iEzyt7V/HeeoIX8BSv0buuYBX1YboWGS7jIA7gSrE2HvxSrEN4GJNYaAxkARM48dtCG3S9/l/lX9o3GWApxLaYpt8AAAAASUVORK5CYII=" />
              <span className="nav-text ms-3">Sports</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "table-filtering" ? "mm-active" : ""}`}
                  to="/table-filtering"
                >
                  My Bets
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Live Events
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Starting Soon
                </Link>
              </li>
              <hr style={{ color: "#67508b" }} />
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
            <img style={{ marginRight: "10px",marginBottom: "4px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVR4nO3UP0iVYRTH8WsXw4jWEILaHFuicm1MAguaWhqEzMUgaBAkkP7Q6JKgFVTa1NbiGETu2pLYWBC6RIKDkn3igaO8Pb333vd672Y/eHjf533POd9zzvOnVvuvgwonMFDR9mJV29zxOO5gFkfiWw/O4QGW8CT9wz3cKPj2tAu7icsB++pfvdxLIuzv4i2OVQX04QMm8aME8Bcoxjus4nQVQHKYC8h33MYIfu+HLgelNp+pWsVjXMK3CPI82rbbALIPqgo4hSmcz4KUVbGKT22DYi1m8LBBxovRxqT7hWrbBk1HlrmWMYHxCD5y4NZhED9LnNdxFdfxJXaeTkCvY+TaxS+8wEc8igOavuWabgVJJ/ks5htkegsrsXYzAcz1uRWkP66OegloB2OF5yi2MpvttO2bQgL0DL0loPdYaLIeCXClJSAg1zAc7/VC4M2oojNABE5VzBXmF7DRlQoy0Fjcwq/ifJzEm64BCqCj2byegToDNAHX8RRrGOo6oHbo9QfgaNs4uGv4FAAAAABJRU5ErkJggg==" />
              <span className="nav-text">Promotions</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "table-filtering" ? "mm-active" : ""}`}
                  to="/table-filtering"
                >
                  $50k Weekly Raffle
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  $100k Race-24 Hours
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  View All
                </Link>
              </li>
              <hr style={{ color: "#67508b" }} />
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
            <img style={{ marginRight: "10px",marginBottom: "4px" }}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8UlEQVR4nNXVTYjOURTH8UFDjbdmw6gRsRilRobQLMRkgSjlbTFLCzZmg9R4C3md2JCIbDBJJENZyGY2ysLOWg1SyAZh46Ob8+iannn6/+cxC6dut+fec8/3Off+zvk3NPwPhm7sR89oDu/DnRjHavid8NvulQXM9rfdwDq0VfFtwRLMLQuZgrVYgy40YRlaq/heiWxvp3NlILPwHp+Gja7MpxmHcBq7Yz6OOUUAC9AR15QOJzuLIWzB8vA7EnvnMR178BP9RTOZr7ptznz6Yq0Nz3AdX/GwKGQSvifF4CguRsBFmc+lWHuAnWjHZzwtBIkgvfiIu3iVHjbba4+9ZCuxI/0BfMGPpMQyoKSsw9iK8dn6uUwM73Aw3qyyNlAGkmpgAJ01fDpD6i2FA2eHJ2AxDsTcmGczrOJPYV6Z4OkRX2IVBjEOV7ECb0LOzeG7EE8qsi4K6MnkuhrTcBKTMSPbex6Z9oWimspAXuAxvuE1HmFmXMlQAO7HnMTwFjcLAwKSpLoBHyLQYDz+hSyLdG25ra8XkjJZmrXz4ZDU3xrrhfRjU3yUKtYR7SONbaUAI0AuR5Pc9QdBa7SdiaUBI0DORAvvziGjCl4DktrFLWwcS8heXIu24V9B0t2nb0kqyvTY26PoUvWn32lMrQsyVvYLZTeyCinIhjUAAAAASUVORK5CYII=" />
              <span className="nav-text">Sponsorships</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "table-filtering" ? "mm-active" : ""}`}
                  to="/table-filtering"
                >
                  Drake
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Evertion Football Club
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Watford FC
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Kun Aguero
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Isreal Adesanya
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Glover Teixeira
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Jose Aldo
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Alexa Grasso
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Brazil Rugby league
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Boxing  in Japan
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Fittipaldi Brother
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  UFC
                </Link>
              </li>
              <hr style={{ color: "#67508b" }} />
            </ul>
          </li>
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="" to="/dashboard">
            <img style={{ marginRight: "10px",marginBottom: "4px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nL3WsUrDQBzH8eDkKogvUN18DZ+jmyDqLIiLm5tWXAQFpw4KChl18Ql0dKoKjopDBkXBfiR4hVhqmsg1X/gRkhz3TS5390+SNAnm0cFphHTy/kYJMnHJ0CpKcvOAbazgDg9YxSa+cI7lcKzCXlGShoufWMQsLnCFOSyEJ1vDDNYrStJRktikRUkbOxNIO2kUdPE6gXQb/ybp0M0sTNPhRXaJfizJfsnQ9mJJPnAd1kkxtzUEYyWxSMsk/bCl9EryFtq+4PE/koMK034J75gO5yd1Jc84wmFJbgYd4Tisi1qSWKRlkvzVp8YN2YC8Lc7qSu5DDdmomC081ZXEIv2rMsZkt9kan/yIWnlNjvS3kvfzWzBpvgGZBiJofgdqigAAAABJRU5ErkJggg==" />
              <span className="nav-text">Blog</span>
            </Link>
          </li>
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="" to="/dashboard">
            <img style={{ marginRight: "10px",marginBottom: "4px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6ElEQVR4nM2Wy0tVURTGr3XNEkyNSoggqCT6I5Qe0sOSkqIHNa+BIiFWUlJGNGnQLNP6B8yi8kJRTW1QKWnzikCLULTI+S8WfTuXp3PO9V4x+uBw71778e219rfW3pnM/w5gOVAP1Kq9AsgB94DDS0W6CZjiNzplK2UO52RbBnQDNYv1sNa1h0XyQO0S4C0wDtTJtk9jZoGmYkgrgWfAZ/svWwNwCliTMu+KiCeA6mKI210YuwucWwfscFE5Hza/0AVuAveBcmdbDZwEeiWsnP6fsL6YNW5p80/t6NLIDvlQ2o71mwUuAjMkY0beZZ23A+r7BGxNIq0BfgJfgd3OXgW8jCEZ1vc90vfC6aJc516RWYAwDPXOU0/6DmgMXrkxB4DRCPmfMW7s5jjiEim3y9kuuMXsvMtSNr7ShdbQ4fr2aGNTqWfthDTjPC1zBG3AIPAEaDWb6xvTnOkQYqXhvGgGkmbbIbDT2Uy9AftdWIdihDXkRHXQ2Y/LVg30i2OLJ+7TwHFn63VCCouedYt+0BdwxpXSILiefGHNaeBwHpuds+GjvC9Vqhj63bgR2QYjPNlUhRdAnF0oMXO1PpeP+M4iQv1DtttuvQnZ+jzJNksj4FGoXCqDAY0FiKvJ2Y85jr3AZeBotLAHnI5Jp9FIyrQqlR4DLS7VVgHvo+mUFla7eyeB18AuZ7faGzAQyBPWsA09dOPbXV/nvPyNTNwYY8uq/AWMKU99ySxVeIOnhuehQum5FHApzXu7FK6H61CPAk+O8nREXxCSJ62MnO2kLqD4J5FEZk+ZEFp/LXbo3JIwrQfEX7UYWG/VMd9Z25PHcCOmv8LKoFJtUF+PqdcLSdeh5fy1RLKEULe5dkOiMBJgm3aRaClkblhgLfAtnzAs9y0N3VvL2l8UvapiiJslCsLNZa8T6eCNU24or6/c3O1579406EnU5YRmb6+AUDiuqm0X/YbMUgA4AtyVl+tkM+8sX4v38F/hFzZBKI+YLTllAAAAAElFTkSuQmCC" />
              <span className="nav-text">Live Support</span>
            </Link>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
            <img style={{ marginRight: "10px",marginBottom: "4px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEjUlEQVR4nO3U+VPUBRjHcb46TbuKsksp7LILustW7sq9LAt7sMACwnK7RniMaSJelc2UMdM0Tj/YD9WYowQOnpBFeeMtJGmmDMoIRCSCIIegKN7XYs28G4yIcfrJH8vPP/CaZ57n87i5Pc//N2VlZZYdu/d9cbji2P7qmtoz55tban4731zzev7CXsd7c9qc+Qt/zFqRV5CwLDvbLcBD+kzI6jXrBkq3fc/BI8eoOVtHS2s7F1raiHgzGY84LSKzCiFcgRAmRwjxxjP6tQFVmrE7ZE58VdDshCJlhv5dZaYhT54WMv/lxKnvjI/VfuadEHh6nElzexhZs67Q9c13Ozn6wwnO1TVyqaOb9ktdGOenILHrEFnUCAYFgl6OEOqNECZDCJcjtvgjteuQp4QxOTMKRWo4E5OC8IjVIjapGBvlzzDyVVGxa/vOcqpOnKax6QI9vX1c7rlKZG4akgQdomg1QoQSIdwHIVTGKL0PgsEHcbQGz4Sp+KTpUTnNKNMNTHQE42HXIraocTdr/kHWF2907dp7gJOnamhuuci16zfou9aPKS8N6TQdIpsaIVLJhIQA8j55n3FWDUKED2KbBs/EqSgywlHPMKPMNODlCEaSMIRYRiAbN21xlR84TPWZWi62d3Dr9h1u3rqNeXE60iQdolg1o02+lB3cgz3PiWCQIRjliGM0pK+Yh3nxdPyzzfhmGfBKDUaSqEVsVeMePQLZvLXEdehIBbV1DXRd7uHBw4fcf/AAy7IMpA4d4jg1r2RbaL3Yhl9KKEKEDCFSziSnkaqzp/i0tAD/HAt+MyLwTg9GkqRljE2Nu23ETkpKt7mOVlZR/0sTvVf6ePz4dwYGHhP9diaeg4hdjXlRBh0dnZjmORCMMoQoOWPsGsJzHajeMKGZacVvhhFZegjSQSRGzTjbiEm2lnztOlJxjHP1jfT0XsHlGuDRIxfWZUNInBppoo7mllYKyzYPTzImToOnIwCl04BmeJIhxPYUsnlLiWv/oaPU1NZxqbObu/fuc+fuPSxLMpAm6xDHqhFMSpZ/vpK6+gaWrPoQIdIHcawGz+QAFNPD0eRY8XVG4J0WgmSaFnH0Uzsp3rDJtWffAX6uPsOF1jb6b9zkev8NTIuGritGhRCp4EWzH6uKvuRcXQOl5dvJ+Xgp6R/MY0XBKkLmJuI7eF0pQX9dl1WFu3XETgrXF7t27C7n+Mlqms63cOXqtSe7icpNRZI41BOjAsEgZ5ReRtLSWRR9W8LeygpWb9tA6NxkVE4TyozBEw7CI/7vnoxA1hYUusq276Ky6ifqGn6ls+syHZ3dGN9yIInXIrKq/r3xVn8843XIU8OYnBWFIk3PxKRAPOKmIDYPNl49Einq27G7vLLqxKnVjU3Nizu6uhZ0dHfnLl+zcn1W/oLjtkXOFl22rd/LHjgwOnQQkj0BRWZ/pHE65I5QJmVE4pOiZ0JiIONjpiCKUiGOmPTHMz1Tt0CvsS9F62y6HNtHAbPidwbNjq8OnmlvDZs7rV2XHdP+6nRzvSJFv19k8st/Icov+NmQ5/lP5E/Y+5i1HSPUjQAAAABJRU5ErkJggg==" />
              <span className="nav-text">English</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "table-filtering" ? "mm-active" : ""}`}
                  to="/table-filtering"
                >
                  My Bets
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Live Events
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-sorting" ? "mm-active" : ""}`}
                  to="/table-sorting"
                >
                  Starting Soon
                </Link>
              </li>
              <hr style={{ color: "#67508b" }} />
            </ul>
          </li>



          {/* end li for watchlist */}
          {/* <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="fas fa-chart-line"></i>
              <span className="nav-text">Charts</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                  to="/chart-rechart"
                >
                  RechartJs
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                  to="/chart-chartjs"
                >
                  Chartjs
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartist" ? "mm-active" : ""}`}
                  to="/chart-chartist"
                >
                  Chartist
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-sparkline" ? "mm-active" : ""}`}
                  to="/chart-sparkline"
                >
                  Sparkline
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-apexchart" ? "mm-active" : ""}`}
                  to="/chart-apexchart"
                >
                  Apexchart
                </Link>
              </li>
            </ul>
          </li> */}
          {/* <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="fab fa-bootstrap"></i>
              <span className="nav-text">Bootstrap</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                  to="/ui-accordion"
                >
                  Accordion
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-alert" ? "mm-active" : ""}`}
                  to="/ui-alert"
                >
                  {" "}
                  Alert
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-badge" ? "mm-active" : ""}`}
                  to="/ui-badge"
                >
                  Badge
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button" ? "mm-active" : ""}`}
                  to="/ui-button"
                >
                  Button
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-modal" ? "mm-active" : ""}`}
                  to="/ui-modal"
                >
                  Modal
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button-group" ? "mm-active" : ""}`}
                  to="/ui-button-group"
                >
                  Button Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                  to="/ui-list-group"
                >
                  List Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-card" ? "mm-active" : ""}`}
                  to="/ui-card"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                  to="/ui-carousel"
                >
                  Carousel
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                  to="/ui-dropdown"
                >
                  Dropdown
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-popover" ? "mm-active" : ""}`}
                  to="/ui-popover"
                >
                  Popover
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-progressbar" ? "mm-active" : ""}`}
                  to="/ui-progressbar"
                >
                  Progressbar
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-tab" ? "mm-active" : ""}`}
                  to="/ui-tab"
                >
                  Tab
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-typography" ? "mm-active" : ""}`}
                  to="/ui-typography"
                >
                  Typography
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                  to="/ui-pagination"
                >
                  Pagination
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-grid" ? "mm-active" : ""}`}
                  to="/ui-grid"
                >
                  Grid
                </Link>
              </li>
            </ul>
          </li> */}
          {/* <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="fas fa-heart"></i>
              <span className="nav-text">Plugins</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "uc-select2" ? "mm-active" : ""}`}
                  to="/uc-select2"
                >
                  Select 2
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-nestable" ? "mm-active" : ""}`}
                  to="/uc-nestable"
                >
                  Nestedable
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-noui-slider" ? "mm-active" : ""}`}
                  to="/uc-noui-slider"
                >
                  Noui Slider
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-sweetalert" ? "mm-active" : ""}`}
                  to="/uc-sweetalert"
                >
                  Sweet Alert
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-toastr" ? "mm-active" : ""}`}
                  to="/uc-toastr"
                >
                  Toastr
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "map-jqvmap" ? "mm-active" : ""}`}
                  to="/map-jqvmap"
                >
                  Jqv Map
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-lightgallery" ? "mm-active" : ""}`}
                  to="/uc-lightgallery"
                    path === "form-validation-jquery" ? "mm-active" : ""
                  }`}
                  to="/form-validation-jquery"
                >
                  Form Validate
                </Link>
              </li>
            </ul>
          </li> */}

          {/* <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="fas fa-clone"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul>
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#">
                  Error
                </Link>
                <ul>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-400" ? "mm-active" : ""
                      }`}
                      to="/page-error-400"
                    >
                      Error 400
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-403" ? "mm-active" : ""
                      }`}
                      to="/page-error-403"
                    >
                      Error 403
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-404" ? "mm-active" : ""
                      }`}
                      to="/page-error-404"
                    >
                      Error 404
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-500" ? "mm-active" : ""
                      }`}
                      to="/page-error-500"
                    >
                      Error 500
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-503" ? "mm-active" : ""
                      }`}
                      to="/page-error-503"
                    >
                      Error 503
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${
                    path === "page-lock-screen" ? "mm-active" : ""
                  }`}
                  to="/page-lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </li> */}
        </MM>

        <div className="copyright">
          <p style={{ display: "none" }}>
            <strong style={{ display: "none" }}>Prime Crypto Exchange</strong > © 2022 All Rights Reserved
          </p>
          <p className="fs-12">
            <span className="heart" style={{ display: "none" }}></span>
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
