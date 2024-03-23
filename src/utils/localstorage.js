import {  toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const getDataFromLocalStorage = () => {
  const savedData = JSON.parse(localStorage.getItem("donation"));
  if (savedData) {
    return savedData;
  }
  return [];
};

const saveDataToLocalStorage = (item) => {
  const saveData = getDataFromLocalStorage();
  const exist = saveData.find((data) => data.id === item.id);
  if (!exist) {
    saveData.push(item);
    localStorage.setItem("donation", JSON.stringify(saveData));
    toast.success('Add to the donation😊')
  } else {
   toast.warn('Already Exist!')
  }
};

export { getDataFromLocalStorage, saveDataToLocalStorage };
