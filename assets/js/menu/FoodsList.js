import * as MenuManger from "./MenuManger.js";
import { FoodCard } from "./FoodCard.js";

export const FoodList = () => {
  //places info in main section
  const contentTarget = document.querySelector("main");
  let HTMLString;
  //returns array of all the foods
  MenuManger.getFoods().then((foodArray) => {
    HTMLString = `<div class="row">`;
    HTMLString += foodArray.map((food) => FoodCard(food)).join("");
    HTMLString += `</div>`;
    contentTarget.innerHTML = HTMLString;
  });
};
