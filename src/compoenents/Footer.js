import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-violet-700 text-violet-50 text-center py-10">
      <p>&copy: {new Date().getFullYear()} Cler Tech. All rights reserve</p>
    </div>
  );
};

export default Footer;
