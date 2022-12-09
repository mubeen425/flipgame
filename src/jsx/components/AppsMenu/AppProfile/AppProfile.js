import React, { Fragment, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";
import SortingTable from "../../table/SortingTable/SortingTable";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
// import bitcoin from "../../../../icons/flaticon/bitcoin.jpg";
const AppProfile = () => {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [replayModal, setReplayModal] = useState(false);
  const [coinsData, setCoinsData] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [change, setChange] = useState("24h");
  const options = {
    settings: {
      overlayColor: "#000000",
    },
  };

  useEffect(() => {
    // setInterval(() => {
    //   fetchData();
    // }, 1000);
    fetchData();
    // console.log("UseEffect");
  }, []);
  const fetchData = async () => {
    // console.log("Fetch daat");
    // const res = await axios
    //   .get(
    //     // "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8e525801-7772-4973-80c7-984e113b3929"
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    //   )
    //   .then((data) => {
    //     setCoinsData(data.data);
    //     console.log("Data", data);
    //   });
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8e525801-7772-4973-80c7-984e113b3929",
        {
          headers: {
            "x-apikey": "8e525801-7772-4973-80c7-984e113b3929",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      )
      .then((res) => {
        let result = res.data.data;
        console.log("Res", res.data.data);
        setCoinsData(res.data.data);
        // let sorted = result.sort((a, b) => b.name.localeCompare(a.name));
        // console.log("Sort", sorted);
        // setCoinsData(sorted);
      });
    // console.log("Fetch daat");
    const res = await axios
      .get(
        // "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8e525801-7772-4973-80c7-984e113b3929"
        "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
      )
      .then((data) => {
        console.log("Pics", data);
      });
  };
  // const sorting = (col) => {
  //   if (order === "ASC") {
  //     const sorted = [...coinsData].sort((a, b) => {
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
  //     });
  //     setCoinsData(sorted);
  //     setOrder("DSC");
  //   }
  //   if (order === "DSC") {
  //     const sorted = [...coinsData].sort((a, b) => {
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
  //     });
  //     setCoinsData(sorted);
  //     setOrder("ASC");
  //   }
  // };
  return (
    <Fragment>
      <PageTitle activeMenu="Coins" motherMenu="Watchlist" />

      <div className="row">
        <div className="col-12">
          {/* <SortingTable /> */}
          {/* <SortingTable /> */}
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Watchlist</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div className="dataTables_wrapper">
                  <table className="table dataTable display">
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          tabIndex={0}
                          rowSpan={1}
                          colSpan={1}
                        >
                          Rank
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          rowSpan={1}
                          colSpan={1}
                        >
                          <div class="dropdown">
                            <button
                              class="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Change {change}
                            </button>
                            <div
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a
                                class="dropdown-item"
                                href="#"
                                onClick={() => setChange("1h")}
                              >
                                Change 1h
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setChange("24h");
                                }}
                              >
                                Change 24h
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setChange("7d");
                                }}
                              >
                                Change 7d
                              </a>
                            </div>
                          </div>
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          rowSpan={1}
                          colSpan={1}
                        >
                          Invest
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          rowSpan={1}
                          colSpan={1}
                          // onClick={() => sorting("name")}
                        >
                          Coin
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          rowSpan={1}
                          colSpan={1}
                        >
                          Volume (24h)
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          rowSpan={1}
                          colSpan={1}
                        >
                          Price
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          rowSpan={1}
                          colSpan={1}
                        >
                          Graph
                        </th>
                        <th
                          className="bg-none width50 sorting"
                          tabIndex={0}
                          aria-controls="example6"
                          rowSpan={1}
                          colSpan={1}
                        />
                      </tr>
                    </thead>
                    <tbody>
                      {coinsData.map((data) => {
                        return (
                          <>
                            <tr role="row" className="even market-trbg">
                              <td className="sorting_1">
                                {/* <img
                                  src={data.image}
                                  style={{ width: "50px" }}
                                /> */}
                                {data.cmc_rank}
                              </td>
                              <td className="wspace-no">
                                {/* 16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-danger">
                            <IoMdArrowDropdown /> 241.54(-1.45%)
                          </span> */}
                                {/* {data.quote.USD.percent_change_24h} */}
                                {change === "1h"
                                  ? parseFloat(
                                      data.quote.USD.percent_change_1h
                                    ).toFixed(4)
                                  : change === "7d"
                                  ? parseFloat(
                                      data.quote.USD.percent_change_7d
                                    ).toFixed(4)
                                  : parseFloat(
                                      data.quote.USD.percent_change_24h
                                    ).toFixed(4)}
                              </td>

                              <td>
                                {" "}
                                <button
                                  type="button"
                                  class="btn"
                                  style={{
                                    background: "#3eacff",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "7px",
                                  }}
                                >
                                  Buy Now
                                </button>
                              </td>
                              <td>{data.name}</td>

                              <td>
                                {parseFloat(data.quote.USD.volume_24h).toFixed(
                                  4
                                )}
                              </td>
                              <td>
                                {parseFloat(data.quote.USD.price).toFixed(4)}
                              </td>
                              <td>
                                <ProgressBar now={70} variant="primary" />
                              </td>
                            </tr>
                          </>
                        );
                      })}

                      {/* <tr role="row" className="odd market-trbg">
                        <td className="sorting_1">
                          <span className=" rank-ic fs-20">#3</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-danger">
                            <IoMdArrowDropdown /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Dodge</td>
                        <td>$220,083,007,631</td>
                        <td>
                          <ProgressBar now={70} variant="success" />
                        </td>
                      </tr> */}
                      {/* <tr role="row" className="even">
                        <td className="sorting_1">
                          <span className="rank-ic fs-20">#4</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-success">
                            <IoMdArrowDropup /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Solana</td>
                        <td>$220,083,007,631</td>
                        <td>
                          <ProgressBar now={70} variant="dark" />
                        </td>
                      </tr> */}
                      {/* <tr role="row" className="odd">
                        <td className="sorting_1">
                          <span className="rank-ic fs-20">#5</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-danger">
                            <IoMdArrowDropdown /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Polka Dot</td>
                        <td>$220,083,007,631</td>
                        <td>
                          <ProgressBar now={70} variant="danger" />
                        </td>
                      </tr> */}
                      {/*  <tr role="row" className="even">
                         <td className="sorting_1">
                          <span className="rank-ic fs-20">#6</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-success">
                            <IoMdArrowDropup /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Matic</td>
                        <td>$220,083,007,631</td>
                        <td>
                          <ProgressBar now={70} variant="primary" />
                        </td>
                      </tr> */}
                      {/* <tr role="row" className="odd">
                        <td className="sorting_1">
                          <span className="rank-ic fs-20">#7</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-success">
                            <IoMdArrowDropup /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Sand</td>
                        <td>$220,083,007,631</td>
                        <td>
                          <ProgressBar now={70} variant="dark" />
                        </td>
                      </tr>*/}
                      {/* <tr role="row" className="even"> 
                        <td className="sorting_1">
                          <span className="rank-ic fs-20">#8</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-danger">
                            <IoMdArrowDropdown /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Mana</td>
                        <td>$220,083,007,631</td>
                        <td>
                          <ProgressBar now={70} variant="success" />
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">
                          <span className="rank-ic fs-20">#9</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-danger">
                            <IoMdArrowDropdown /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Eth</td>
                        <td>$220,083,007,631</td>
                        <td>
                          <ProgressBar now={70} variant="danger" />
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">
                          <span className="rank-ic fs-20">#10</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-danger">
                            <IoMdArrowDropdown /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Pkl</td>
                        <td>$220,083,007,631</td>
                      </tr> */}
                      {/* <tr role="row" className="odd">
                        <td className="sorting_1">
                          <span className="rank-ic fs-20">#11</span>
                        </td>
                        <td className="wspace-no">
                          16332.32 <br />{" "}
                          <span className="fs-13 mr-5 text-danger">
                            <IoMdArrowDropdown /> 241.54(-1.45%)
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn"
                            style={{ background: "#3eacff", color: "white" }}
                          >
                            Buy Now
                          </button>
                        </td>
                        <td>Ofc</td>
                        <td>$220,083,007,631</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AppProfile;
