import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="card-footer text-muted bg-light gray">
        {/* Eat Healthy | Track Progress | Exercise */}
        <div className="text-center">
          <Link href="/"> &copy;La Santé 2022</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
