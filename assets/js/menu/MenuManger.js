const apiURL = "http://localhost:8088";

export const getFoods = () => {
  return fetch(`${apiURL}/foods?_sort=menuId,price`).then((response) =>
    response.json()
  );
};
