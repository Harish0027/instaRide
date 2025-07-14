import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f9f9f9",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      {/* UPPER SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* Logo and Description */}
        <div style={{ flex: "1 1 250px" }}>
          <Image width={118} height={18} src="/logo.svg" alt="footer-logo" />
          <div style={{ marginTop: "1rem", color: "#6B7280", fontSize: "0.9rem" }}>
            <p>instaRide © 2025</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Footer Links Grouped */}
        {[
          {
            title: "About",
            links: ["How it works", "Featured", "Partnership", "Business Relation"],
          },
          {
            title: "Company",
            links: ["Events", "Blogs", "Podcast", "Invite a Friend"],
          },
          {
            title: "Socials",
            links: ["Discord", "Instagram", "Twitter", "Facebook"],
          },
        ].map((section, index) => (
          <div key={index} style={{ flex: "1 1 150px" }}>
            <p style={{ fontWeight: "600", marginBottom: "1rem" }}>{section.title}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {section.links.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                    color: "#4B5563",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* LOWER SECTION */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "1.5rem",
          fontSize: "0.85rem",
          color: "#6B7280",
        }}
      >
        <div>@2025 instaRide. All Rights Reserved.</div>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem" }}>
          <Link href="/policy" style={{ textDecoration: "none", color: "#374151" }}>
            Policy & Privacy
          </Link>
          <Link href="/terms" style={{ textDecoration: "none", color: "#374151" }}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
