import React from 'react'
import '../styles/Socials.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { useState } from 'react';


function Socials() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "uguremirazi@gmail.com"; // Kendi e-posta adresini buraya yaz
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2 saniye sonra mesajı gizle
      })
      .catch((err) => console.error('Failed to copy email: ', err));
  };
  return (
    <div className='cardSocials'>
      <a href="https://github.com/ugurazi" target="_blank" rel="noopener noreferrer">
        <FaGithub className='icon' />
      </a>
      <a href="https://www.linkedin.com/in/uguremirazi/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='icon' />
      </a>
      <a href="https://instagram.com/ugurzi" target="_blank" rel="noopener noreferrer">
        <FaSquareInstagram className='icon' />
      </a>
      <button onClick={handleCopyEmail} className="iconButton">
        <SiGmail className='icon' />
      </button>

      {copied && <div className="notification">Email address copied!</div>}

    </div>
  )
}

export default Socials
