import { useEffect, useState, useContext } from "react";
import restaurantList from "../utils/dummyData";
import RestaurantCardComponent, {
  discountWrittenRestaurantCard,
} from "./RestaurantCardComponent";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchName, setSearchName] = useState("");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardWithDiscount = discountWrittenRestaurantCard(
    RestaurantCardComponent
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    // if console not working, change 4 to 2 or 3.

    const listOfRestaurantsFromAPI =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; // 4th card Also Has Restaurants Data in Day, At Night, 3rd Card Has Restaurants Data.  Always Check API Response
    setListOfRestaurants(listOfRestaurantsFromAPI);
    setFilteredListOfRestaurants(listOfRestaurantsFromAPI);
  };

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks Like You Ate OFFLINE!!!.</h1>
        <h1>Check Your Internet Connection</h1>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <ShimmerComponent />;
  }

  return (
    <div className="body">
      <div className="filterContainer flex">
        <div className="searchBoxContainer mx-4 my-2 p-4">
          <input
            className="searchBox border border-solid border-black rounded-lg p-1 px-2"
            type="text"
            placeholder="Search Restaurants"
            value={searchName}
            onChange={(c) => {
              setSearchName(c.target.value);
            }}
          />
          <button
            className="searchBtn px-4 py-1 bg-green-300 m-4 rounded-lg"
            onClick={() => {
              const searchedListOfRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchName.toLowerCase())
              );
              searchedListOfRestaurants.length === 0
                ? setFilteredListOfRestaurants(listOfRestaurants)
                : setFilteredListOfRestaurants(searchedListOfRestaurants);
              // setFilteredListOfRestaurants(searchedListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="mx-4 my-2 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-1 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              setFilteredListOfRestaurants(
                filteredListOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating >= 4.0
                )
              );
            }}
          >
            Restaurants Or / Above 4.0 Rating
          </button>
        </div>
        <div className="mx-4 my-2 p-4 flex items-center">
          <label className="font-bold">UserName : </label>
          <input
            className="border border-solid border-black rounded-lg p-1 px-2 mx-2"
            value={loggedInUser}
            onChange={(c) => setUserName(c.target.value)}
          />
        </div>
      </div>

      <div className="restaurantListContainer flex flex-wrap">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 &&
            Object.keys(restaurant.info.aggregatedDiscountInfoV3).length !==
              0 ? (
              <RestaurantCardWithDiscount resData={restaurant} />
            ) : (
              <RestaurantCardComponent resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
