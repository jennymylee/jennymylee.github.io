import * as React from "react";
import "./ArticleThree.css";
import Footer from "../Footer/Footer";

/*
This is the third of three articles that will inform users where 
to buy the safest sneakers at the right price. All articles will 
be rendered inside the main aritcle page.
*/
export default function ArticleThree() {
  return (
    <div className="articleThreepage">
      <div className="articleThree-container">
        <div className="banner">
          <img className="img-banner" src={require("./banner.png")} alt="" />
        </div>
        <div className="info">
          <div className="date">
            <div className="number">03</div>
            <div className="month">August 2022</div>
          </div>
          <div className="content">
            <div className="header">
              <p>
                Here are the Top 5 Most Reputable Marketplaces for Your Next
                Sneaker Purchase
              </p>
            </div>
            <hr className="line" />
            <div className="text">
              <p>
                With the influx of sneaker reseller sites on the Web, navigating
                the world of where to buy a quality pair can feel overwhelming.
                Unless you know where to look, you might find yourself
                overpaying, making a shady deal, or purchasing a counterfeit on
                the secondary market. Luckily, we’ve narrowed down our favorite
                online sneaker marketplaces to save you the hassle.
              </p>
            </div>
            <div className="title">1. Stadium Goods</div>
            <div className="text">
              <p>
                Based in New York City, this secondhand sneaker resale site
                offers a plethora of attractive and trendy products to choose
                from. All of their items are hand-inspected, and they are known
                for stocking the most rare products. Stadium Goods also provides
                best-in-class customer service support.
              </p>
            </div>
            <div className="title">2. Grailed</div>
            <div className="text">
              <p>
                Like Stadium Goods, Grailed’s collection of items includes the
                most sought after shoes on the secondary market. Unlike StockX
                and GOAT, Grailed has a feature where you can directly message
                sellers, negotiate offers, and ask questions. Grailed processes
                all of their transactions through Paypal for Marketplaces to
                ensure top-notch security for sellers and to streamline the
                checkout experience for buyers.
              </p>
            </div>
            <div className="title">3. Ebay</div>
            <div className="text">
              <p>
                Every OG sneakerhead has probably purchased a pair of sneakers
                from Ebay. This trustworthy source offers an “Authenticity
                Guarantee” to verify the condition of sneakers and ensure that
                buyers are not getting ripped off. Plus, this authentication
                process is free of cost. Ebay also gives back to the sneaker
                community by partnering with local charities. Buyers have the
                option to give back to a charity at checkout.
              </p>
            </div>
            <div className="title">4. Sneakers N Stuff</div>
            <div className="text">
              <p>
                This website consistently has the latest and greatest drops in
                the sneaker world. They take excess security measures in
                preventing bots from invading the site, making it that much
                easier for you to cop a pair of the latest sneakers. With an
                abundance of brand products and the many sales they always have,
                you will be able to land a pair of your favorite sneakers
                without breaking the bank.
              </p>
            </div>
            <div className="title">5. Klekt</div>
            <div className="text">
              <p>
                Klekt is a great alternative to sites like Ebay, as you can buy
                and sell sold out sneakers. Klekt ensures that all sneakers are
                guaranteed original. Before a sneaker is forwarded to a buyer
                and a seller receives their payment, this reseller site checks
                the sneakers for quality, authenticity, and condition.
                Additionally, you pay no import fees or taxes f your sneaker is
                internationally shipped.
              </p>
            </div>
            <hr className="line" />
            <div className="source-title">Sources</div>
            <div className="source-links">
              <p>https://www.grailed.com/drycleanonly/best-sneaker-websites</p>
              <p>https://www.one37pm.com/style/best-sneaker-websites</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
