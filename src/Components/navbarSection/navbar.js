import styles from "./navbar.module.css";
import Link from "next/link";
import { Icon } from "@chakra-ui/icons";
import jwt from "jsonwebtoken";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaRocketchat } from "react-icons/fa6";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
import { useContext, useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import destination from "../../app/destination";
import {Spacer} from "@nextui-org/spacer";
import { HiLogin } from "react-icons/hi";
import { VStack } from "@chakra-ui/react";
let TSEC = "hello";


export default function Navbar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const openDrawer = () => setIsDrawerOpen(true);
const closeDrawer = () => setIsDrawerOpen(false);
	const [emailValids, setemailValid] = useState(false);

	const router = useRouter();
	const toast = useToast();

	const SignoutReq = () => {
	 localStorage.removeItem("email")
	//   router.push("/");
	window.location.reload();
	};

	const checkToken = () => {
	  // ... (your existing checkToken logic)
	};

	useEffect(() => {
	  const emailValid = localStorage.getItem("email");
	  setemailValid(emailValid);
	}, []);


	return (
		<>
			{/* <Box className={styles.dNav} ><DraverNav/></Box> */}
 {/* Button to open drawer */}

			<Box
				// border="1px solid black"
				w="100%"
				color="white"
				height="auto"
				bg="#041c4c"
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

<iv style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
<Box display={{ base: "block", md: "none" }} zIndex="overlay">
            <IconButton
                icon={<HamburgerIcon />}
                onClick={openDrawer}
                variant="outline"
                aria-label="Open menu"
				color="white"
            />
        </Box>

        {/* Drawer component */}
        <Drawer isOpen={isDrawerOpen} placement="left" onClose={closeDrawer}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
                <DrawerBody>
                    <VStack>
                        {/* Add navigation links here */}
                        <Link href="/">Home</Link>
                        <Link href="/Weddinglisthall">Wedding Halls</Link>
                        <Link href="/bridelcars">Bridal Cars</Link>
                        <Link href="/destinations">Destination</Link>
						<Link href="/signin">Sign in</Link>
              <Link href="/signup">Register</Link>
              <Link href="/list-your-halls">List your Halls</Link>
                        {/* Add other links as needed */}
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
</iv>

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
										marginTop="-5px"
									/>
								</Link>

								<Link href="/register">
									{" "}
									<Button
										onClick={() => checkToken()}
										colorScheme="blue"
										transition="box-shadow 0.2s ease-in-out"
										boxShadow="0 0 10px 3px rgba(255, 255, 255, 0.5)"
									>
										List your Halls
									</Button>
								</Link>
								<Spacer y={10} />

								{/* <Link href="/signin">

        <button
          style={{
			backgroundColor: 'white',
			color: 'blue',
			padding: '10px 20px',
			border: '1px solid blue',
			borderRadius: '25px',
			cursor: 'pointer',
          }}
        >
          Log In
        </button>

    </Link>
	<Link href="/register">
	<button
      style={{
        backgroundColor: 'white',
        color: 'blue',
        padding: '10px 20px',
        border: '1px solid blue',
        borderRadius: '25px',
        cursor: 'pointer',
      }}
    >
      Register
    </button>
	</Link> */}
								{emailValids ? (
									<>
										<Button
											onClick={() => SignoutReq()}
											style={{
												backgroundColor: "white",
												color: "blue",
												padding: "10px 20px",
												border: "1px solid blue",
												borderRadius: "25px",
												cursor: "pointer",
											}}
										>
											Sign out
										</Button>

										<Link href="/userpandeditprofile">
										<Avatar bg="yellow.400" />

										<Link href="/chatscreen">
  <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png" />
</Link>

										</Link>



									</>
								) : (
									<>
										<Link href="/signup">
											<Button
												style={{
													backgroundColor: "white",
      color: "blue",
      padding: "10px 20px",
      border: "1px solid blue",
      borderRadius: "25px",
      cursor: "pointer",
      colorScheme: "blue", // Added colorScheme property
      transition: "box-shadow 0.2s ease-in-out", // Added transition property
      boxShadow: "0 0 10px 3px rgba(255, 255, 255, 0.5)",
												}}
											>
												<CiUser />
												Register
											</Button>
										</Link>


										<Link href="/signin" className={styles.authLink}>
										<Button
    style={{
		backgroundColor: "white",
		color: "blue",
		padding: "10px 20px",
		border: "1px solid blue",
		borderRadius: "25px",
		cursor: "pointer",
		// Added transition property
		boxShadow: "0 0 10px 3px rgba(255, 255, 255, 0.5)",
		transitionProperty: "all",
		transitionDuration: "0.16s",
		transitionTimingFunction: "ease",
    }}
  >
   <HiLogin />
    Sign in
  </Button>
</Link>							</>
								)}
							</HStack>
						</Box>
						<Box className={styles.smallScreen}>{/* <DraverNav /> */}</Box>
					</Box>

					<div
						className={styles.stackBox}
						style={{
							// Add your styles for the Box component here
							// For example:
							marginRight: "100px",
							padding: "2px",
							// Add more styles as needed
						}}
					>
						<HStack spacing="2px">
							<Link href="/" className={styles.navRow2One}>
								<Flex align="center">
									<IoBedOutline className={styles.iconsStyles1} />
									<Spacer x={2} />
									Home
								</Flex>
							</Link>
							<Spacer x={9} />
							<Link href="/Weddinglisthall" className={styles.navRow2}>
								<BsFillBalloonHeartFill className={styles.iconsStyles} />
								<Spacer x={2} />
								Wedding Halls
							</Link>
							<Spacer x={9} />
							<Link href="/bridelcars" className={styles.navRow2}>
								<IoCarSportOutline className={styles.iconsStyles} />
								<Spacer x={2} />
								Bridal Cars
							</Link>
							<Spacer x={9} />
							<Link href="/destinations" className={styles.navRow2}>
								<IoFlowerOutline className={styles.iconsStyles} />
								<Spacer x={2} />
								Destination
							</Link>
						</HStack>
					</div>
				</Box>
			</Box>
		</>
	);
}