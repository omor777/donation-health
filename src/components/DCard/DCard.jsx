import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const DCard = ({ item }) => {
  const { image, title, category, cardBg, categoryBg, textColor, price } = item;
  return (
    <div>
      <Card
        style={{
          backgroundColor: cardBg,
        }}
        className="w-full max-w-[48rem] flex-row"
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2">
            <Button
              size="lg"
              style={{
                backgroundColor: categoryBg,
                color: textColor,
              }}
            >
              {category}
            </Button>
          </div>
          <Typography variant="h4" className="mb-2 mt-5">
            {title}
          </Typography>
          <Typography
            style={{
              color: textColor,
            }}
            variant="h5"
            className="mb-8 font-bold"
          >
            {price}
          </Typography>
          <Button
            style={{
              backgroundColor: textColor,
            }}
            size="lg"
            className=""
          >
            View Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

DCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DCard;
