import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

const sublinks = [
  {
    page: "products",
    links: [
      { label: "platinum", url: "/platinum" },
      { label: "bonalux", url: "/bonalux" },
      { label: "otex", url: "/otex" },
      { label: "others", url: "/others" },
    ],
  },
  {
    page: "accessories",
    links: [{ label: "painting accessories", url: "/painting" }],
  },
  {
    page: "about",
  },
  {
    page: "contact",
  },
];

export default sublinks;

export const social = [
  {
    id: 1,
    url: "https://web.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];

export const platinumProducts = [
  { stuco: "Stuco", price: "N 1,000", id: 1 },
  { stuco: "Stuco", price: "N 1,000", id: 2 },
  { stuco: "Stuco", price: "N 1,000", id: 3 },
  { stuco: "Stuco", price: "N 1,000", id: 4 },
  { stuco: "Stuco", price: "N 1,000", id: 5 },
  { stuco: "Stuco", price: "N 1,000", id: 6 },
];
