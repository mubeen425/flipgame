import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import PageTitle from "../../../layouts/PageTitle";
import MOCK_DATA from "./MOCK_DATA_3.json";
import { COLUMNS } from "./Columns";
import axios from "axios";
//import './table.css';

export const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setCoinsData] = useState([]);

  const tableInstance = useTable({ columns, data }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  useEffect(() => {
    // setInterval(() => {
    //   fetchData();
    // }, 1000);
    fetchData();
    // console.log("UseEffect");
  }, []);
  const fetchData = async () => {
    console.log("Fetch daat");
    const res = await axios
      .get(
        // "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8e525801-7772-4973-80c7-984e113b3929"
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      )
      .then((data) => {
        setCoinsData(data.data);
        console.log("Data", data);
      });
  };

  return (
    <>
      {/* <PageTitle activeMenu="Sorting" motherMenu="Table" /> */}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Portfolio</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div className="dataTables_wrapper">
              <table {...getTableProps()} className="table dataTable display">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          <span className="ml-1">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <i className="fa fa-arrow-down ms-2 fs-14" />
                              ) : (
                                <i className="fa fa-arrow-up ms-2 fs-14" />
                              )
                            ) : (
                              ""
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {/* <img src={row.image} alt="img" /> */}
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {" "}
                              {cell.render("Cell")}{" "}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
                {/* This is only for footer if u require */}
                {/* <tfoot>
									{footerGroups.map(footerGroup =>(
										<tr {...footerGroup.getFooterGroupProps()}>
											{footerGroup.headers.map(column =>(
												<td {...column.getFooterProps()}>{column.render('Footer')}</td>
											))}
										</tr>		
									))}
								</tfoot>  */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SortingTable;
