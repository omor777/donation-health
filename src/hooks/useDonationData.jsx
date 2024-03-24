import { useEffect, useState } from "react";

const useDonationData = () => {
  const [donationData, setDonationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setDonationData(data);
        setIsLoading(false);
      });
  }, []);
  return { isLoading, donationData };
};

export default useDonationData;
