import { Input, Button, Typography } from "@material-tailwind/react";
import BannerImg from "../../assets/bg.png";
import { useState } from "react";
import PropTypes from "prop-types";

const Banner = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-[600px] relative ">
      <img
        className="inset-0 a absolute h-full bg-cover bg-center bg-no-repeat w-full -z-10 opacity-20"
        src={BannerImg}
      />
      <div className="flex flex-col items-center justify-center  min-h-[600px]  gap-8">
        <div>
          <Typography variant="h2">I Grow By Helping People In Need</Typography>
        </div>
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            onChange={(e) => setValue(e.target.value)}
            type="text"
            value={value}
            label="Search here..."
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            onClick={() => {
              handleSearch(value);
              setValue("");
            }}
            size="sm"
            className="!absolute right-1 top-1 rounded bg-[#FF444A]"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Banner;
