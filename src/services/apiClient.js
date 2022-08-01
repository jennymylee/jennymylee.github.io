import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "sneaker_store_token";
  }

  async setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;
    //console.log("url for request", url);
    
    if (endpoint == "product/search") {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const res = await axios.post(url, {
          "query": data
        }, {headers})
        return { data: res.data, error: null };
      } catch (error) {
        const message = error.response.data.error.message;
        console.error("message", error)
        return { data: null, error: message || String(error) };
      }
    }
    else if (endpoint == "product") {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const res = await axios({ url, method, data, headers });
        return { data: res.data, error: null };
      } catch (error) {
        const message = error.response.data.error.message;
        console.error("message", error)
        return { data: null, error: message || String(error) };
      }
    } else {
      const headers = {
        "Content-Type": "application/json",
        user_id: data,
      };

      if (this.token) {
        headers["Authorization"] = `Bearer ${this.token}`;
      }

      try {
        const res = await axios({ url, method, data, headers });
        return { data: res.data, error: null };
      } catch (error) {
        console.error({ errorResponse: error.response });
        const message = error.response.data.error.message;
        // const message = "error found";
        return { data: null, error: message || String(error) };
      }
    }
  }

  // Still needs testing

  async searchProduct(searchItem){
      return await this.request({endpoint: `product/search`, method: `POST`, data: searchItem})

    }

  async getProducts() {
    return await this.request({ endpoint: `product`, method: `GET` });
  }

  async listWishList(user_id){
      return await this.request({endpoint: `wishlist`, method: `GET`, data: user_id})
  }

  async shoeInWishlist(product){
    console.log("userid", product)
    return await this.request({endpoint: `wishlist/shoeInWishlist`, method: `POST`, data:product})
}

  async createWishListItem(wishListItem){
      return await this.request({endpoint: `wishlist`, method: `POST`, data: wishListItem})
  }

  async deleteWishlistItem(wishListItem){
    return await this.request({endpoint: `wishlist`, method: `DELETE`, data: wishListItem})
}

  async fecthUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }

  async loginUser(credentials) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }

  async signUpUser(credentials) {
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }

  async getProductById(productId) {
    return await this.request({
      endpoint: `product/id/${productId}`,
      method: `GET`
    });
  
  }

  async logoutUser() {
      this.setToken(null);
      localStorage.setItem(this.tokenName, "");
  }

}

export default new ApiClient("http://localhost:3001");
