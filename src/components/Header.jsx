import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { styled, alpha } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 240,
    backgroundColor: "#f4f4f4",
  },
}));

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const handleLogin = (event) => {
    setIsAuthenticated(true);
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    toggleDrawer(false);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user.id");
    navigate("/sign");
  };

  const handleCombinedClick = () => {
    handleLogin();
    toggleDrawer(false);
  };

  const handleCombinedLogOut = () => {
    handleLogout();
    toggleDrawer(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={"/src/public/grid-logo-navbar.png"}
            alt="grid logo navbar"
            style={{ height: 50, marginRight: 20 }}
          ></img>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}></Typography>

          {localStorage.getItem("token") ? (
            <div>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon
                    style={{ width: "30px", height: "30px" }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{ width: "80px", height: "80px" }}
              >
                <AccountCircle style={{ width: "30px", height: "30px" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  component={NavLink}
                  to="/profile"
                >
                  Perfil
                </MenuItem>
                <MenuItem onClick={handleCombinedLogOut}>
                  Cerrar sesion
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <> </>
          )}
        </Toolbar>
      </AppBar>
      <StyledDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem
            onClick={toggleDrawer(false)}
            button
            component={NavLink}
            to="/"
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Home" />{" "}
            </Link>
          </ListItem>
          <ListItem
            onClick={toggleDrawer(false)}
            button
            component={NavLink}
            to="/events"
          >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <Link to="/events">
              <ListItemText primary="Descubrir eventos" />{" "}
            </Link>
          </ListItem>
          {localStorage.getItem("token") ? (
            <div>
              <ListItem
                onClick={toggleDrawer(false)}
                button
                component={NavLink}
                to="/create"
              >
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Crear eventos" />
              </ListItem>
            </div>
          ) : (
            <> </>
          )}

          {/* <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <Link onClick={toggleDrawer(false)} to="/editevent">
              <ListItemText primary="Editar eventos" />{" "}
            </Link>
          </ListItem> */}
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <Link onClick={toggleDrawer(false)} to="/about">
              {" "}
              <ListItemText primary="Acerca de" />
            </Link>
          </ListItem>
          <ListItem
            onClick={toggleDrawer(false)}
            button
            component={NavLink}
            to="/contact"
          >
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <Link onClick={toggleDrawer(false)} to="/contact">
              <ListItemText primary="Contacto" />
            </Link>
          </ListItem>
          {/* <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Centro de ayuda" />
          </ListItem> */}
        </List>
        <Divider />
        <List>
          {!localStorage.getItem("token") ? (
            <>
              <ListItem
                onClick={handleCombinedClick}
                button
                component={NavLink}
                to="/sign"
              >
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <Link to="/sign">
                  <ListItemText primary="Registrarse" />
                </Link>
              </ListItem>
              <ListItem
                onClick={handleCombinedClick}
                button
                component={NavLink}
                to="/sign"
              >
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>

                <ListItemText primary="Iniciar sesion" />
              </ListItem>
            </>
          ) : (
            <ListItem onClick={handleLogout} button component={NavLink} to="/">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesion" />
            </ListItem>
          )}
        </List>
      </StyledDrawer>
    </>
  );
}

export default Header;
