import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import DonationCard from "../../components/DonatiomCard/DonationCard";
import useDonationData from "../../hooks/useDonationData";

const Home = () => {
  const { donationData } = useDonationData();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(donationData);
  }, [donationData]);

  const handleSearch = (searchValue) => {
    if (searchValue.trim() !== "") {
      const filtered =
        donationData &&
        donationData.filter((item) => {
          return item.category.toLowerCase() === searchValue.toLowerCase();
        });

      setData(filtered);
    } else {
      setData(donationData);
    }
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} />

      <div className="mt-24 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data && data.map((item) => (
          <DonationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
