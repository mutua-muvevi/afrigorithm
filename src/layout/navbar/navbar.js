import React, { useState, useLayoutEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { styled } from '@mui/system';
import { AppBar,Toolbar, IconButton, Typography, Button, Menu, MenuItem, Divider, Container, Stack, Box, Paper } from '@mui/material';

import { FaBars } from "react-icons/fa";


import { menuItems, navConfig } from "./info";

import SwipeableSideDrawer from './drawer';
import useResponsive from 'src/hooks/useResponsive';
import NavDesktop from './desktop/NavDesktop';
import useOffSetTop from 'src/hooks/useOffSetTop';
import { HEADER } from 'src/config';
import NavMobile from './mobile/NavMobile';

const logo = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687960483/logos/logowhite_qirfnd.png"

const TopAppBar = styled(AppBar)(({ theme }) => ({
	zIndex: 3,
	backgroundColor: theme.palette.primary.main,
}))

const StyledContainer = styled(Container)({
	width: "100%",
	paddingTop: "5px",
	paddingBottom: "5px",
})

const StyledLogoSection = styled(Box)({
	borderRadius: "50%",
	padding: "0px"
})

const StyledMenuStack = styled(Stack)({
	width: "100%",
	paddintTop: "20px",
	paddintBottom: "20px",
});

const StyledNavButton = styled(Button) ({
	paddingTop: "20px",
	paddingBottom: "20px",
	width:"max-content"
});

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const StyledButtonStack = styled(Stack)({
	
})

const StyledButton = styled(Button)(({ theme }) => ({
	minWidth: "200px",
	backgroundColor: "#ffffff",
	color: theme.palette.primary.main 
}))

const styledLogo = {
	height: "60px"
}

const styledMobileLogo = {
	height: "40px"
}

const iconButtonSX = {

}

const Navigation = () => {

	const [mobileNav, setMobileNav] = useState(false);

	const isDesktop = useResponsive("up", "md");

	const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

	const handleMobileNav = () => {
		setMobileNav(!mobileNav)
	}

	const innerWidth = window.innerWidth

	return (
		<>
			{/* {
				innerWidth >= 1000 ? (
					<TopAppBar position="scroll">
						<Toolbar>
							<StyledContainer maxWidth="xl">

								<StyledMenuStack direction="row" justifyContent="space-between" alignItems="center" spacing={5}>
									<StyledLogoSection>
										<img src={logo} alt="Skydive logo" style={styledLogo}/>
									</StyledLogoSection>

									<Stack direction="row" spacing={3}>
										{
											menuItems.map((el, i) => (
												<StyledNavButton sx={{textAlign: "left"}} variant="text" key={i}>
													<NavLink to={el.path} style={styledLink}>
														<Typography variant="subtitle1" style={{textTransform: "uppercase", color: "#fff"}}>
															{el.label}
														</Typography>
													</NavLink>

												</StyledNavButton>
											))
										}
									</Stack>


									<StyledButtonStack direction="row" spacing={3}>
										<StyledButton variant="contained" color="secondary">
											<Typography variant="subtitle1" >
												Request a quote
											</Typography>
										</StyledButton>
									</StyledButtonStack>
								</StyledMenuStack>
							</StyledContainer>

						</Toolbar>
					</TopAppBar>
				) : (
					<Box sx={{marginBottom: "52px"}}>
						<TopAppBar >
							<Container maxWidth="xl">
								<Stack direction="row" justifyContent="space-between" alignItems="center">
									<StyledLogoSection>
										<img src={logo} alt="Henriot mobile logo" style={styledMobileLogo}/>
									</StyledLogoSection>

									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleMobileNav}
										color="inherit"
										sx={iconButtonSX}
									>
										<FaBars/>
									</IconButton>
								</Stack>
							</Container>
						</TopAppBar>
					</Box>
				)

			} */}
			{isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}
			
			{!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
			
			{/* <SwipeableSideDrawer mobileNav={mobileNav} setMobileNav={setMobileNav} /> */}
		</>
	);
};

export default Navigation;
