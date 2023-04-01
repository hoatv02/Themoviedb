import * as React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

function MenuSelect({ handleClick, anchorEl, handleClose, open }) {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <i
              style={{
                backgroundColor: "rgb(163,172,170)",
                width: 20,
                height: 20,
                borderRadius: "50%",
                paddingTop: 1,
              }}
              className="fa-solid fa-ellipsis"
            ></i>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.05))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div style={{ padding: 12, fontWeight: 700 }} onClick={handleClose}>
          Want to rate or add this item to a list?
        </div>
        <MenuItem onClick={handleClose} style={{ fontWeight: 400, color: "#666666", fontSize: 13 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 8 }}>Login</div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </MenuItem>
        <Divider />
        <div style={{ padding: 12, fontWeight: 700 }} onClick={handleClose}>
          Not a member?
        </div>
        <MenuItem onClick={handleClose} style={{ fontWeight: 400, color: "#666666", fontSize: 13 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 8 }}>Sign up and join the community</div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

MenuSelect.propTypes = {
  handleClick: PropTypes.func,
  anchorEl: PropTypes.string,
  handleClose: PropTypes.func,
  open: PropTypes.bool,
}

export default MenuSelect