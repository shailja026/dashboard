import React, { useEffect, useState, useMemo } from "react";
import styles from "../styles/dashboard.module.css";
import companyData from "./campaigns";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { MdTableChart } from "react-icons/md";
import peopleData from "./peopleData";
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const Pdata = {
    labels: ["40% Male", "35% female", "25%Unknown"],
    datasets: [
      {
        label: "Poll",
        data: [4, 3, 2],
        backgroundColor: ["brown", "skyblue", "green"],
        borderColor: ["brown", "skyblue", "green"],
      },
    ],
  };
  const matrixOptions = ['Male', 'Female', 'Unknown'];
  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "middle",
      },
    },
  };

  // States
  const [data, setData] = useState([...companyData]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [opetTable, setOpentable] = useState(false);
  const [openDonought, setOpenDonought] = useState(true);
  const [people, setPeople] = useState([...peopleData]);
  const [sortPeople, setSortPeople] = useState("desc");

  const [selectedMatrix, setSelectedMatrix] = useState('Clicks');

  //   Sorting of data with respect to Cost
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  const sortedData = useMemo(
    () =>
      [...data].sort((a, b) => {
        return sortOrder === "asc" ? a.Cost - b.Cost : b.Cost - a.Cost;
      }),
    [sortOrder]
  );

  const peoplesortedData = useMemo(
    () =>
      [...people].sort((a, b) => {
        return sortPeople === "asc" ? a.cost - b.cost : b.cost - a.cost;
      }),
    [sortPeople]
  );

  //   Setting the sorted value to the data array
  useEffect(() => {
    setData(sortedData);
  }, [sortOrder]);

  useEffect(() => {
    setPeople(peoplesortedData);
  }, [sortPeople]);

  const handleBox1 = () => {
    setOpenDonought(true);
    setOpentable(false);
  };
  const handleBox2 = () => {
    setOpenDonought(false);
    setOpentable(true);
  };

  const handleChangeMatrix = (event) => {
    setSelectedMatrix(event.target.value);
  };

  return (
    <div className={styles.dashboard}>
      {/* Left box which will render all the data in the table */}
      <div className={styles.dataBox}>
        <p>
          <span>Ad Insligth</span>
          <div className="sort-container">
            <label htmlFor="sortOrder" className={styles.sortLabel}>
              Sort by:
            </label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortChange}
              className={styles.sortBox}
            >
              <option value="asc" className={styles.options}>
                Ascending
              </option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <span>
            {" "}
            <CiCircleQuestion />
          </span>{" "}
        </p>
        <table className={styles.companyTable}>
          <thead>
            <tr>
              <th>
                Campaigns <RiArrowDropDownLine />
              </th>
              <th>Clicks</th>
              <th>Cost</th>
              <th>Conversions</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {data.map((company) => (
              <tr key={company.Id} className={styles.row}>
                <td>{company.Compaigns}</td>
                <td>{company.Clicks}</td>
                <td>$ {company.Cost}</td>
                <td>{company.Conversions}</td>
                <td>$ {company.Revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rigth box which will render the donus box and the people who are using  */}
      <div className={styles.visualBox}>
        <div className={styles.boxOfNut}>
          <p>Ad Insights</p>
          {opetTable ? (
            <select
              id="sortOrder"
              value={sortPeople}
              onChange={(e) => setSortPeople(e.target.value)}
              className={styles.sortBox}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          ) : (
            <div>
            {/* <label>Select Matrix:</label> */}
            <select value={selectedMatrix} onChange={handleChangeMatrix}>
              {matrixOptions.map((matrix) => (
                <option key={matrix} value={matrix}>
                  {matrix}
                </option>
              ))}
            </select>
          </div>
          )}
          <span>
            {" "}
            <CiCircleQuestion />
          </span>{" "}
        </div>
        {openDonought ? (
          <div className={styles.doughtnutBox}>
            <Doughnut data={Pdata} options={options}></Doughnut>
          </div>
        ) : (
          <div style={{ height: "350px" }}>
            {
              <table className={styles.companyTable}>
                <thead>
                  <tr>
                    <th>
                      Group <RiArrowDropDownLine />
                    </th>
                    <th>Clicks</th>
                    <th>Cost</th>
                    <th>Conversions</th>
                    <th>Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((company) => (
                    <tr key={company.id} className={styles.row}>
                      <td>{company.group}</td>
                      <td>{company.clicks}</td>
                      <td>$ {company.cost}</td>
                      <td>{company.conversions}</td>
                      <td>$ {company.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>
        )}

        <div className={styles.buttonBox}>
          <button
            onClick={handleBox1}
            style={
              openDonought
                ? { backgroundColor: "skyblue" }
                : { backgroundColor: "wheat" }
            }
          >
            <BiSolidDoughnutChart />
          </button>
          <button
            onClick={handleBox2}
            style={
              opetTable
                ? { backgroundColor: "skyblue" }
                : { backgroundColor: "wheat" }
            }
          >
            <MdTableChart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
