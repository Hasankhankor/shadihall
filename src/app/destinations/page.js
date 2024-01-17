"use client"
import React, { useState } from 'react';
import Navbar from '../../Components/navbarSection/navbar';
import SearchBox from '../../Components/serachBox/searchBox';
import Footer from '@/Components/Footer';
import { Spacer } from '@nextui-org/spacer';
import Topcard from '@/Components/topcard';
import DownCard from '@/Components/downcard';

function Destination() {
  // Define showMore state and handleShowMore function
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <Navbar />
      <SearchBox />

      <div>
        <h2 style={{ textAlign: 'center', color: 'blue' }}>Top Wedding Halls</h2>
        <Spacer y={10} />
        <Topcard />
        <Spacer y={8} />
        <h2 style={{ textAlign: 'center', color: 'blue' }}>Under budget Wedding Halls</h2>
        <Spacer y={2} />
        <Topcard />
        <Spacer y={8} />
        <h2 style={{ textAlign: 'center', color: 'blue' }}>Wedding Halls</h2>
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

export default Destination;
