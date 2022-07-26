import React, {useState} from "react";
import "./ProductRow.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/ProductCard/ProductCard"
import apiClient from "../../services/apiClient"


/*
These two variables are in charge of styling the css of the next and previous arrow
*/
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img className="arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSqOihwPfB1_sBSSYQvsViOAdUtE7TNuG3Q&usqp=CAU" alt="prevArrow" {...props} />
  );

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
<img className="arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSqOihwPfB1_sBSSYQvsViOAdUtE7TNuG3Q&usqp=CAU" alt="nextArrow" {...props} />
);
/*
This component is being render in the LandingPage component
which call an api from apiClient to render a carousel of sneakers
*/
export default function ProductRow(){
    const [sneaker, setProducts] = useState([])
    const [error, setError] = useState({})
    React.useEffect(() => {
        const getSneakers = async () => {
          const {data, error} = await apiClient.getProducts()
          if(data){
            setProducts(data.products)
          }
          if(error){
            setError(error)
            console.log("error in trending", error)
          }
        }
        getSneakers()
      }, [])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
    return (
      <div className="product-row-container">
        <h2>Featured</h2>
        <Slider {...settings}>
            {sneaker.map((ele, idx) => {
                return (
                    <ProductCard product={ele} key={idx}></ProductCard>
                )
            })}
        </Slider>
      </div>
    );
}