import { NavLink } from "react-router-dom";

import { Box, Divider,  List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/system";

// import { menuItems } from "./info";

const logo = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687960483/logos/logowhite_qirfnd.png";

const StyledNavListItem = styled(List)(({theme}) => ({

}));

const LogoParent = styled(ListItem)(({theme}) => ({
	height: "100px",
	width: "60vw",
}));

const LogoItem = styled("img")(({theme}) => ({
	width: "100px",
	height: "120px",
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	marginBottom: "20px",
	margin: "20px auto"
}));

const navlinkStyle = {
	textDecoration: "none",
	color: "inherit"
};

const SwipeableDrawerList = ({ mobileNav, setMobileNav }) => {
  
	return (
		<Box
			role="presentation"
		>
			<StyledNavListItem component="nav" aria-label="Henriot mobile navigation">
				<LogoParent>
					<LogoItem src={logo} alt="Skydive Rhino Kenya Logo"/>
				</LogoParent>

				<Divider color="grey"/>
				{/* {
					menuItems.map((nav, i) => (
						<NavLink to={nav.path} style={navlinkStyle} key={i} onClick={() => setMobileNav(false)}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: mobileNav ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemText primary={nav.label} sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
							</ListItemButton>
						</NavLink>
					))
				} */}
			</StyledNavListItem>
		</Box>
	);
}

export default SwipeableDrawerList;
