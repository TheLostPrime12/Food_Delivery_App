import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  const {
    name,
    costForTwo,
    sla,
    avgRating,
    cuisines,
    cloudinaryImageId,
    locality,
    areaName,
  } = resData?.info;
  return (
    <div className="restaurantCard mx-4 my-2 p-4 w-[220px] h-[450px] bg-gray-200 rounded-lg hover:bg-gray-300">
      <img
        className="restaurantImage rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5 className="text-sm">{locality + ", " + areaName}</h5>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="font-bold">{costForTwo}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const discountWrittenRestaurantCard = (RestaurantCardComponent) => {
  return (props) => {
    const {resData} = props;
    const {header, subHeader} = resData?.info.aggregatedDiscountInfoV3;
    return (
      <div className="flex justify-center">
        <label className="absolute font-bold text-gray-100 text-lg mt-28 ">
          {header} {subHeader}
        </label>
        <RestaurantCardComponent {...props} />
      </div>
    );
  };
};


export default RestaurantCardComponent;
