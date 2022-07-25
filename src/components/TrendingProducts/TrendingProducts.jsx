import * as React from "react";
import "./TrendingProducts.css";
import { useAuthContext } from "../../contexts/auth";
import ApiClient from "../../services/apiClient";

export default function TrendingProducts({ trendingProducts }) {
  // const [trendingProducts, setTrendingProducts] = React.useState([]);
  // const [error, setError] = React.useState({});
  // const { user, apiClient } = useAuthContext();
  // React.useEffect(() => {
  //   const getTrending = async () => {
  //     let trendingArray = [];
  //     try {
  //       if (user) {
  //         trendingArray = await apiClient.getTrendingProducts();
  //         setTrendingProducts(trendingArray.products);
  //       }
  //     } catch (err) {
  //       console.log("error in TrendingProducts:", err);
  //       setError(err.message);
  //     }
  //   };
  //   getTrending();
  // }, []);

  const tp = () => {
    if (trendingProducts.trendingProducts) {
      console.log("trendingProducts", trendingProducts.trendingProducts);
      return trendingProducts.trendingProducts[0].name;
    } else {
      return;
    }
  };

  return (
    <div className="trending-products">
      <div className="tp-items">{() => tp()}</div>
    </div>
  );
}
