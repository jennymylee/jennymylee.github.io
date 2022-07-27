import * as React from "react";
import "./SearchPage.css";
import SearchProduct from "../SearchProduct/SearchProduct"
import Footer from "../Footer/Footer"
import apiClient from "../../services/apiClient"
import ProductRow from "../ProductRow/ProductRow"
import { useAuthContext} from "../../contexts/auth"

export default function SearchPage() {
    const { searchProducts} = useAuthContext()
    console.log("result", searchProducts)
    const [ searchProductss, setSearchProductss] = React.useState([])
    React.useEffect(() => {
        const fetchSearchProducts = async () => {
          try {
            const { data, error } = await apiClient.getProducts();
            if (data) {
              setSearchProductss(data.products);
              console.log("search prodcuts", data.products)
            }
          } catch (err) {
            console.err("error in search", err)
          }
        };
        fetchSearchProducts();
      }, []);

  return (
      <div className="search-page">
          {/* <Pagination></Pagination> */}
          <SearchProduct searchProducts={searchProductss}></SearchProduct>
          <>
            <ProductRow name={"1"} number={"4"}></ProductRow>
          </>
          <Footer></Footer>
      </div>
  );
}