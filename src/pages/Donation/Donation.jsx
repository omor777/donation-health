import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utils/localstorage";
import DCard from "../../components/DCard/DCard";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Donation = () => {
  const [lsData, setLsData] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    setLsData(getDataFromLocalStorage());
  }, []);

  const handleShowAllData = () => {
    setIsShowAll(!isShowAll);
  };

  if (lsData.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <Typography variant="h3">No Data Found!</Typography>
        <Link to={"/"}>
          <Button className="mt-4" color="purple" size="lg">
            Go To Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto mt-12">
        {lsData.slice(0, isShowAll ? lsData.length : 4).map((item) => (
          <DCard key={item.id} item={item} />
        ))}
      </div>
      {lsData.length > 4 && (
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
      )}
    </>
  );
};

export default Donation;
