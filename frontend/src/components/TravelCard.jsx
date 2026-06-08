import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const TravelCard = ({ blog }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={blog.image}
        alt={blog.title}
      />
      <CardContent>
        <Typography variant="h6">{blog.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TravelCard;
