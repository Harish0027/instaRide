"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const handleSignup = () => {};
  return (
    <header
      style={{
        width: "100%",
        position: "absolute",
        zIndex: 10,
        top: 0,
        left: 0,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent", // optional
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Right: Button */}
        <CustomButton
          title="Sign Up"
          handleClick={() => console.log("Sign Up clicked")}
          containerStyles={{
            color: "#3563E9", // text-primary-blue
            backgroundColor: "#fff", // bg-white
            borderRadius: "9999px", // rounded-full
            minWidth: "130px", // min-w-[130px]
            padding: "0.5rem 1.5rem",
            fontSize: "1rem",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        />
      </nav>
    </header>
  );
};

export default Navbar;
