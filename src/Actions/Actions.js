export const addCount = () => {
  return {
    type: "INCREMENT"
  };
};

export const subCount = () => {
  return {
    type: "DECREMENT"
  };
};

export const selectedRestuarant = resturantName => {
  return {
    type: "SELECTED_RESTURANT",
    ResName: resturantName
  };
};
