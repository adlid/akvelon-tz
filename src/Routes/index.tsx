import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { MainLayout } from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import { MenuListApi } from "../services/MenuListService";
import { IUnknown } from "../models/IUnknown";
import ColorItem from "../components/ColorItem/ColorItem";
import UserList from "../Pages/UserList/UserList";

export const RoutesComponent: React.FC = () => {
	const [menuList, setMenuList] = useState<IUnknown[]>();
	const { error, isLoading, data } =
		MenuListApi.useFetchAllMenuItemListQuery("");

	useEffect(() => {
		setMenuList(data?.data);
		console.log(data?.data[1].name.split(" ").join(""));
		console.log(menuList);
	}, [data]);

	if (isLoading) {
		return <div>Loading</div>;
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/users" element={<UserList />} />
					{menuList?.map((item) => {
						return (
							<Route
								key={item.pantone_value}
								path={item.name.split(" ").join("")}
								element={<ColorItem id={item.id} />}
							/>
						);
					})}
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
