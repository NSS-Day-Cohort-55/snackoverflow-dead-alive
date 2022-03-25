const apiURL = "http://localhost:8088";

export const getFoods = () => {
  return fetch(`${apiURL}/foods?_sort=menuId,price`).then((response) =>
    response.json()
  );
};
export const getOrders = () => {
  return fetch(`${apiURL}/orders?_embed=orderFoods`).then((response) =>
    response.json()
  );
};
