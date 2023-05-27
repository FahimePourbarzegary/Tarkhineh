type CategoryDataType = {
  title: string;
  imgUrl: string;
}[];
import desert from "../../assets/desert.svg";
import food from "../../assets/food.svg";
import salad from "../../assets/salad.svg";
import drink from "../../assets/drink.svg";
const CategoryData: CategoryDataType = [
  {
    title: "غذای اصلی",
    imgUrl: food,
  },
  {
    title: "پیش غذا",
    imgUrl: salad,
  },
  {
    title: "دسر",
    imgUrl: desert,
  },
  {
    title: "نوشیدنی",
    imgUrl: drink,
  },
];
export default CategoryData;
