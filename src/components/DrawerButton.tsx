import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";

export default function DrawerButton(props: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
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
          style={{ width: "60vw", padding: "40px" }}
        >
          {props.children}
        </Box>
      </Drawer>
    </Box>
  );
}
