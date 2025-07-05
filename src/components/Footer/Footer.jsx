import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapLocationDot,
} from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

// Links array
const FooterLinks = [
  { title: 'Home', link: '/#' },
  { title: 'About', link: '/#about' },
  { title: 'Contact', link: '/#contact' },
  { title: 'Blog', link: '/#blog' },
];

const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
      <div className='container'>
        <div data-aos='zoom-in' className='grid md:grid-cols-3 pb-30 pt-5'>

          {/* Brand Section */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-2'>
              <FiShoppingBag size={30} />
              ShopMe
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores delectus error accusamus excepturi temporibus molestias facere hic, et enim minus placeat corrupti labore! Adipisci dolores ipsum ex blanditiis facilis pariatur ipsa.
            </p>
          </div>

          {/* Important Links */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
              Important Links
            </h1>
            <ul className='flex flex-col gap-3'>
              {FooterLinks.map((link) => (
                <li
                  className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                  key={link.title}
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social Section */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
              Connect with Us
            </h1>

            <div className='flex items-center gap-3 mb-4'>
              <FaMapLocationDot />
              <p>Jaunpur, Uttar Pradesh</p>
            </div>
            <div className='flex items-center gap-3 mb-6'>
              <IoCall />
              <p>+91 1231231239</p>
            </div>

            <div className='flex items-center gap-3'>
              <a href='#'>
                <FaInstagram className='text-3xl' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-3xl' />
              </a>
              <a href='#'>
                <FaFacebook className='text-3xl' />
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className=' w-full flex   justify-center items-center pb-3 '>
        <div className=' w-full border-t-[1px] border-gray-300 px-0 pt-2 text-center md:px-80'>
               © 2025 ShopMe. All Rights Reserved
        </div>
         
      </div>
    </div>
  );
};

export default Footer;