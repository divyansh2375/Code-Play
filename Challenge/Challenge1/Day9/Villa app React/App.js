//suppose kro ki tum car bana rhe uske do purje kahi alag pade he aur kuch purje alag to hume sabko jodke ek me banana he header component me . Paint ke liye style inline styling matlb paas me ek box rkha he usme styling ke yantra rkhe he and uska format rkha he

//ab car ko singh haveli bana lo and then us haveli ke andar dishes he aur unke ek speacial table pe rkhi he resturant card jisse bo saari ek hi baar me bhar put ho ske aur bahar gate par unki website ki layout bani he touch screen wali wha sab item dale he jo andar he

//bahar gate wala humara applayout and andar wala humara cards and isme hum sari speciality likhenge iski table ke front pe ki iska name iska rating iska location

//and other jisme final cheeze dalengi isme messypan ko door krna he isliye banaya gaya

//offer bhi to hote hein to bo bhi use hoga ui driven se crousel banayenge it will be a plus point in our interview if we say this

//if you know the basic you will never be defeated 

import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

//yhan curley bracketes nahi ayengi yhan ye round brackets hi ayengi wrna galat ho jayega
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-6/297554916_600342054774196_2046055065676818650_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0PCGHcA3Et0AX8cqTgb&_nc_ht=scontent.fdel27-1.fna&oh=00_AfDfcto2LGgWWv4ZVD9QFt_9C3eXQ2EuQdzqZcJ0Wrkfbg&oe=64CB8497"
    ></img>
  </a>
);

//composing component
const Header = () => {
  return (
    <div className="header">
      <Title />
      {/* navitems create and then put some css in it */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//config ui driven

// ----------------------------
// const config = [
//   {
//     type: "crousel",
//     cards: [
//       {
//         offerName: "40% Offer",
//       },
//       {
//         offerName: "No Delivery Charge",
//       },
//     ],
//   },
//   {
//     type: "restraunts",
//     cards: [
//       {
//         name: "Burgerking",
//         image:
//           "https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2-768x960.jpg",
//         cusins: ["Burger", "American"],
//         rating: "4.7",
//       },
//       {
//         name: "KFC",
//         image:
//           "https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2-768x960.jpg",
//         cusins: ["Burger", "American"],
//         rating: "4.7",
//       },
//     ],
//   },
// ];
// --------------------


const restaurantList = [
    {
        "info": {
          "id": "254193",
          "name": "McDonald's",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/08eee882fda81b68e5c36e3a5d89d8c0",
          "locality": "Phoenix United Mall",
          "areaName": "North City Extension",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "American"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "254193",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "630",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-31 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-phoenix-united-mall-north-city-extension-bareilly-254193",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "291882",
          "name": "Bajrang Dhaba Family Dhaba Restaurant",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/vh3b0ylzi7be9gcdgh2g",
          "locality": "Sanjay Nagar",
          "areaName": "Nawada",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian"
          ],
          "avgRating": 3.6,
          "veg": true,
          "feeDetails": {
            "restaurantId": "291882",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "39790",
          "avgRatingString": "3.6",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-30 22:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/bajrang-dhaba-family-dhaba-restaurant-sanjay-nagar-nawada-bareilly-291882",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "240106",
          "name": "Burger King",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Phoenix United Mall",
          "areaName": "Mahanagar Colony",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "240106",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "166",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "27 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-31 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-phoenix-united-mall-mahanagar-colony-bareilly-240106",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "124441",
          "name": "KFC",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/56c9ab92bd79745fd152a30fa2525426",
          "locality": "Phoenix Mall",
          "areaName": "Mahanagar Colony",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American"
          ],
          "avgRating": 3.9,
          "feeDetails": {
            "restaurantId": "124441",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "547",
          "avgRatingString": "3.9",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-30 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-phoenix-mall-mahanagar-colony-bareilly-124441",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "507565",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/n1bpovksq2a3mi9o4tcf",
          "locality": "Parwana Nagar",
          "areaName": "Mahanagar Colony",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
            "restaurantId": "507565",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "582",
          "avgRatingString": "4.1",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "16 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-30 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-parwana-nagar-mahanagar-colony-bareilly-507565",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "135542",
          "name": "Dosa Planet",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/936d81d1cc542c6a11bcbebce712e1e6",
          "locality": "Phoenix Mall",
          "areaName": "Mahanagar Colony",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "135542",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "6321",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-30 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dosa-planet-phoenix-mall-mahanagar-colony-bareilly-135542",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "298731",
          "name": "PVR Cafe",
          "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/rmtebt2qyx6oouklgvnz",
          "locality": "Phoenixunited Mall",
          "areaName": "Mahanagar Colony",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Snacks",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "298731",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "11664",
          "avgRatingString": "4.1",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-31 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pvr-cafe-phoenixunited-mall-mahanagar-colony-bareilly-298731",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "114186",
          "name": "Aashirwad Veg Family Restaurant",
          "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/jftfyknwi88mgfkrvd8i",
          "locality": "Pilibhit Bypass Road",
          "areaName": "Nawada",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
           
            "Tandoor"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
            "restaurantId": "114186",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "26209",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "3.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-30 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/aashirwad-veg-family-restaurant-pilibhit-bypass-road-nawada-bareilly-114186",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "108103",
          "name": "Satkar Restaurant",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/gsnj55zjsjar4vvnutmz",
          "locality": "Janakpuri",
          "areaName": "Janakpuri",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian"
          ],
          "avgRating": 4.2,
          "veg": true,
          "feeDetails": {
            "restaurantId": "108103",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2100
          },
          "parentId": "21553",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-30 22:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/satkar-restaurant-janakpuri-bareilly-108103",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "346465",
          "name": "Craving Grave",
          "cloudinaryImageId": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/fauopdkb4z5pwdrucp7f",
          "locality": "100 ft Road",
          "areaName": "Mahanagar Colony",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "North Indian",
            "Chinese",

            "Snacks"
          ],
          "avgRating": 3.7,
          "feeDetails": {
            "restaurantId": "346465",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1100
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1100
          },
          "parentId": "65589",
          "avgRatingString": "3.7",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-30 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/craving-grave-100-ft-road-mahanagar-colony-bareilly-346465",
          "type": "WEBLINK"
        }
      },
  ];
  
// //seperate burger king
// const Burgerking = {
//     name: "Burgerking",
//     image : "https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2-768x960.jpg",
//     cusins : ["Burger","American"],
//     rating : "4.7",

// }

//Restraunt Card  (functional component)
const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravel,
    avgRating
}) => {
  return (
    <div className="card">
       <img src={cloudinaryImageId}/>

      <h2>{name}</h2>
      <h2>{lastMileTravel}</h2>
      <h2>{avgRating}</h2>
      <h3>{cuisines.join(",")}</h3>
    
    </div>
  );
};

//functional component of body
const Body = () => {
  return (
    <div className="restaurant-list">
        {/* 1 */}
      {/* <RestrauntCard restaurant = {restaurantList[0]} />
      <RestrauntCard restaurant = {restaurantList[1]} />
      <RestrauntCard restaurant = {restaurantList[2]} />
      <RestrauntCard restaurant = {restaurantList[3]} />
      <RestrauntCard restaurant = {restaurantList[4]} />
      <RestrauntCard restaurant = {restaurantList[5]} />
      <RestrauntCard restaurant = {restaurantList[6]} />
      <RestrauntCard restaurant = {restaurantList[7]} />
      <RestrauntCard restaurant = {restaurantList[8]} />
      <RestrauntCard restaurant = {restaurantList[9]} /> */}
      {restaurantList.map((restraunt) => {
        return <RestrauntCard {...restraunt.info} key={restraunt.info.id}/>
      })}
    
    </div>
  );
};

//functional component of footer
const Footer = () => {
  return <h4>Footer</h4>;
};

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

//react fragment
//we have only one parent in react
//but what if we want two parents ?
//if we dont want two statements in same single div like this
{
  /* <div>
        <h2>First jsx</h2>
        <h2>Second jsx</h2>
    </div> */
}
//we will se react fragment and it is coming from react library . But its looking ugly so just write empty tags like this - <> -- </> this is empty tag known as react fragment
// ------------------------

// const styleObj = {
//     backgroundColor : "red"
// }

// const jsx = (
//     <div style={styleObj}>

//         <h2>First jsx</h2>
//         <h2>Second jsx</h2>
//     </div >

// )

// --------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />);
root.render(<Applayout />);
