export const addCar = (newCar) => {
  return {
    type: "ADD_CAR",
    value: newCar,
  };
};


export const deleteCar = (index) => {
  return {
    type: "DELETE_CAR",
    value: index
  }
}