
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  
  return (
    <>
      <Box
      
        height={"76px"}
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        bgcolor={"#3366CC"}
      >
        <Box p={3} ml={2}>
          <Typography variant="h5" fontWeight={"bold"} color={'white'}>
          DEMO LOGO
          </Typography>
        </Box>
        
        <Box

          p={2.5}
          mr={2}
        >
          <Box className='srarch-input'>
          
            <input
              placeholder="Search…"
             type="text"
            />
         
          </Box>
          
        </Box>
      </Box>
      
    </>
  );
};

export default Navbar;
