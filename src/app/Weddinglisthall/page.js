"use client"
import React, { useState } from 'react';
import Navbarr from "../../Components/navbarSection/navbar";
import SearchBox from "../../Components/serachBox/searchBox";

import { Rating, RatingStar } from "flowbite-react";
import { Spacer } from "@nextui-org/spacer";
import Footer from "@/Components/Footer";
import Topcard from "@/Components/topcard";
import DownCard from "@/Components/downcard";
function flights() {
	const stay = [];
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
	  setShowMore(true);
	};
	const cardHoverStyle = {
		transition: "transform 0.2s ease-in-out",
		"&:hover": {
			transform: "scale(1.19)",
		},
	};

	return (
		<>
		<Navbarr />
		    <div>
      <h2 style={{ textAlign: "center", color: "blue" }}>Top Wedding Halls</h2>
      <Spacer y={10} />
      <Topcard />
	  <Spacer y={8} />
      <h2 style={{ textAlign: "center", color: "blue" }}>Under budget Wedding Halls</h2>
      <Spacer y={2} />
      <Topcard />
	  <Spacer y={8} />
      <h2 style={{ textAlign: "center", color: "blue" }}>Wedding Halls</h2>
      <Spacer y={2} />


      {showMore && (
        <>

          <Topcard />
          <DownCard />

        </>
      )}
 <Spacer y={5} />
      {!showMore && (
        <div style={{ textAlign: 'center', cursor: 'pointer', color: 'blue' }} onClick={handleShowMore}>
          View More
        </div>
      )}
    </div>
	<Spacer y={5} />
	<Footer />
		</>
	);
}

export default flights;

