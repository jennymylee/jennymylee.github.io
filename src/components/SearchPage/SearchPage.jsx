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
    const [ searchItem, setSearchItem] = React.useState([])
    React.useEffect(() => {
        const fetchSearchProducts = async () => {
          try {
            const { data, error } = await apiClient.searchProduct(searchProducts)
            if (data) {
              setSearchItem(data.products);
              console.log("search prodcuts", data.products)
            }
          } catch (err) {
            console.log("error in search", err)
          }
        };
        fetchSearchProducts();
      }, [searchProducts]);
      console.log("search ITem", searchItem)
  return (
      <div className="search-page">
          {/* <Pagination></Pagination> */}
          <SearchProduct searchItem={searchItem}></SearchProduct>
          <>
            <ProductRow name={"1"} number={"4"}></ProductRow>
          </>
          <Footer></Footer>
      </div>
  );
}