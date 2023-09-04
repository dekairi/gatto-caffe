import React from "react";
import BarGallery from "/src/components/blocks/bar-gallery/bar-gallery";
import Buy from "/src/components/blocks/buy/buy";

function BuyPage({ slides, buyOptions }) {
  return (
    <>
      <BarGallery slides={slides} />
      <Buy buyOptions={buyOptions} />
    </>
  );
}

export default BuyPage;
