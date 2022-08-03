import * as React from "react"
import "./ArticleTwo.css"
import Footer from "../Footer/Footer"

/*
This component is the second of three articles that will make
our webpage unique. This will inform user how to detect fake sneakers
when deciding to buy a sneaker.
*/
export default function ArticleTwo() {
  return (
      <div className="articleTwopage">
      <div className="articleTwo-container">
          <div className="banner">
              <img className="img-banner" src={require('./banner.png')} alt="Article Two Hero Banner Image"/>
          </div>
          <div className="info">
              <div className="date">
                  <div className="number">
                      02
                  </div>
                  <div className="month">
                        August 2022
                  </div>
              </div>
              <div className="content">
                  <div className="header">
                      <p>
                      Easy ways to recognize fake sneakers
                      </p>
                  </div>
                  <hr className="line"/>
                  <div className="text">
                      <p>
                      Shoe quality inspection is an essential skill for new resellers and customers to learn. In a world where authentic pieces and counterfeit kicks coexist, it can be difficult to differentiate between the two. We’ve curated a list of quick and easy tips to ensure that your product is authentic and in the best condition possible.
                      </p>
                  </div>
                  <div className="title">
                      1. Packaging
                  </div>
                  <div className="text">
                      <p>
                      An easy way to check if a pair of sneakers is authentic is to look at the packaging. Be sure to compare your box, item stickers, CPU code, fonts, retail tag, and all other elements of the packaging. Big companies uphold high standards for packaging. Therefore, an authentic name-brand product does not have any flaws in the packaging. The slightest mistake, no matter how minor, constitutes a replica. Although research on your end might take some time and energy to do, it’s better to go the extra mile if you are in the business of owning authentic kicks.
                  </p>
                  </div>
                  <div className="title">
                      2. Inside Tags
                  </div>
                  <div className="text">
                      <p>
                      Something else that you should be looking out for is a correct UPC code. This code will be identical for every shoe of the same size. To authenticate this number, you can look up the model via the GOAT app or compare tags with a friend.
                        </p>
                        <p>
A tag inside of a sneaker also contains some production information. Shoes that are assembled within the same plant are made within specific dates contain uniform production numbers. These numbers should be relatively close for all productions within the same plant. A shoe’s specific plant can be found on the top right of the inside tag, and its production numbers can be found on the bottom left.
                      </p>
                  </div>
                  <div className="title">
                      3. Odor
                  </div>
                  <div className="text">
                      <p>
                      It might seem silly to smell a pair of sneakers, but it is a necessary precaution to take before making a purchase. Fake shoes will have a pungent odor, as they are made with cheaper materials compared to their authentic counterparts. New shoes from a reputable brand have a distinct, subtle smell across all of their products.
                      </p>
                  </div>
                  <div className="title">
                      4. Comparing with an Authentic Sneaker
                  </div>
                  <div className="text">
                      <p>
                      If you can get your hands on an authentic sneaker of the same model, even better. Compare the stitching and feel of the foam. Utilize the model shoe as a blueprint for finding flaws.
                      </p>
                  </div>
                  <div className="title">
                      5. Check for Symmetry
                  </div>
                  <div className="text">
                      <p>
                      Wonky, mismatched shoes are a clear sign of a fake. Check the alignment of the shoe’s parts by holding them side-by-side or back-to-back, matching up the bottoms and tops of each shoe. Observe that the heights and widths are the same, and check to see if both shoes have the same amount of curvature or straightness. Last but not least, observe the finish and colors of each part of the sneakers.
                     </p>
                  </div>
                  <hr className="line"/>
                  <div className="source-title">
                      Sources
                  </div>
                  <div className="source-links">
                      <p>
                      https://www.hypestew.com/blogs/news/legit-check
                      </p>
                      <p>
                      https://www.sneakerfactory.net/2018/05/shoe-quality-inspections/
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </div>
  )
}