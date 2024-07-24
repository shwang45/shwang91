import { Box, Button, Drawer, useMediaQuery } from "@mui/material";
import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function DrawerButton(props: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box>
      <Button size="small" onClick={toggleDrawer(true)}>
        <img
          src="research/button.jpg"
          alt="See all"
          style={{ width: "150px", height: "auto" }}
        />
      </Button>
      <Drawer open={open} anchor={"right"} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={
            isMobile
              ? { width: "100vw", padding: "5px" }
              : { width: "60vw", padding: "40px" }
          }
        >
          {props.children}
          <Button
            onClick={toggleDrawer(false)}
            style={{ position: "absolute", right: 0, top: 0 }}
          >
            <HighlightOffIcon sx={{ color: "#000" }} />
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
