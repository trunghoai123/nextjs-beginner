import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href={"/"}>Go to home</Link>
    </div>
  );
};

export default page;
