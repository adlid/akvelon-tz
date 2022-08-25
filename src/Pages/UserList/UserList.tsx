import {
	TablePagination,
	TableContainer,
	Paper,
	TableHead,
	Table,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IUsers } from "../../models/IUsers";
import { UsersApi } from "../../services/UserListService";

interface Column {
	id: "avatar" | "first_name" | "last_name" | "email";
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{
		id: "avatar",
		label: "avatar",
		minWidth: 170,
	},
	{
		id: "first_name",
		label: "first_name",
		minWidth: 170,
	},
	{
		id: "last_name",
		label: "last_name",
		minWidth: 100,
	},
	{
		id: "email",
		label: "email",
		minWidth: 170,
	},
];

function UserList() {
	const [page, setPage] = React.useState(0);
	const [pageNum, setPageNum] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(6);

	const [userList, setuserList] = React.useState<IUsers[]>([]);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
		setPageNum(() => newPage + 1);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		console.log(event.target.value);

		setRowsPerPage(+event.target.value);
		setPage(1);
		setPageNum(1);
	};

	const { error, isFetching, data } =
		UsersApi.useFetchAllUserListQuery(pageNum);

	useEffect(() => {
		if (data?.data) {
			setuserList([...userList, ...data?.data]);
		}
		console.log(data);
	}, [data]);

	useEffect(() => {
		console.log(userList);
	}, [userList]);

	return (
		<div>
			{isFetching && <div>Loading</div>}
			{userList ? (
				<Paper sx={{ width: "100%", overflow: "hidden" }}>
					<TableContainer sx={{ maxHeight: 440 }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											key={column.id}
											align={column.align}
											style={{ minWidth: column.minWidth }}
										>
											{column.label}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{userList &&
									userList!
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((row) => {
											return (
												<TableRow
													hover
													role="checkbox"
													tabIndex={-1}
													key={row.id}
												>
													{columns.map((column) => {
														debugger;
														const value = row![column?.id!]!;
														console.log(value);
														return (
															<TableCell key={column.id} align={column.align}>
																{value}
															</TableCell>
														);
													})}
												</TableRow>
											);
										})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10, 25, 100]}
						component="div"
						count={data?.total!}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
			) : (
				<></>
			)}
		</div>
	);
}

export default UserList;
