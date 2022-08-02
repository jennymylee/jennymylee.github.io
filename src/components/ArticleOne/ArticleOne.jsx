import * as React from "react"
import "./ArticleOne.css"
import Footer from "../Footer/Footer"

/*
This component is the first of three which are stretch features.
To make our website unique, we will provided articles for the user 
to read in order to learn how to buy shoes properly.
*/
export default function ArticleOne() {
  return (
      <div className="articleOnepage">
      <div className="articleOne-container">
          <div className="banner">
              <img className="img-banner" src={require('./banner.png')} alt=""/>
          </div>
          <div className="info">
              <div className="date">
                  <div className="number">
                      01
                  </div>
                  <div className="month">
                        August 2022
                  </div>
              </div>
              <div className="content">
                  <div className="header">
                      <p>
                        How to Purchase Sneakers from Resellers Without Getting Scammed
                      </p>
                  </div>
                  <hr className="line"/>
                  <div className="text">
                      <p>
                        After hours of surfing the Internet, you’ve finally landed on the perfect pair of sneakers.
                        High-res photos, a price well-within your budget, and a quick transaction guarantee. At a glance,
                        this might seem like a great deal. However, under the surface, you might be the latest victim of a
                        textbook reseller scam. Here are some tips and tricks to steer clear of these online schemes during your next shoe hunt.
                      </p>
                  </div>
                  <div className="title">
                      1. Request Tagged Photos
                  </div>
                  <div className="text">
                      <p>
                  One of the best ways to make sure a reseller actually has a pair of sneakers in their inventory is to request a tagged photo of the product in question. Have the reseller take pictures of the pair of sneakers alongside a unique identifier. This can be a piece of paper containing the reseller’s username, their location, the current date, or the name of the marketplace in which the transaction is taking place.
                  </p>
                  <p>
                  Be sure to take note of the background of the photos as well. Are they taken in the same location? Are the floors of the photos different? Use your judgement and intuition to identify possible scams.
                  </p>
                  </div>
                  <div className="title">
                      2. Ask Questions
                  </div>
                  <div className="text">
                      <p>
                      Before throwing your money toward a reseller’s direction, it is essential
                      that you ask as many questions as you need. Be thorough in your chat with
                      the reseller leading up to your purchase. Ask to see the box label, the label
                      inside of the show, and all angles of the shoes. If the pictures are too blurry
                      or are taken from a weird angle, they’re most likely trying to hide something.
                      A reseller that is willing to answer any questions regarding their product is
                      a great indicator that they are transparent and stand by their products.
                      </p>
                  </div>
                  <div className="title">
                      3. Never Mark PayPal Payments as "Gift"
                  </div>
                  <div className="text">
                      <p>
                      In the case where a buyer would like to settle a dispute with PayPal, Paypal
                      will side with the reseller, since the transaction was sent as a gift. To avoid
                      making purchases without the fallback of a refund, it’s best to use PayPal Invoice
                      or Paypal Goods and Services, especially if you do not know the reseller personally.
                      </p>
                  </div>
                  <div className="title">
                      4. Check for a Reseller's Reference Post
                  </div>
                  <div className="text">
                      <p>
                      Most if not all reputable resellers will have a reference post. There, you can view a
                      list of all customers they have sold to and reviews of their products. If you notice that
                      a reseller does not have one, take it as a red flag and a potential scam. Do not ask a reseller
                      if they can send a reference, because they can send a fake review created by their friend.
                      </p>
                  </div>
                  <div className="title">
                      5. If the Price is Too Good to be True, it usually is
                  </div>
                  <div className="text">
                      <p>
                         Resellers are in the business of making a profit, so a heavily discounted ask price should raise
                         some questions. Even the most generous resellers would not actively try to lose money through a 
                         transaction. Do not be blindsided by a deal that sounds too good to be true. Check sneaker sites to
                         make sure that the asking prices relatively match.
                     </p>
                  </div>
                  <hr className="line"/>
                  <div className="source-title">
                      Sources
                  </div>
                  <div className="source-links">
                      <p>
                      https://www.complex.com/sneakers/2014/07/how-to-buy-sneakers-from-resellers-without-getting-scammed/request-tagged-photos
                      </p>
                      <p>
                      https://www.youtube.com/watch?v=4pjJ8Iths1M
                      </p>
                      <p>
                      https://www.youtube.com/watch?v=XC_PH6HK1UA
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </div>
  )
}
