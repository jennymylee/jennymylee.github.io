import * as React from "react";
import apiClient from "../../services/apiClient";
import "./TrendingSideBar.css";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

export default function TrendingSideBar({
  trendingProducts,
  setTrendingProducts,
  brands,
  setBrands,
  priceRanges,
  setPriceRanges,
  releaseYears,
  setReleaseYears,
}) {
  // This useState keeps track of the current state of each checkbox.
  // Each checkbox is defaulted to false.
  // false = unchecked
  // true = checked
  const [checkedState, setCheckedState] = React.useState(
    new Array(12).fill(false)
  );

  // This function updates the useState corresponding to the
  // param category with the param criteria
  //
  // If a state variable contains the criteria value,
  // the value is removed from the state.
  // Else, the criteria value is appended to the state.
  //
  // :param category: "brand" || "price" || "release_year"
  // :param criteria: string or int
  const updateFilters = (category, criteria) => {
    if (category === "brand") {
      if (brands.includes(criteria)) {
        let copy = [...brands];
        let index = copy.indexOf(criteria);
        delete copy[index];
        setBrands(copy);
      } else {
        setBrands([...brands, criteria]);
      }
    } else if (category === "price") {
      if (priceRanges.includes(criteria)) {
        let copy = [...priceRanges];
        let index = copy.indexOf(criteria);
        delete copy[index];
        setPriceRanges(copy);
      } else {
        setPriceRanges([...priceRanges, criteria]);
      }
    } else if (category === "release_year") {
      if (releaseYears.includes(criteria)) {
        let copy = [...releaseYears];
        let index = copy.indexOf(criteria);
        delete copy[index];
        setReleaseYears(copy);
      } else {
        setReleaseYears([...releaseYears, criteria]);
      }
    }
  };

  // This function updates the checkedState state variable,
  // toggling between true and false given a position.
  const updateCheckedState = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  // This function sets the trendingProducts state to be
  // an array of all products in the shoes table
  const fetchProducts = async () => {
    try {
      const { data, error } = await apiClient.getProducts();
      if (data) {
        setTrendingProducts(data.products);
      }
    } catch (err) {
      return;
    }
  };

  // This function updates the trendingProducts state, filtering it with
  // the conditions specified in brands, priceRanges, and releaseYears
  const filterResults = () => {
    // We first have to update trendingProducts to be
    // a complete array of the products before filtering
    fetchProducts();
  };

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
              updateCheckedState(0);
              updateFilters("brand", "Nike");
            }}
          >
            {checkedState[0] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">Nike</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(1);
              updateFilters("brand", "Adidas");
            }}
          >
            {checkedState[1] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">Adidas</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(2);
              updateFilters("brand", "Jordan");
            }}
          >
            {checkedState[2] ? (
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
              updateCheckedState(3);
              updateFilters("price", "<200");
            }}
          >
            {checkedState[3] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">Under $200</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(4);
              updateFilters("price", "200-400");
            }}
          >
            {checkedState[4] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">$200 - $400</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(5);
              updateFilters("price", "400-600");
            }}
          >
            {checkedState[5] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">$400 - $600</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(6);
              updateFilters("price", ">600");
            }}
          >
            {checkedState[6] ? (
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
              updateCheckedState(7);
              updateFilters("release_year", 2022);
            }}
          >
            {checkedState[7] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2022</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(8);
              updateFilters("release_year", 2021);
            }}
          >
            {checkedState[8] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2021</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(9);
              updateFilters("release_year", 2020);
            }}
          >
            {checkedState[9] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2020</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(10);
              updateFilters("release_year", 2019);
            }}
          >
            {checkedState[10] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2019</p>
          </div>
          <div
            className="filter-row"
            onClick={() => {
              updateCheckedState(11);
              updateFilters("release_year", 2018);
            }}
          >
            {checkedState[11] ? (
              <MdOutlineCheckBox color="white" size="25px" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank color="white" size="25px" />
            )}
            <p className="filter-text">2018</p>
          </div>
        </div>
        {/* ---------------Filter Button---------------- */}
        <button className="filter-btn" onClick={() => filterResults()}>
          Filter
        </button>
      </div>
    </div>
  );
}
