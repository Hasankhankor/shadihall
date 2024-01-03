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
import { useContext, useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import destination from "../../app/destination";
import {Spacer} from "@nextui-org/spacer";

let TSEC = "hello";


export default function Navbar() {
	const [emailValids, setemailValid] = useState("");

	const router = useRouter();
	const toast = useToast();

	const SignoutReq = () => {
	  setAuth({ ...auth, isAuth: "" });
	  router.push("/");
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

								<Link href="/chatscreen">
									{" "}
									<Icon color="white" w={25} h={25} />
									<Button
									onClick={() => checkToken()}
									colorScheme="blue"
									transition="box-shadow 0.2s ease-in-out"
									boxShadow="0 0 10px 3px rgba(255, 255, 255, 0.5)"
								>
									List your Halls
								</Button>
								</Link>


								<Link href="/signin">

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
	</Link>
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

					<div
      className={styles.stackBox}
      style={{
        // Add your styles for the Box component here
        // For example:
		marginRight: '100px',
        padding: '2px',
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
          <BsFillBalloonHeartFill className={styles.iconsStyles}  />
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