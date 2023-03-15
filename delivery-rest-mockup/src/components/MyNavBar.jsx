import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { styled, alpha } from "@mui/material/styles";
import { Box, Link, Drawer, Typography, Avatar } from "@mui/material";
// mock
// import account from '../../../_mock/account';
// hooks
// components
// import Logo from "../../../assets/mainviewImg/Logo final-color-SIMPLIFICADO.png";
import Scrollbar from "./scrollbar";
import { NavSection } from "./nav-section";
import navConfig from "./nav/config";
import useResponsive from "../hooks/useResponsive";
import {
  // AppBar,
  Menu,
  Sidebar,
  // ComponentPropType,
  // useSidebarState,
} from "react-admin";
/* --------------------------------------------------------------------*/

const NAV_WIDTH = 280;
const ContentWithSidebar = styled("main")(() => ({
  display: "flex",
  flexGrow: 1,
}));
const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 1.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
  dashboard: PropTypes.object,
};
function Nav({ openNav, onCloseNav, dashboard }) {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");
  const account = {
    displayName: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
    photoURL: localStorage.getItem("avatar"),
    rol: localStorage.getItem("permissions"),
    token: localStorage.getItem("token"),
  };
  useEffect(() => {
    // console.log(JSON.st           ringify(account))
    console.dir(account)
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);
  const renderContent = (
    <ContentWithSidebar>
      <Sidebar>
        <Scrollbar
          sx={{
            height: 1,
            // bgcolor:'#2DCE99',
            "& .simplebar-content": {
              height: 1,
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              px: 2.5,
              py: 2,
              display: "inline-flex",
              justifyContent: "center",
              objectFit: "cover",
            }}
          >
            {/* <img height="150px" src={Logo} alt="ivy-logo" /> */}
          </Box>

          <Box sx={{ mb: 1, mx: 0.5 }}>
            <Link underline="none">
              <StyledAccount>
                <Avatar src={account.photoURL} alt="photoURL" />

                <Box sx={{ ml: 0.5 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.primary" }}
                  >
                    {account.displayName + ` (${account.rol})`}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {account.email}
                  </Typography>
                </Box>
              </StyledAccount>
            </Link>
          </Box>

          <NavSection data={navConfig} dashboard={dashboard} />
        </Scrollbar>
      </Sidebar>
    </ContentWithSidebar>
  );
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

export const MyNavBar = Nav;
// export default MyNavBar;
