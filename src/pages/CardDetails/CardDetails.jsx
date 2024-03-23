import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveDataToLocalStorage } from "../../utils/localstorage";

const CardDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const singleItem = data.filter((item) => item.id == id);
    setSingleData(...singleItem);
  }, [id, data]);

  const { description, title, price, image } = singleData;

  const handleAddToLs = () => {
    saveDataToLocalStorage(singleData);
  };

  return (
    <div className="mt-12">
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="w-full h-[400px] object-cover" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <button
            onClick={handleAddToLs}
            className="inline-flex items-center px-6 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Donate ${price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
