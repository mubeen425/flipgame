import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown } from "react-bootstrap";
import welcome from "./../../../images/welcome.avif";
import sports from "./../../../images/sports.jpg";
import casino from "./../../../images/casino.jpg";
import drakebanner from "./../../../images/drakebanner.avif";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//Images
import pic3 from "./../../../images/profile/small/pic3.jpg";
import pic4 from "./../../../images/profile/small/pic4.jpg";
import pic5 from "./../../../images/profile/small/pic5.jpg";
import pic6 from "./../../../images/profile/small/pic6.jpg";
import pic7 from "./../../../images/profile/small/pic7.jpg";

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import CurrentBalance from "./Dashboard/CurrentBalance";
import ProjectSlider from "./Dashboard/ProjectSlider";
import DonutChart from "./Dashboard/DonutChart";
import { FcVoicePresentation } from "react-icons/fc";
import { RiAttachment2 } from "react-icons/ri";
import SortingTable from "../table/SortingTable/SortingTable";

const ChartBarApex = loadable(() =>
  pMinDelay(import("./Dashboard/ChartBarApex"), 1000)
);
const ReservationChart = loadable(() =>
  pMinDelay(import("./Dashboard/ReservationChart"), 1000)
);
const RedialApex = loadable(() =>
  pMinDelay(import("./Dashboard/RedialApex"), 1000)
);
const NewCustomers = loadable(() =>
  pMinDelay(import("./Dashboard/NewCustomers"), 1000)
);
const NewProject = loadable(() =>
  pMinDelay(import("./Dashboard/NewProject"), 1000)
);
const Emailchart = loadable(() =>
  pMinDelay(import("./Dashboard/Emailchart"), 1000)
);

function Dropdownblog() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as="div"
        className="btn-link i-false"
        data-bs-toggle="dropdown"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5" />
          <circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5" />
          <circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5" />
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu dropdown-menu-right" alignRight>
        <Dropdown.Item>Delete</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const MessageBlog = [
  { image: pic6, title: "Maren Rosser" },
  { image: pic4, title: "Kaiya Bergson" },
  { image: pic3, title: "Ruben Press" },
  { image: pic7, title: "Cristofer Torff" },
  { image: pic5, title: "Ann Rosser" },
];

const Home = () => {
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  const [key, setKey] = useState('home');
  return (
    <>
      <div className="row">
        <div className="col-lg-5 text-center mt-5">
          <h3 className="text-white text-bold Smarter">PLay Smarter</h3>
          <button className="btn-primary btn-set">Register instantly</button>
          <div class="or svelte-tnee6d m-auto"><span class="weight-normal line-height-default align-center size-default text-size-default variant-subtle with-icon-space svelte-129khay text-white">OR</span></div>
          <div className="image-icon">
            <img style={{ filter: " brightness(0) invert(1)" }} src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" />
          </div>
          <div className="image-icon">
            <img style={{ filter: " brightness(0) invert(1)" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAABmJLR0QA/wD/AP+gvaeTAAABt0lEQVRIie2Wv2+OURTHP0e0QiQS2lhopRKTWejShMFg0JLYTCZi8R9YDE1ELJZ2topEOraDNEHiH8DyDh38eIVQRUU/hkfjyXWf93met+9Ev9u595zzuef+hm39a4o2zuowcBI4AowCXaADPImI9YGOTB1T59WP5vVJnVPHBwW8rn6tgKX6pl7bKvBOQ1hZT9U9vfLu7FUhcCPT9QJYoljPEeAMcOx33zPgbESs9VPhWGZKX6vnM76hzqiP1H2tYaVE8wnwjTrRd8IGwGH/3qXTg2Tk1vQUUJ6mlxHxMDO4CaCu+vWIeNwEmp61pYqEl4GbNdDv6u6IsNy4I+N4ILG7NYl7aRewN23MQd8n9ugWoD+BL2ljbno7iX26IuEyMJu0jQBXSvZKRGzUDk0dUj8ku3emNrCIvZXE3W8Stxk8lzmnR2tiTqirSdylNtDD6lqS4K16ocL/nNpN/Dtq9pqtfE8tXot7ma5XwCLwDtgPTAHHM34XI+JBXYE58G37093WsAR8NTPVVdpQZ9XcUWwNPmSxudJdvakf6oI62SRf2z/SEH/+SAeBzxTn+nlEpJfKtv4j/QICoEPgzdpKvAAAAABJRU5ErkJggg=="></img>
          </div>
          <div className="image-icon">
            <img style={{ filter: " brightness(0) invert(1)" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACl0lEQVRIieWWT0hUURTGv2tipdBCSS3KwlxIRFibkgpaVYoZQW0iWku7gsBFkRBUu4ha58ZNKbQJchMSEYQggRFUiwgNMvtDmVaY+mvxzsPDzLw3b0yC6INh7pz5zvfde+49lyv9bwilkIEKSbskbZJUa+FJSW8kDYcQZpd1dsA+YACYIhlfgX5g73IYbgEGU8yScB9oXKppO/DZiU0DvcAxoAmosk+TxXqNE+MT0Faq6WFgzgQWgBtAbYa8OuCm5WAaHVlNd7qZfwM6S5p1pHHEcuNKtRRLKAOGLWEWOFiqqdNqA36Z1ghQlkY+5fbowlJNnV6P0zuZRnxkpDFg9TIYVwLjpvkwibQemDfS5SKCZ5L2zbbrAFBtv6+a5jxQXyih05WlNcU0Lt8McMLFq4DTwChwyMX3ON38Ew50OUL+zJS3ZzGuAVeI+vaHN7WcesftKiTa7QgrM5p65Jla3irH6Y7j/oi/d+O6XFNJFyU9ltQpqUPSF0eZlXQ8hDBYoFDr3HgiHpS74Fs33i5pzEy7JW2QtC2E8NxNplXSXUmbJR1NMJWkrW48nvcv0dGfsZL0WqyalKsSWJN2EI1zyx3GyiTSgJG+Aw1pglkAbGTx+u1PI+5m8YIfAEp6KORoBbeQhWKVEdDnTmHPHxj7LujLklADvHRJZ0s0rACuu/xXQE3W5EbgoyUOZcwJRLffqDOdAJoK8csLBUMIr4FnkvabaLOk85JaJA1JGlHU9ysU9ekOSe2KHoExnijqbd+mmVYwZLOeZvE1kgUfgHNEL9JEFFxxDqrse0HSU0nNLhbjp6JK3JPUF0KYKiaaxXhe0m1Jl0IIL4BySQ2S1kqak/RO0mQIYS6DVnEAD4A7tr9/D5lb4F/Db56yquV8XPDhAAAAAElFTkSuQmCC"></img>
          </div>
          <div className="image-icon">
            <img style={{ filter: " brightness(0) invert(1)" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACPUlEQVRIie2Wz0sVURiGn7mK3aRaZFApLcIEMdrkygIjxKiNtLFFdLM2lS2jRavatnXTHxDtKrBdBBnUNqEfFoS4iNIgLZU2UdrTYs7NueN15iq6CV8YmHO+93vfc85858yBTWwiQG1Qd2fE96gN62EUqUfUIXVM/aW+UotVuEX1tfpbfRdyjqrRak271FFjjKilMKOCekDtVfvD0xv6CoFTUp+F3FG1q1bTE+qC+lHtVreq59UH6owrYyZwSmEFuoPGgtqTZ1qvfghCY+p1dSrDbCVMqdfUN6H9Xq3LMu5bg0mtOJX0KqS8B2r6HmtDhfa/qlN3AlPAlg0y/gk0R1E0C5UzPr2BpgBFoK/cSBp35yTOAZMZ8cnAycKxZT3qREZhDBsODvVWlfjNECuqjzJ0xtOmLTkV2Z7g1qnTidhXE1tFbc/R2gtLS513unwrv0RRtAjMJmJzoW8ZdwV0JY3bcsj95Re1E2hNxFrVw4n2mRytNoD60NifQx5SO4DvwFUqi7IAPFHvAE3ApRytJS/1Yc53WU/cL48WYFtqVJ+Ac8BEzuizMB40Pqf6dySNX6SCu4BFoAMYBF4C1mBm4F4BDgaNphTnOYQj03g73AXOpkgjwG3gKdACnAQOAfuA7YHzg3iF3gKPiY/dHuAGcDyldw8YiKLoz9JQ4xvHoNX/uV+Mqzl7utoZuGlMq5fNupGojepF44KbD4nDmUmVgx8OOfPGF4MLamNebjWxZrN+4sv5dWrzqo028d/hL8lEbkAm9/5AAAAAAElFTkSuQmCC"></img>
          </div>

        </div>

        <div className="col-lg-5 ms-auto  header-image">
          <div className="sportimg">
            <img style={{ width: "100%" }} src={welcome} alt="welcome" />
          </div>
        </div>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div class="card" style={{ width: "100%" }}>
              <a href="#">
                <button className="casino1" style={{ fontSize: "20px" }}>
                  <img style={{ marginRight: "2px", marginBottom: "5px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABIElEQVQ4jdWTvUoDQRSFzyTprezsJUisRBtra7Gw9QXEB7AWBAV7E7WyEnwIFR/AQoxYib6BlZDls5kJ18nc3Q3YeGBg58y5H3d+Vvo3Ai6ACc2aAKNYswfsAv0SsA1sCo01t8Y7kKSOYXbn2FDKVsZbzYEljeJoozdJ6tUEDkMIx5IEvEs6agCOf82yMzrJ08CpDUTvxljLHvARmDlPoAPcOcBvoOcB1709ARsO8DllSpcyLnhJL44/rSkBt2uAO03A0i0PgUHs5iN6S5JWJO07wNnOC3/DPbAQx0O+GGvSGa7VdZh0LWnLfG86OSS9tgGe16xZfYYQvtLEXkpVCHtK2a6yV2GBVy2hlaRLIEgaSHqaoxFfQB84Axb/BOjpB3HeWhz9JCF0AAAAAElFTkSuQmCC" />
                  Casino</button>
              </a>
              <img src={casino} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-white">Leading Online Crypto Casino</h5>
                <p class="card-text text-grey">Browse our giant range of casino games as Stake offers a fair and fun online gambling experience. Play Slots, Live Casino, Blackjack, Baccarat, Roulette, and thousands of classic casino games right from your browser, including your favourite Stake Originals.</p>
                <a href="#" class="btn d-block btn-primary">Go to Casino</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="card" style={{ width: "100%" }}>
              <a href="#">
                <button className="casino1" style={{ fontSize: "20px" }}>
                  <img style={{ marginBottom: "5px", marginRight: "2px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABuElEQVQ4jcXUsUvWcRDH8c8jUWGDpNbUELQUEbVEo1QuJkZLW0PQYjQFgUNb0FZ/gLQE0ZhmQ1k4OEZGQRBFQUvRJE0m2BO+Ws76+aRWRHRww+99d5/v8b37/pL/YehH/9+KnMQUFv2wxWIjf9rNDNp4gWVcLV8u1sajX3aNHXiLZ9iLLozhS/lYsX14jjfo20hwBh/R08GP4EgH68E8ppu8q5EwkuRokp1Jtnactau8aduT9CYZxPBa3d3DTXzA+WLdGMfX8nF0V+wi3lXN3VUdopXkeJLFJFuSHMb+JHNJhpIcKx9KMlexQ0m2Vc1gaXzvrr/WYhnXsRnnsNScZOUtVWwzrlWNVcNBX8GzHcVtDDTYQLHmIWebgpuKf6rWl1YSW63WPGaTnMH7wmeSzLZarfnG9X9JslAaq4YyhVsdbNTPNtqRcxuTK9+bGrEbSSbwOEm72LMke7LadmOsUX86yamsZfWc4GUt+J01ch7War2q3PtrilVyfz2nJ7iEzyt7V/HeeoIX8BSv0buuYBX1YboWGS7jIA7gSrE2HvxSrEN4GJNYaAxkARM48dtCG3S9/l/lX9o3GWApxLaYpt8AAAAASUVORK5CYII=" />
                  Sports</button>
              </a>
              <img src={sports} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-white">Best Crypto Sports Betting Online</h5>
                <p class="card-text text-grey">Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA,, Soccer and more for an sports betting experience.</p>
                <a href="#" class="btn d-block btn-primary">Go to Sportsbook</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="flipgame">
          <div className="row">

            <div className="col-lg-5">
              <a><button type="button" class="btn btn-secondary mt-3 ms-3">Learn more</button></a>
            </div>

            <div className="col-lg-5">
              <h3 className="text-white mt-3"><em style={{ fontFamily: "cursive" }}><b>Flip game</b></em></h3>
            </div>
            <div className="col-lg-2">
              <img style={{ width: "100%" }} src={drakebanner} alt="drakebanner" />

            </div>

          </div>
        </div>

      </div>
      <div className="container pb-5">
        <div className="flipgame">
          <div className="row">

            <div className="col-lg-4">
              <p className="text-white mt-3 ms-3">No Crypto? No problem.</p>
            </div>

            <div className="col-lg-6">
              <svg className="mt-2 pe-4" xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 50 32"><g fill="none" transform="translate(0 .573)"><rect width="14.744" height="23.998" x="17.471" y="3.324" fill="#FF5F00"></rect><path fill="#EB001B" d="M18.9892518,15.3243998 C18.9855498,10.6423184 21.1423841,6.21855731 24.8382952,3.32775693 C18.5595238,-1.58957297 9.54295618,-0.873321349 4.12519383,4.97314941 C-1.29256852,10.8196202 -1.29256852,19.8334185 4.12519383,25.6798893 C9.54295618,31.5263601 18.5595238,32.2426117 24.8382952,27.3252818 C21.1412079,24.4335634 18.9842419,20.0079688 18.9892518,15.3243998 Z"></path><path fill="#F79E1B" d="M48.1536457 25.2198418L48.1536457 24.3651775 48.3663382 24.3651775 48.3663382 24.1883504 47.86013 24.1883504 47.86013 24.3651775 48.060061 24.3651775 48.060061 25.2198418 48.1536457 25.2198418zM49.136285 25.2198418L49.136285 24.1883504 48.9831464 24.1883504 48.8044847 24.92513 48.625823 24.1883504 48.4726844 24.1883504 48.4726844 25.2198418 48.5832845 25.2198418 48.5832845 24.4388555 48.7491846 25.1093249 48.8640386 25.1093249 49.0299387 24.4388555 49.0299387 25.2198418 49.136285 25.2198418zM49.61697 15.3243998C49.61697 21.1673077 46.2689439 26.497238 40.9951632 29.050549 35.7213825 31.6038601 29.4475923 30.9322843 24.8382952 27.3210427 28.5325936 24.4277881 30.6895903 20.0046151 30.6895903 15.3222803 30.6895903 10.6399454 28.5325936 6.21677243 24.8382952 3.32351783 29.4475923-.287723827 35.7213825-.95929954 40.9951632 1.59401148 46.2689439 4.14732249 49.61697 9.47725286 49.61697 15.3201607L49.61697 15.3243998z"></path></g>
              </svg>

              <svg className="mt-3 pe-4" xmlns="http://www.w3.org/2000/svg" width="83" height="33" viewBox="0 0 73 33"><defs>
                <filter id="apple_pay_mark_rgb_041619-a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd" filter="url(#apple_pay_mark_rgb_041619-a)" transform="translate(-70 .573)">
                  <g fill="#000" fill-rule="nonzero" transform="translate(70.846 .244)">
                    <path d="M13.3436603 3.80837138C14.1592821 2.79174355 14.7127578 1.42671196 14.5667822.0318122741 13.3728267.0909749601 11.9158331.816773111 11.0723053 1.83419811 10.3149069 2.70546559 9.64454714 4.1276526 9.81930925 5.4640778 11.1595857 5.57993137 12.4986248 4.79647311 13.3436603 3.80837138M14.5515545 5.72501644C12.6051498 5.6094783 10.9502302 6.82586335 10.0207228 6.82586335 9.09070311 6.82586335 7.66732448 5.78323858 6.12782143 5.81134028 4.12406246 5.84066929 2.26480581 6.96968098 1.24798347 8.76533962-.843447186 12.3575401.696055856 17.68603 2.72986169 20.6116753 3.71752344 22.059085 4.90782453 23.6527899 6.47622919 23.5955428 7.95810741 23.5375959 8.53894239 22.6393279 10.3402289 22.6393279 12.1401918 22.6393279 12.663402 23.5955428 14.2320598 23.5665751 15.8587972 23.5375902 16.8757979 22.1184427 17.8634482 20.6696222 18.9964812 19.0196508 19.4603056 17.4264678 19.4894777 17.3390084 19.4602998 17.3100407 16.3526683 16.1220097 16.323853 12.5596659 16.2945141 9.57686517 18.7636915 8.15807904 18.8799022 8.07009203 17.4855345 6.01496866 15.3068638 5.78323858 14.5515545 5.72501644"></path>
                    <path d="M8.47933209.541273197C12.7098103.541273197 15.6556456 3.44727024 15.6556456 7.67817652 15.6556456 11.9241889 12.6491929 14.8452806 8.37325016 14.8452806L3.68930092 14.8452806 3.68930092 22.2682477.305147416 22.2682477.305147416.541273197 8.47933209.541273197 8.47933209.541273197zM3.68929516 12.0145101L7.57237847 12.0145101C10.5187951 12.0145101 12.195716 10.4337262 12.195716 7.69327688 12.195716 4.95312003 10.5187951 3.3871498 7.58753139 3.3871498L3.68929516 3.3871498 3.68929516 12.0145101 3.68929516 12.0145101zM16.5398555 17.766378C16.5398555 14.9957222 18.6702533 13.2944164 22.4478416 13.0835676L26.7989734 12.8277045 26.7989734 11.6082111C26.7989734 9.8464924 25.6052539 8.79254092 23.6112496 8.79254092 21.7221648 8.79254092 20.5435982 9.69576404 20.2568265 11.1112927L17.1745976 11.1112927C17.3558743 8.25031571 19.8033496 6.14241275 23.7319032 6.14241275 27.5846807 6.14241275 30.0473089 8.1750949 30.0473089 11.3520554L30.0473089 22.2682535 26.919627 22.2682535 26.919627 19.6634321 26.8444379 19.6634321C25.9229184 21.4251508 23.91318 22.539217 21.8282467 22.539217 18.715712 22.539217 16.5398555 20.6119563 16.5398555 17.766378zM26.7989734 16.3360357L26.7989734 15.0863416 22.8855728 15.3271043C20.9364518 15.4627323 19.8336612 16.3209354 19.8336612 17.6760568 19.8336612 19.0610922 20.9819163 19.9646021 22.7346133 19.9646021 25.0159705 19.9646021 26.7989734 18.3986319 26.7989734 16.3360357zM33.0001366 28.0953364L33.0001366 25.4603144C33.2414438 25.5204348 33.7852626 25.5204348 34.0574626 25.5204348 35.5682655 25.5204348 36.3842843 24.8881752 36.8826387 23.2620903 36.8826387 23.2318838 37.1699916 22.2984599 37.1699916 22.2833596L31.4287106 6.42848234 34.9638235 6.42848234 38.9833003 19.3172478 39.0433365 19.3172478 43.0628191 6.42848234 46.50759 6.42848234 40.5541393 23.0962558C39.1948887 26.9359634 37.6234627 28.1705572 34.3296627 28.1705572 34.0574684 28.1705572 33.2414495 28.1403508 33.0001366 28.0953364z" transform="translate(23.02 1.147)"></path></g></g>
              </svg>


              <svg className="mt-3 pe-4" xmlns="http://www.w3.org/2000/svg" width="87" height="32" viewBox="0 0 77 32"><g fill="none" transform="translate(1.455 1.137)"><g fill="#FFF" transform="translate(31.863 1.552)"><path d="M2.73315272 12.5881699L2.73315272 21.1261102.0141614131 21.1261102.0141614131.0423368941 7.22232067.0423368941C9.04914296.0423368941 10.6068984.64916571 11.8814256 1.86282334 13.1842756 3.07648097 13.8357006 4.55827227 13.8357006 6.30819723 13.8357006 8.10045908 13.1842756 9.58225037 11.8814256 10.7817957 10.6210598 11.981341 9.06330437 12.5740576 7.22232067 12.5740576L2.73315272 12.5740576 2.73315272 12.5881699zM2.73315272 2.63899973L2.73315272 9.99150701 7.27896632 9.99150701C8.35523372 9.99150701 9.26156415 9.62458727 9.96963481 8.90486006 10.6918669 8.18513286 11.0600636 7.31017039 11.0600636 6.32230952 11.0600636 5.34856096 10.6918669 4.48771078 9.96963481 3.76798358 9.26156415 3.02003178 8.36939513 2.65311203 7.27896632 2.65311203L2.73315272 2.65311203 2.73315272 2.63899973zM20.9447299 6.22352344C22.9556506 6.22352344 24.5417289 6.75979076 25.7029647 7.83232541 26.8642006 8.90486006 27.4448185 10.3725391 27.4448185 12.2353624L27.4448185 21.1261102 24.85328 21.1261102 24.85328 19.1221638 24.7399887 19.1221638C23.621237 20.7733027 22.1201272 21.591816 20.2508207 21.591816 18.650581 21.591816 17.3194082 21.1261102 16.2431408 20.1805862 15.1668734 19.2350622 14.6287397 18.0637415 14.6287397 16.6525117 14.6287397 15.1566081 15.1951962 13.9711751 16.3281093 13.0962126 17.4610223 12.2071378 18.9762935 11.7696566 20.8597615 11.7696566 22.4741626 11.7696566 23.8053354 12.0660148 24.8391185 12.6587313L24.8391185 12.0377902C24.8391185 11.0922663 24.4709218 10.3019776 23.7203669 9.63869956 22.969812 8.97542156 22.0918044 8.6508387 21.0863441 8.6508387 19.5710729 8.6508387 18.3673528 9.28589211 17.4893452 10.5701112L15.0960663 9.07420764C16.4130778 7.16904741 18.3673528 6.22352344 20.9447299 6.22352344zM17.4326995 16.6948486C17.4326995 17.4004635 17.7300892 17.99318 18.3390299 18.4588858 18.9338093 18.9245917 19.6418799 19.1645007 20.4490805 19.1645007 21.5961549 19.1645007 22.6157767 18.7411318 23.5079457 17.8943939 24.4001147 17.047656 24.85328 16.0597952 24.85328 14.916699 24.0035952 14.253421 22.8281979 13.9147259 21.3129267 13.9147259 20.2083365 13.9147259 19.2878446 14.1828595 18.5514511 14.7050146 17.8008962 15.2553942 17.4326995 15.9186722 17.4326995 16.6948486z"></path>
                <polygon points="42.229 6.689 33.166 27.463 30.362 27.463 33.732 20.195 27.756 6.689 30.716 6.689 35.021 17.048 35.078 17.048 39.27 6.689"></polygon></g><path fill="#4285F4" d="M23.781261,12.4188223 C23.781261,11.5353924 23.7019571,10.6900658 23.5546784,9.8771974 L12.1575731,9.8771974 L12.1575731,14.5342558 L18.7213881,14.535667 C18.4551535,16.0851973 17.598388,17.4061084 16.285625,18.2867158 L16.285625,21.3081588 L20.1927589,21.3081588 C22.4741626,19.2040152 23.781261,16.0936647 23.781261,12.4188223 Z"></path><path fill="#34A853" d="M16.2870412,18.2867158 C15.1994447,19.0177328 13.7988809,19.4453355 12.1604054,19.4453355 C8.99532959,19.4453355 6.31032567,17.3200234 5.34876572,14.4552269 L1.31842756,14.4552269 L1.31842756,17.5712223 C3.3151868,21.5198433 7.41916431,24.2294045 12.1604054,24.2294045 C15.4373564,24.2294045 18.1903351,23.1554586 20.1941751,21.3067476 L16.2870412,18.2867158 Z"></path><path fill="#FABB05" d="M4.96923985,12.1436325 C4.96923985,11.3392315 5.10377327,10.5616439 5.34876572,9.83062682 L5.34876572,6.71463141 L1.31842756,6.71463141 C0.492817175,8.34742429 0.0283228262,10.1904904 0.0283228262,12.1436325 C0.0283228262,14.0967745 0.494233316,15.9398406 1.31842756,17.5726335 L5.34876572,14.4566381 C5.10377327,13.7256211 4.96923985,12.9480335 4.96923985,12.1436325 Z"></path><path fill="#E94235" d="M12.1604054,4.84051823 C13.9489919,4.84051823 15.5506477,5.45440319 16.8152619,6.65394853 L20.2777274,3.20631412 C18.1747575,1.2545833 15.433108,0.0564491922 12.1604054,0.0564491922 C7.42058045,0.0564491922 3.3151868,2.76601042 1.31842756,6.71463141 L5.34876572,9.83062682 C6.31032567,6.96583031 8.99532959,4.84051823 12.1604054,4.84051823 Z"></path></g>
              </svg>

              <svg className="mt-3 pe-2" xmlns="http://www.w3.org/2000/svg" width="66" height="32" viewBox="0 0 66 32"><defs><filter id="samsung-pay-a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd" filter="url(#samsung-pay-a)" transform="translate(-259 .573)"><g transform="translate(259.97)"><g fill="#000" transform="translate(20.464 16.197)"><path d="M0 0L3.34223274 0C5.36078133 0 6.85794904 1.54527658 6.85794904 3.46366282 6.85794904 5.39549028 5.36078133 6.94076686 3.32874475 6.94076686L1.81808903 6.94076686 1.81808903 9.72541643 0 9.72541643 0 0zM1.81808903 1.67829828L1.81808903 5.26246858 3.20828298 5.26246858C4.2915087 5.26246858 5.02683711 4.46294785 5.02683711 3.46366282 5.02683711 2.47781901 4.2915087 1.67829828 3.20828298 1.67829828L1.81808903 1.67829828zM7.20589286 5.83501811C7.20589286 3.25059634 9.10444478 1.77159888 11.0829945 1.77159888 12.1127333 1.77159888 13.0345682 2.19800993 13.5959479 2.86404545L13.5959479 1.93150302 15.4010141 1.93150302 15.4010141 9.72509199 13.5959479 9.72509199 13.5959479 8.71236574C13.0215453 9.43216613 12.0857573 9.88499613 11.0560185 9.88499613 9.17141966 9.88499613 7.20589286 8.37957972 7.20589286 5.83501811M13.6898988 5.80859917C13.6898988 4.48950585 12.687136 3.410037 11.3504289 3.410037 10.0137218 3.410037 8.98398301 4.46262341 8.98398301 5.80859917 8.98398301 7.16708916 10.0137218 8.23311679 11.3504289 8.23311679 12.687136 8.23311679 13.6898988 7.15411143 13.6898988 5.80859917"></path><polygon points="19.198 9.339 15.989 1.932 17.915 1.932 20.094 7.181 22.153 1.932 24.051 1.932 19.385 13.322 17.554 13.322"></polygon></g>
                <g fill="#000" transform="translate(.227 .412)"><polygon points="52.738 .29 52.862 7.43 52.812 7.43 50.714 .29 47.327 .29 47.327 9.292 49.571 9.292 49.445 1.906 49.495 1.906 51.748 9.292 54.999 9.292 54.999 .29"></polygon><polygon points="9.772 .29 8.079 9.385 10.547 9.385 11.795 1.133 11.846 1.132 13.063 9.385 15.515 9.385 13.832 .29"></polygon><polygon points="23.563 .29 22.437 7.245 22.386 7.245 21.262 .29 17.538 .29 17.337 9.385 19.621 9.385 19.678 1.209 19.73 1.209 21.254 9.385 23.57 9.385 25.095 1.21 25.145 1.209 25.202 9.385 27.486 9.385 27.284 .29"></polygon>
                  <path d="M4.23802182 6.8197959C4.32732166 7.03995378 4.29895036 7.32175587 4.25616085 7.49278378 4.18174431 7.79544293 3.97523842 8.10459094 3.36688322 8.10459094 2.7962014 8.10459094 2.4496994 7.77551284 2.4496994 7.28004174L2.44783898 6.39848324 6.96384831e-14 6.39848324 6.96384831e-14 7.09974402C6.96384831e-14 9.12844096 1.60135087 9.74163859 3.31711716 9.74163859 4.96776899 9.74163859 6.3258708 9.18035187 6.54307407 7.66195773 6.65376867 6.8768052 6.57284068 6.362331 6.5333069 6.17090951 6.14773621 4.26596449 2.6850417 3.6981889 2.42690933 2.63308825 2.38318962 2.44815563 2.39388699 2.25673415 2.41667706 2.15522978 2.48179153 1.86276741 2.67992556 1.54434959 3.25060738 1.54434959 3.78501114 1.54434959 4.09849081
               1.8729642 4.09849081 2.36797181L4.09849081 2.93203948 6.37656706 2.93203948 6.37656706 2.29103243C6.37656706.310074994 4.59010506 8.46490401e-14 3.29851303 8.46490401e-14 1.67669761 8.46490401e-14.349757727.536258248.107438876 2.01942713.0418593024 2.42498112.0325572352 2.787894.128833631 3.24628588.52463659 5.10534537 3.76780232 5.6425306 4.23802182 6.8197959M33.9133371 6.80236866C34.0003114 7.02113607 33.9738005 7.29830326 33.931011 7.46840419 33.8570595
                7.76781891 33.6528792 8.073259 33.0510354 8.073259 32.4854697 8.073259 32.1417584 7.74835231 32.1417584 7.25658913L32.1398979 6.38522742 29.7171745 6.38522742 29.7162443 7.07953585C29.7162443 9.0883027 31.303177 9.69408449 33.0008043 9.69408449 34.6361077 9.69408449 35.9802564 9.13928663 36.1951341 7.63526069 36.3048985 6.85845099 36.2244357 6.35000216 36.185367 6.15904416 35.8025869 4.27263875 32.3747751 3.71088853 32.1203636 2.65644816 32.0757137 2.47429648 32.0868762 2.28519245 32.108736 2.18415157 32.1733854 1.89539713 32.3701241 1.57883327 32.9342945 1.57883327 33.4649774 1.57883327 33.7747363 1.90327646 33.7747363 2.39503964L33.7747363 2.95215495 36.0300224 2.95215495 36.0300224 2.31856375C36.0300224.357072907 34.2612344.0511693263 32.9822001.0511693263 31.3771284.0511693263 30.0632114.580011729 29.8241483 2.04973939 29.7581036 2.45112197 29.7492667 2.81032693 29.845078 3.26315693 30.2362299 5.10506728 33.4482337 5.63622713 33.9133371 6.80236866M41.5757289 8.02422173C42.210595 8.02422173 42.4054733 7.58854087 42.4510534 7.36467506 42.4701226 7.26687862 42.4733784 7.1343204 42.4724481 7.01752085L42.4724481.288569045 44.7830816.288569045 44.7830816 6.8103407C44.7854072 6.97766069 44.7681983 7.31971651 44.7598265 7.40870664 44.600296 9.10600803 43.2533567 9.65663447 41.5757289 9.65663447 39.8971708 9.65663447 38.5506966 9.10600803 38.3907011 7.40870664 38.3827943 7.31971651 38.3651204 6.97766069 38.3697714 6.8103407L38.3697714.288569045 40.6785445.288569045 40.6785445
                 7.01752085C40.6757539 7.1343204 40.6804049 7.26687862 40.6999392 7.36467506 40.7445892 7.58854087 40.9403977 8.02422173 41.5757289 8.02422173M60.6131536 7.92962336C61.2740654 7.92962336 61.5042916 7.51248211 61.5461509 7.26961321 61.564755 7.16671837 61.5698712 7.03972203 61.5680108 6.92431296L61.5680108 5.60336567 60.6322228 5.60336567 60.6322228 4.27732 63.8651562 4.27732 63.8651562 6.71574233C63.8637609 6.88677024 63.859575 7.01191262 63.8321339 7.31410828 63.6814404 8.97108601 62.2400851 9.5624996 60.6224556 9.5624996 59.0038959 9.5624996 57.5639359 8.97108601 57.411382 7.31410828 57.3858013 7.01191262 57.3806852 6.88677024 57.3802201 6.71574233L57.3806852 2.88870314C57.3806852 2.72740852 57.4002195 2.442362 57.4192888 2.29033719 57.6225389.589791374 59.0038959.0424093601 60.6229207.0424093601 62.2414804.0424093601 63.6586504.584692981 63.8265527 2.29033719 63.8563193 2.58001861 63.846087 2.88870314 63.8479474 2.88870314L63.8479474 3.19228927 61.5461509 3.19228927 61.5461509 2.68244996C61.5470811 2.68337694 61.5447556 2.4664635 61.5173145 2.33575924 61.4759203 2.13553144 61.3024367 1.67574909 60.6047817 1.67574909 59.9410792 1.67574909 59.7462009 2.11142995 59.6950395 2.33575924 59.6694588 2.45580322 59.6587615 2.61802482 59.6587615 2.7663417L59.6587615 6.92431296C59.6578313 7.03972203 59.6620172 7.16671837 59.6796911 7.26961321 59.7224806 7.51248211 59.9531719 7.92962336 60.6131536 7.92962336">
                  </path></g></g></g>
              </svg>
            </div>
            <div className="col-lg-2">
              <a><button type="button" class="btn btn-secondary mt-2 ms-3">Buy Crypto</button></a>
            </div>

          </div>
        </div>

      </div>
      <div className="container pb-5">

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 maindiv"
        >
          <Tab eventKey="home" className="home" title="Casino Bets">
            <table class="table  responsiveness">
              <thead>
                <tr>
                  <th scope="col">Game</th>
                  <th scope="col">User</th>
                  <th scope="col">Time</th>
                  <th scope="col">Bet Amount</th>
                  <th scope="col">Multiplier</th>
                  <th scope="col">Payout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Stake Exclusive Blackjack 3</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>0.78160001</td>
                  <td>0.20x</td>
                  <td>0.69635996</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>Stake ExclusLive - VIP BLACKJACK 4 RUBY</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>0.00233130</td>
                  <td>0.50x</td>
                  <td>0.69635996</td>
                </tr>
                <tr>
                  <th>Sweet Bonanza</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>0.78160001</td>
                  <td>0.72x</td>
                  <td>0.69635996</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>Dork Unit</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>0.78160001</td>
                  <td>0.22x</td>
                  <td>0.69635996</td>
                </tr>
                <tr>
                  <th>Hot pepper</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>0.78160001</td>
                  <td>0.5x</td>
                  <td>0.69635996</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>Salon Privé Blackjack I</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>0.78160001</td>
                  <td>0.32x</td>
                  <td>0.69635996</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="profile" className="profile" title="Sports Bets">
            <table class="table  responsiveness">
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">User</th>
                  <th scope="col">Time</th>
                  <th scope="col">Odds</th>
                  <th scope="col">Bet Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Multi (2)</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>2.03</td>
                  <td>0.69635996</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>Netherlands - Argentina</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>2.03</td>
                  <td>0.69635996</td>
                </tr>
                <tr>
                  <th>Netherlands - Argentina</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>2.03</td>
                  <td>0.69635996</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>Dork Unit</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>2.03</td>
                  <td>0.69635996</td>
                </tr>
                <tr>
                  <th>Hot pepper</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>2.03</td>
                  <td>0.69635996</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>Cangzhou Mighty Lions</th>
                  <td>Hidden</td>
                  <td>3:23 PM</td>
                  <td>2.03</td>
                  <td>0.69635996</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Sports" className="Sports" title="Race Leaderboard">
            <div className="d-flex justify-content-space-between">
              <div>
                <h4 style={{fontSize:"15px"}} className="text-white">$100k Race - 24 Hours</h4>
              </div>
              <div>
                <h4 style={{fontSize:"15px"}} className="text-white">Ends in 3 hours</h4>
              </div>
            </div>
            <hr style={{color:"#52316E"}} />
            <table class="table  responsiveness">
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">User</th>
                  <th scope="col">Wagered</th>
                  <th scope="col">Prize</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1th</th>
                  <td>Hidden</td>
                  <td>$28.845,874.12</td>
                  <td>$25,000.00</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>2th</th>
                  <td>Hidden</td>
                  <td>$28.845,874.12</td>
                  <td>$25,000.00</td>
                </tr>
                <tr>
                  <th>3th</th>
                  <td>Hidden</td>
                  <td>$28.845,874.12</td>
                  <td>$25,000.00</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>4th</th>
                  <td>Hidden</td>
                  <td>$28.845,874.12</td>
                  <td>$25,000.00</td>
                </tr>
                <tr>
                  <th>5th</th>
                  <td>Hidden</td>
                  <td>$28.845,874.12</td>
                  <td>$25,000.00</td>
                </tr>
                <tr style={{ backgroundColor: "#52316E" }}>
                  <th>6th</th>
                  <td>Hidden</td>
                  <td>$28.845,874.12</td>
                  <td>$25,000.00</td>
                </tr>
              </tbody>
            </table>
          </Tab>

        </Tabs>

      </div>

    </>
  );
};
export default Home;
