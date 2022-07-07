import React from "react";

const Footer = () => {
  return (
    <footer className='bg-brand-blue'>
      <div className='container mx-auto flex flex-row gap-16 justify-start text-white py-20'>
        <ul className='text-left'>
          <h3 className='text-2xl mb-2'>Pressure Precision</h3>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Areas Covered</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Free Quotation</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <ul className='text-left'>
          <h3 className='text-2xl mb-2'>Find Out More</h3>
          <li>
            <a>Useful Information</a>
          </li>
          <li>
            <a>Driveways from £2.50 a SQM</a>
          </li>
          <li>
            <a>Patios & Deckings from £2.50 SQM</a>
          </li>
          <li>
            <a>Fascia’s & Soffits</a>
          </li>
          <li>
            <a>Dress, Sand & Seal from £1 a SQM</a>
          </li>
          <li>
            <a>Walls & Fences from £2 a SQM</a>
          </li>
          <li>
            <a>Areas Covered</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
