import React,{useEffect,useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import axios from "axios";



export const ToifalarCategory = () => {
	const IOSSwitch = styled((props) => (
		<Switch
			focusVisibleClassName='.Mui-focusVisible'
			disableRipple
			{...props}
		/>
	))(({ theme }) => ({
		width: 45,
		height: 23,
		padding: 0,
		"& .MuiSwitch-switchBase": {
			padding: 0,
			margin: 2,
			transitionDuration: "300ms",
			"&.Mui-checked": {
				marginTop: "2",
				transform: "translateX(21px)",
				color: "#fff",
				"& + .MuiSwitch-track": {
					backgroundColor:
						theme.palette.mode === "dark" ? "#2ECA45" : "#12af1833",
					opacity: 1,
					border: 0,
				},
				"&.Mui-disabled + .MuiSwitch-track": {
					opacity: 0.5,
				},
			},
			"&.Mui-focusVisible .MuiSwitch-thumb": {
				color: "#33cf4d",
				border: "6px solid #fff",
			},
			"&.Mui-disabled .MuiSwitch-thumb": {
				color:
					theme.palette.mode === "light"
						? theme.palette.grey[100]
						: theme.palette.grey[600],
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
			},
		},
		"& .MuiSwitch-thumb": {
			boxSizing: "border-box",
			width: 18,
			height: 18,
			backgroundColor: "#12AF18",
		},
		"& .MuiSwitch-track": {
			borderRadius: 26 / 2,
			backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
			opacity: 1,
			transition: theme.transitions.create(["background-color"], {
				duration: 500,
			}),
		},
	}));

	const [fdata, setFData] = useState([]);

useEffect(() => {
   axios.get("http://167.71.9.83:8080/v1/questions-by-filter").then(data => {
	console.log(data);
	setFData(data.data)
  });
}, []); 

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead sx={{ backgroundColor: "#01384D" }}>
						<TableRow>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
							>
								ID
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Ismi
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Telefon Raqami
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Savollar
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							fdata.map(element => (
                          <TableRow
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									component='th'
									scope='row'
								>
									{element.id}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									{element.fullName}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									{element.phoneNumber}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									{element.text}
								</TableCell>
							</TableRow>
							))
						}
							

					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
