import React from "react";
import {
  Layout,
  AppBar,
  UserMenu
} from "react-admin";
// import { ReactQueryDevtools } from "react-query/devtools";
import { MyNavBar as MyMenu } from "../components/MyNavBar";

const MyLogoutButton = React.forwardRef((props, ref) => {
  const logout = useLogout();
  const handleClick = () => logout("/");
  return (
    <MenuItem onClick={handleClick} ref={ref}>
      <ExitIcon /> Losgout
    </MenuItem>
  );
});

const MyUserMenu = () => {
  return (
    <UserMenu>
      <Authenticated>
        <Menu.ResourceItem name="modules" />
        <Menu.ResourceItem name="users" />
        <Menu.ResourceItem name="gwps" />
        to="/selfdiagnose" primaryText={":D"}
        leftIcon={<LabelIcon />}
        <MyLogoutButton />
      </Authenticated>
    </UserMenu>
  );
};

const MyAppBar = () => <AppBar />;

export const MyLayout = (props) => (
  <>
    <Layout {...props} />
  </>
);

export default MyLayout;
