import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="card-footer text-muted bg-light gray">
        <Link href="/">
          <div className="text-center">&copy;La Santé 2022</div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
