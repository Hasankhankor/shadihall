import React from "react";
import styles from './Hero2SVG.module.css';
import { useState } from "react";
const HennaArtistsLink = () => {
	const containerStyles = {
		display: "flex",
		justifyContent: "center",
		maxWidth: "100%",
		padding: "0 20px", // Add padding for better responsiveness

		// Media query for smaller screens
		'@media (max-width: 768px)': {
		  flexDirection: "column", // Change flex direction for smaller screens
		  alignItems: "center", // Center items when in column layout
		},

	  };
	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);
	const [isHovered4, setIsHovered4] = useState(false);
	const linkStyles = {
		border: "1px solid",
		borderColor: "#d9dde0",
		borderRadius: "16px",
		height: "166px",
		position: "relative",
		width: "151px",
		textAlign: "center",
		margin: "0 10px",
		transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
		// Change background color on hover
		backgroundColor: isHovered1 ? "white" : "initial",
		backgroundColor: isHovered2 ? "white" : "initial",

	};
	const hoverStyles = {
		transform: "scale(1.05)",

		boxShadow: "0 0 10px 3px rgba(0, 0, 255, 0.5)",
	};

	const logoStyles = {
		height: "28px",
		left: "49px",
		position: "absolute",
		top: "39px",
		width: "48px",
	};

	const textWrapperStyles = {
		color: "#6b7983",
		fontFamily: "Poppins-Regular, Helvetica",
		fontSize: "19px",
		fontWeight: "500",
		height: "18px",
		left: "19px",
		letterSpacing: "0",
		lineHeight: "18px",
		position: "absolute",
		textAlign: "center",
		top: "94px",
		whiteSpace: "nowrap",
		width: "88px",
		marginTop: "10px",
	};

	const handleMouseEnter1 = () => {
		setIsHovered1(true);
	};

	const handleMouseLeave1 = () => {
		setIsHovered1(false);
	};

	const handleMouseEnter2 = () => {
		setIsHovered2(true);
	};

	const handleMouseLeave2 = () => {
		setIsHovered2(false);
	};

	const handleMouseEnter3 = () => {
		setIsHovered3(true);
	};

	const handleMouseLeave3 = () => {
		setIsHovered3(false);
	};

	const handleMouseEnter4 = () => {
		setIsHovered4(true);
	};

	const handleMouseLeave4 = () => {
		setIsHovered4(false);
	};

	return (
		<>
			<div className={styles.container}>
				<a
					href="/your-link-destination-1"
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<div
						style={{ ...linkStyles, ...(isHovered1 ? hoverStyles : {}) }}
						className="link"
						onMouseEnter={handleMouseEnter1}
						onMouseLeave={handleMouseLeave1}
					>
						<img
							style={{ ...logoStyles, width: "30%", height: "30%" }}
							className="logo-henna-artists"
							alt="Logo henna artists"
							src="https://mirpurapartments.com/wp-content/uploads/2021/03/Weddinh-Hasll.png"
						/>
						<div style={textWrapperStyles} className="text-wrapper">
							Wedding Halls
						</div>
					</div>
				</a>
				<div
					style={{ ...linkStyles, ...(isHovered2 ? hoverStyles : {}) }}
					className="link"
					onMouseEnter={handleMouseEnter2}
					onMouseLeave={handleMouseLeave2}
				>
					<img
						style={{ ...logoStyles, width: "30%", height: "30%" }}
						className="logo-henna-artists"
						alt="Logo henna artists"
						src="https://www.shutterstock.com/image-vector/pin-point-logo-can-be-600nw-1679653036.jpg"
					/>
					<div style={textWrapperStyles} className="text-wrapper">
						Destinations
					</div>
				</div>
				<div
					style={{ ...linkStyles, ...(isHovered3 ? hoverStyles : {}) }}
					className="link"
					onMouseEnter={handleMouseEnter3}
					onMouseLeave={handleMouseLeave3}
				>
					<img
						style={{ ...logoStyles, width: "30%", height: "30%" }}
						className="logo-henna-artists"
						alt="Logo henna artists"
						width={"30%"}
						src="https://cdn-icons-png.flaticon.com/512/7677/7677407.png"
					/>
					<div style={textWrapperStyles} className="text-wrapper">
						Bridal Cars
					</div>
				</div>
				<div
					style={{ ...linkStyles, ...(isHovered4 ? hoverStyles : {}) }}
					className="link"
					onMouseEnter={handleMouseEnter4}
					onMouseLeave={handleMouseLeave4}
				>
					<img
						style={{ ...logoStyles, width: "30%", height: "30%" }}
						className="logo-henna-artists"
						alt="Logo henna artists"
						src="https://cdn-icons-png.flaticon.com/512/3845/3845599.png"
					/>
					<div style={textWrapperStyles} className="text-wrapper">
						Henna Artists
					</div>
				</div>
			</div>
		</>
	);
};

export default HennaArtistsLink;
