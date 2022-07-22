import * as React from "react";
import "./TrendingSideBar.css";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

export default function TrendingSideBar() {
  const [check, setCheck] = React.useState(false);
  return (
    <div className="trending-side-bar">
      <div className="tsb-content">
        <p className="filter-title">Filter By</p>
        {/* ---------------Brand Section---------------- */}
        <div className="filter-section">
          <p className="filter-subtitle">Brand</p>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">Nike</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">Adidas</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">Air Jordan</p>
          </div>
        </div>
        {/* ---------------Price Section---------------- */}
        <div className="filter-section">
          <p className="filter-subtitle">Price</p>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">Under $200</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">$200 - $400</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">$400 - $600</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">$600+</p>
          </div>
        </div>
        {/* ---------------Release Year Section---------------- */}
        <div className="filter-section">
          <p className="filter-subtitle">Release Year</p>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2022</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2021</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2020</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2019</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              setCheck(!check);
            }}
          >
            {check ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2018</p>
          </div>
        </div>
        {/* ---------------Filter Button---------------- */}
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
}
