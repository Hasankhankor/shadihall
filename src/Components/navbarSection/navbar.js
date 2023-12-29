import styles from "./navbar.module.css";
import Link from "next/link";
import { Icon } from "@chakra-ui/icons";
import jwt from "jsonwebtoken";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import {
	IoAirplaneOutline,
	IoBedOutline,
	IoCarOutline,
	IoCarSportOutline,
	IoFlowerOutline,
} from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import {
	Avatar,
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Image,
	useToast,
} from "@chakra-ui/react";
// import DraverNav from "./draverNav";
import  AuthContext  from "../../context/AuthContextProvider";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import destination from "../../app/destination";

let TSEC = "hello";

 function Navbarr() {
	const toast = useToast();
	// const { auth, setAuth } = useContext("");
	const router = useRouter();

	const SignoutReq = () => {
		setAuth({ ...auth, isAuth: "" });
		router.push("/");
	};

	const checkToken = () => {
		if (!auth.isAuth) {
			return router.push("/signin");
		} else {
			const check = jwt.verify(auth.isAuth.token, TSEC, (err, verified) => {
				if (err) {
					console.log(err);
					toast({
						title: "Sessioned timed out!",
						description: "Please relogin.",
						status: "error",
						duration: 3400,
						isClosable: true,
						position: "top",
					});
					return router.push("/signin");
				} else {
					if (verified.role === "dealer") {
						console.log(verified.role);
						return router.push("/listproperty");
					} else {
						router.push("/");
						toast({
							title: "You're not a Hall lister.",
							description: "Please login as a Hall lister",
							status: "warning",
							duration: 3400,
							isClosable: true,
							position: "top",
						});
					}
				}
			});
		}
	};

	return (
		<>
			{/* <Box className={styles.dNav} ><DraverNav/></Box> */}

			<Box
				// border="1px solid black"
				w="100%"
				color="white"
				height="auto"
				bg="#003580"
			>
				<Box
					// border="3px solid green"
					w="90%"
					color="#262626"
					margin="auto"
					p={4}
					className={styles.smallScreenBox}
				>
					<Box display="flex" justifyContent="space-between">
						<Link href="/">
							<Box
								// border="2px solid green"
								className={styles.logosize}
							>
								<text
									style={{
										color: "white",
										fontWeight: "bold",
										fontSize: "36px",
									}}
								>
									Shadihall.com
								</text>
								{/* <img
                  src={"/" + "applogo.png"}
                  // border="2px solid red"
                  width="200px"
                  height="50px"
                  alt="logo"
                /> */}
							</Box>
						</Link>

						<Box className={styles.stackBox}>
							<HStack spacing={["15px", "12px"]}>
								<Box>
									<Link href="#" className={styles.imgLink}>
										PKR
									</Link>
								</Box>

								<Link href="#">
									<Image
										borderRadius="50%"
										background="none"
										width={25}
										height={25}
										src={
											"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of_Pakistan.svg.png"
										}
										alt="Pakistan Flag"
										marginTop="4px"
									/>
								</Link>

								<Link href="#">
									{" "}
									<Icon color="white" w={25} h={25} />
								</Link>

								<Button
									onClick={() => checkToken()}
									colorScheme="blue"
									transition="box-shadow 0.2s ease-in-out"
									boxShadow="0 0 10px 3px rgba(255, 255, 255, 0.5)"
								>
									List your Halls
								</Button>

								{/* {auth.isAuth ? (
									<>
										<Button
											onClick={() => SignoutReq()}
											className={styles.authLink}
										>
											Sign out
										</Button>
										<Avatar bg="yellow.400" name={auth.isReg.name} />
									</>
								) : (
									<>
										<Link href="/signup" className={styles.authLink}>
											<Button className={styles.authLink}>Register</Button>
										</Link>

										<Link href="/signin" className={styles.authLink}>
											<Button className={styles.authLink}>Sign in</Button>
										</Link>
									</>
								)} */}
							</HStack>
						</Box>
						<Box className={styles.smallScreen}>
							{/* <DraverNav /> */}
						</Box>
					</Box>

					<Box
						// border="2px solid black"
						className={styles.stackBox}
					>
						<HStack spacing="25px">
							<Link href="/" className={styles.navRow2One}>
								<IoBedOutline className={styles.iconsStyles1} />
								Home
							</Link>

							<Link href="/flights" className={styles.navRow2}>
								<BsFillBalloonHeartFill className={styles.iconsStyles} />
								Wedding Halls
							</Link>

							<Link href="/carrental" className={styles.navRow2}>
								<IoCarSportOutline className={styles.iconsStyles} />
								Bridal Cars
							</Link>

							<Link href="/destination" className={styles.navRow2}>
								<IoFlowerOutline className={styles.iconsStyles} />
								Destination
							</Link>
						</HStack>
					</Box>
				</Box>
			</Box>
		</>
	);
}


export default Navbarr