"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    console.log("Explore Cars clicked!");
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4rem 2rem",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #ffffff, #f3f3f3)",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ flex: 1, zIndex: 2 }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "1rem",
            lineHeight: "1.2",
            color: "#111827",
          }}
        >
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#6B7280",
            marginBottom: "2rem",
            maxWidth: "500px",
          }}
        >
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          handleClick={handleScroll}
          containerStyles={{
            backgroundColor: "#3563E9",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "500",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        />
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Blue Background Shape */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            backgroundColor: "#3563E9",
            borderRadius: "50%",
            transform: "rotate(45deg)",
            bottom: "0",
            right: "0",
            zIndex: 1,
          }}
        ></div>

        {/* Car Image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        >
          <Image
            src="/hero.png"
            alt="Car"
            fill
            style={{
              objectFit: "contain",
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
