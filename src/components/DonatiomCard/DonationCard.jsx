import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationCard = ({ item }) => {
  const { cardBg, textColor, image, category, title, categoryBg, id } = item;
  //   console.log(item);
  return (
    <Link to={`/card-details/${id}`}>
      <Card
        style={{
          backgroundColor: cardBg,
        }}
        className="overflow-hidden"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            className="w-full h-[200px] object-cover rounded-md"
            src={image}
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
          <Typography
            style={{
              color: textColor,
              marginTop:'16px'
            }}
            variant="h4"
            color="blue-gray"
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

DonationCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DonationCard;
