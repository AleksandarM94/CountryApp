import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Brightness2, Brightness7 } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Navigation = ({ themeMode, lightMode, darkMode }) => (
	<>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				{" "}
				<Link to="/">
					<img
						style={{ width: 60, height: 60 }}
						src="https://image.flaticon.com/icons/png/512/44/44386.png"
						alt="logo"
					></img>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/countries">All Countries</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
				<Nav.Link className="moon">
					{themeMode === "light" ? (
						<IconButton color="inherit" onClick={darkMode}>
							<Brightness2 style={{ color: "rgb(170, 111, 1)" }} />
						</IconButton>
					) : (
						<IconButton color="inherit" onClick={lightMode}>
							<Brightness7 style={{ color: "yellow" }} />
						</IconButton>
					)}
				</Nav.Link>
			</Navbar.Collapse>
		</Navbar>
	</>
);
export default Navigation;
