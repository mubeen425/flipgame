import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import logo from "../../../icons/flaticon/logo.png";
import logo1300 from "../../../icons/flaticon/logo.png";
const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } =
    useContext(ThemeContext);
  const color = {
    color: "#fff !important",
  };
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
          <Fragment>
            <div className="">
              <h2 style={color}></h2>
              <span className="" style={{ background: "red" }}>
                Project Management Admin
              </span>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <button className="casino d-flex">
            <img style={{marginRight:"2px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABIElEQVQ4jdWTvUoDQRSFzyTprezsJUisRBtra7Gw9QXEB7AWBAV7E7WyEnwIFR/AQoxYib6BlZDls5kJ18nc3Q3YeGBg58y5H3d+Vvo3Ai6ACc2aAKNYswfsAv0SsA1sCo01t8Y7kKSOYXbn2FDKVsZbzYEljeJoozdJ6tUEDkMIx5IEvEs6agCOf82yMzrJ08CpDUTvxljLHvARmDlPoAPcOcBvoOcB1709ARsO8DllSpcyLnhJL44/rSkBt2uAO03A0i0PgUHs5iN6S5JWJO07wNnOC3/DPbAQx0O+GGvSGa7VdZh0LWnLfG86OSS9tgGe16xZfYYQvtLEXkpVCHtK2a6yV2GBVy2hlaRLIEgaSHqaoxFfQB84Axb/BOjpB3HeWhz9JCF0AAAAAElFTkSuQmCC" />
              Casino</button>
            <button className="casino ms-1 d-flex">
            <img style={{marginTop:"1px",marginRight:"2px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABuElEQVQ4jcXUsUvWcRDH8c8jUWGDpNbUELQUEbVEo1QuJkZLW0PQYjQFgUNb0FZ/gLQE0ZhmQ1k4OEZGQRBFQUvRJE0m2BO+Ws76+aRWRHRww+99d5/v8b37/pL/YehH/9+KnMQUFv2wxWIjf9rNDNp4gWVcLV8u1sajX3aNHXiLZ9iLLozhS/lYsX14jjfo20hwBh/R08GP4EgH68E8ppu8q5EwkuRokp1Jtnactau8aduT9CYZxPBa3d3DTXzA+WLdGMfX8nF0V+wi3lXN3VUdopXkeJLFJFuSHMb+JHNJhpIcKx9KMlexQ0m2Vc1gaXzvrr/WYhnXsRnnsNScZOUtVWwzrlWNVcNBX8GzHcVtDDTYQLHmIWebgpuKf6rWl1YSW63WPGaTnMH7wmeSzLZarfnG9X9JslAaq4YyhVsdbNTPNtqRcxuTK9+bGrEbSSbwOEm72LMke7LadmOsUX86yamsZfWc4GUt+J01ch7War2q3PtrilVyfz2nJ7iEzyt7V/HeeoIX8BSv0buuYBX1YboWGS7jIA7gSrE2HvxSrEN4GJNYaAxkARM48dtCG3S9/l/lX9o3GWApxLaYpt8AAAAASUVORK5CYII=" />
              Sports</button>
          </Fragment>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
