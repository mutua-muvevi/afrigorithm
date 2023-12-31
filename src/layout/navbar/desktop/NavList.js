import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Stack, Fade, Portal } from "@mui/material";
// hooks
import useActiveLink from "../../../hooks/useActiveLink";
//
import { NavItem, NavItemDashboard } from "./NavItem";
import { StyledSubheader, StyledMenu } from "./styles";

// ----------------------------------------------------------------------

NavList.propTypes = {
	item: PropTypes.object,
	isOffset: PropTypes.bool,
};

export default function NavList({ item, isOffset }) {
	const { pathname } = useLocation();

	const [openMenu, setOpenMenu] = useState(false);

	const { path, children } = item;

	const { active, isExternalLink } = useActiveLink(path, false);

	useEffect(() => {
		if (openMenu) {
			handleCloseMenu();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const handleOpenMenu = () => {
		if (children) {
			setOpenMenu(true);
		}
	};

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<>
			<NavItem
				item={item}
				isOffset={isOffset}
				active={active}
				open={openMenu}
				isExternalLink={isExternalLink}
				onMouseEnter={handleOpenMenu}
				onMouseLeave={handleCloseMenu}
			/>

			{!!children && openMenu && (
				<Fade in={openMenu}>
					<StyledMenu
						onMouseEnter={handleOpenMenu}
						onMouseLeave={handleCloseMenu}
					>
						{children ? children.map((list, i) => (
							<NavSubList
								key={i}
								subheader={list.subheader}
								items={list.items}
								isDashboard={list.subheader === "Dashboard"}
								onClose={handleCloseMenu}
							/>
						)): ""}
					</StyledMenu>
				</Fade>
			)}
		</>
	);
}

// ----------------------------------------------------------------------

NavSubList.propTypes = {
	items: PropTypes.array,
	onClose: PropTypes.func,
	isDashboard: PropTypes.bool,
	subheader: PropTypes.string,
};

function NavSubList({ items, isDashboard, subheader, onClose }) {
	const { pathname } = useLocation();

	const isActive = (path) => pathname === path;

	return (
		<Stack
			spacing={2.5}
			gridColumn={isDashboard ? "span 6" : "span 2"}
			alignItems="flex-start"
		>

			{items.map((item) =>
				isDashboard ? (
					<NavItemDashboard
						key={item.title}
						item={item}
						onClick={onClose}
					/>
				) : (
					<NavItem
						subItem
						key={item.title}
						item={item}
						active={isActive(item.path)}
						onClick={onClose}
					/>
				)
			)}
		</Stack>
	);
}
