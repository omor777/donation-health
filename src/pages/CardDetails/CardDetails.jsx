import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveDataToLocalStorage } from "../../utils/localstorage";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const singleItem = data.filter((item) => item.id == id);
    setSingleData(...singleItem);
  }, [id, data]);

  const { description, title, price, image, textColor } = singleData;

  const handleAddToLs = () => {
    saveDataToLocalStorage(singleData);
  };

  return (
    <div className="mt-12 mb-4 px-4 lx:px-0">
      <Card className="max-w-7xl overflow-hidden mx-auto">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
        >
          <div>
            <img className="w-full h-[43.75rem] object-cover" src={image} />
          </div>

          <div className="absolute bottom-0 bg-[#0b0b0b80] h-[130px] w-full">
            <Button
              onClick={handleAddToLs}
              style={{
                backgroundColor: textColor,
              }}
              className="ml-10 mt-10"
              size="lg"
            >
              Donate ${price}
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardDetails;

