const apiKey = 'TcptRNmiaZ1VeNu6bwu_0R5phq1xETvchRQvm9ZKBWXtUGuOA4ExLmPeIkenQ8MJhgP1ixKlAYuq5fRRrQQnJxk-hS6SOrE9_0Sh62ud8312fc9vilh2jceMErEiXnYx';
const Yelp = {
    searchYelp(term, location, sortBy) {
     return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
         headers: {
            Authorization: `Bearer ${apiKey}`,
         },
     }).then((response) => {
         return response.json();
     }).then((jsonResponse) => {
      if(jsonResponse.businesses) {
       return jsonResponse.businesses.map((business) => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.img_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
       });
      }
     });
    }
}

export default Yelp;