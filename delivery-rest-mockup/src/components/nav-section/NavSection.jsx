import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import {
  //  Box,
  List,
  //  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
//
import {
  StyledNavItem,
  // StyledNavItemIcon
} from "./styles";
import {
  Pagination,
  // AppBar,
  // Menu,
  // ResourceContextProvider,
  useGetList,
  // useListContext,
  // useResourceContext,
  // Sidebar,
  // ComponentPropType,
  // useSidebarState,
  // useTranslate,
} from "react-admin";

// ----------------------------------------------------------------------
export const NavSection = () => {
  return <ModuleCards />;
};

const ModuleCardsPagination = () => <Pagination rowsPerPageOptions={[]} />;

const ModuleCards = () => {
  let { data } = useGetList("modulos", { pagination: { perPage: 20 } });
  // data = data.sort((a,b) => b.z_index - a.z_index )
  // const { data } = useListContext();
  const role = localStorage.getItem("permissions");
  // console.log("Data: " + JSON.stringify(data))
  // data && console.dir(data)
  // console.log(JSON.stringify(data))
  // console.log(data.map(el => el.name))
  return (
    <>
      {/* <ResourceName /> */}
      <List pagination={<ModuleCardsPagination />}>
        <Stack
          alignContent={"flex-start"}
          textAlign={"left"}
          alignItems={"start"}
        >
          {data
            ? data
                .reverse()
                .map((module, i) =>
                  role === module.nivelAuth ? (
                    <NavItem
                      key={i}
                      id={module.collectionId + "/" + module.id}
                      name={module.nombre}
                      icon={module.imagen}
                      shortName={module.nombrecorto}
                    />
                  ) : (
                    ""
                  )
                )
            : "No data!"}
        </Stack>
      </List>
    </>
  );
};
const ModuleCard = ({ text }) => {
  return <Typography>{text}</Typography>;
};
function NavItem({ id, icon, shortName, name }) {
  const src = `https://powerful-daybreak.pockethost.io/api/files/${id}/${icon}`;
  https://powerful-daybreak.pockethost.io/api/files/kjw3xku5wijhse7/ofa4ro5rw9h0i5l/ic_user_K2rLWjPQTb.svg
  return (
    <StyledNavItem
      component={RouterLink}
      to={shortName}
      sx={{
        "&.active": {
          color: "text.primary",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <img src={src} alt={name} height={22} width={22} />
      {/* <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> */}

      <Typography>{name}</Typography>
    </StyledNavItem>
  );
}
// ----------------------------------------------------------------------
NavSection.propTypes = {
  data: PropTypes.array,
  dashboard: PropTypes.object,
};
ModuleCard.propTypes = {
  text: PropTypes.string,
};
NavItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object,
  name: PropTypes.string,
  icon: PropTypes.string,
  shortName: PropTypes.string,
};
