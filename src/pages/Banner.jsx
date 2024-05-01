import { Box, Typography } from "@mui/material";
import Navbar from "../component/Navbar";
import home from '../assets/home1.png';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
const Banner = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Box
        className="banner"       
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems={"center"}
          
        >
          <Box p={5}>
          <Typography
             color={"#24466A"}
            variant="h3"
            fontWeight={"bold"}
           p={2}
          >
           Contact us
          </Typography> 
          <Box>
            <Box className="input-content">
              <PersonIcon sx={{color:"#83A3A5",position:'absolute',top:13,left:20}}/>
            <input type="text" placeholder="Name"/>
            </Box>
            <Box className="input-content">
              <EmailIcon sx={{color:"#83A3A5",position:'absolute',top:13,left:20}}/>
            <input type="text" placeholder="Email"/>
            </Box>
            <Box className="textarea-content">
            <textarea type="text" rows={5} placeholder="Message"/>
            </Box >
            <Box p={2}>
            <button className="message-btn">Send Message</button>
            </Box>
          </Box>
          </Box>
          <Box>
            <img src={home} width={"100%"}/>
          </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default Banner;
