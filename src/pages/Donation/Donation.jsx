import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utils/localstorage";
import DCard from "../../components/DCard/DCard";
import { Button } from "@material-tailwind/react";

const Donation = () => {
  const [lsData, setLsData] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    setLsData(getDataFromLocalStorage());
  }, []);

  const handleShowAllData = () => {
    setIsShowAll(!isShowAll);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto mt-12">
        {lsData.slice(0, isShowAll ? lsData.length : 4).map((item) => (
          <DCard key={item.id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Button
          onClick={handleShowAllData}
          color="orange"
          size="lg"
          className="my-12"
        >
          {isShowAll ? "Show Less" : "Show All"}
        </Button>
      </div>
    </>
  );
};

export default Donation;
