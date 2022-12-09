import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from "react-bootstrap";

import PageTitle from "../../../layouts/PageTitle";

import BarChartNoPadding from "./BarChartNoPadding";
import NagetivePositive from "./PositiveNagative2";
import TinyLineChart from "./TinyLineChart";
import LegendEffectOpacity from "./LegendEffectOpacity";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import axios from "axios";
import SortingTable from "../../table/SortingTable/SortingTable";

function RechartJs() {
  const [coinsData, setCoinsData] = useState([]);
  useEffect(() => {
    // setInterval(() => {
    //   fetchData();
    // }, 2000);

    fetchData();
    // console.log("UseEffect");
  }, []);
  const fetchData = async () => {
    // console.log("Fetch daat");
    const res = await axios
      .get(
        // "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8e525801-7772-4973-80c7-984e113b3929"
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        // "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=d8708c14-47f8-45a1-844c-de9d28c8fb5c"
      )
      .then((data) => {
        let ledgers = data.data;
        // let filter = data.data
        //   .map(data)
        //   .filter(
        //     (filt) =>
        //       filt.data.name === "Bitcoin" || filt.data.name === "Ethereum"
        //   );
        // setCoinsData(data.data);
        let filter;
        // let filteredLedgers= ledgers.filter(data=>data.clinicFirebaseId===clinicFirebaseId)
        filter = ledgers
          .filter((data) => data.name == "Bitcoin" || data.name == "Ethereum")
          .map((filteredPerson) => {
            return filteredPerson;
          });
        setCoinsData(filter);
        console.log("Data", filter);
      });
  };
  return (
    <>
      <PageTitle motherMenu="Coins" activeMenu="Portfolio" />
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Portfolio</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="width80">
                      <strong>#</strong>
                    </th>
                    <th>
                      <strong>Asset</strong>
                    </th>
                    <th>
                      <strong>Price</strong>
                    </th>
                    <th>
                      <strong>Unit</strong>
                    </th>
                    <th>
                      <strong>Avg Open</strong>
                    </th>
                    <th>
                      <strong>P/L($)</strong>
                    </th>
                    <th>
                      <strong>P/L(%)</strong>
                    </th>

                    <th>
                      <strong>Buy</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coinsData.map((data) => {
                    return (
                      <>
                        <tr className="even market-trbg">
                          <td className="fs-18 font-w400">
                            <strong>01</strong>
                          </td>
                          <td className="fs-18 font-w500">{data.name}</td>
                          <td className="fs-18 font-w500">
                            {data.current_price}
                          </td>
                          <td className="fs-18 font-w500">
                            {data.price_change_percentage_24h}
                            <br /> <span>Buying</span>
                          </td>
                          <td className="fs-18 font-w500">16,959</td>
                          <td className="fs-18 font-w500 text-danger"> -29$</td>

                          <td className="fs-18 font-w500 text-danger"> -2%</td>
                          <td>
                            {" "}
                            <button
                              type="button"
                              class="btn"
                              style={{ background: "#3eacff", color: "white" }}
                            >
                              Buy Now
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}

                  <tr>
                    <td className="fs-18 font-w600">
                      <strong>02</strong>
                    </td>
                    <td className="fs-18 font-w500">Ethereum</td>
                    <td className="fs-18 font-w500">$16,876</td>
                    <td className="fs-18 font-w500">
                      0.10
                      <br /> <span>Buying</span>
                    </td>
                    <td className="fs-18 font-w500">1695</td>
                    <td className="fs-18 font-w500">
                      {" "}
                      <span className="fs-13 mr-5 text-danger fs-18 font-w600">
                        -29$
                      </span>
                    </td>

                    <td className="fs-18 font-w500">
                      {" "}
                      <span className="fs-13 mr-5 text-danger fs-18 font-w500">
                        -2%
                      </span>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        class="btn"
                        style={{ background: "#3eacff", color: "white" }}
                      >
                        Buy Now
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <SortingTable />
    </>
  );
}

export default RechartJs;
