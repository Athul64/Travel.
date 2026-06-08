import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        padding: 3,
        marginTop: 5,
        textAlign: "center"
      }}
    >
      <Typography variant="h6">Contact</Typography>
      <Typography>Email: traveltales@gmail.com</Typography>
      <Typography>Instagram: @traveltales</Typography>
      <Typography sx={{ marginTop: 1 }}>
        © 2026 Travel Tales
      </Typography>
    </Box>
  );
};

export default Footer;
