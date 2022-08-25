import {
	AppBar,
	Badge,
	Box,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { layoutSlice } from "../../store/reducers/LayoutSlice";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface HeaderProps {
	drawerWidth: number;
}

export const Header: React.FC<HeaderProps> = ({ drawerWidth }) => {
	const dispatch = useAppDispatch();

	const { handleDrawerToggle } = layoutSlice.actions;
	const { isMobileOpen } = useAppSelector((state) => state.LayoutReducer);

	return (
		<div>
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={() => dispatch(handleDrawerToggle(isMobileOpen))}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { md: "flex" } }}>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-haspopup="true"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};
