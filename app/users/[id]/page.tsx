import { getUser } from "@/lib/API";
import { Metadata } from "next";
import React from "react";

type Params = {
  params: {
    id: number;
  };
};

export const generateMetadata = async ({
  params: { id },
}: Params): Promise<Metadata> => {
  console.log(id);
  const user: User = await getUser(id);
  return {
    title: `User ${id}`,
    description: `User ${user.name} page`,
  };
};

const UserPage = ({ params }: Params) => {
  return (
    <div>
      <h1>user page</h1>
      <p>user page content</p>
    </div>
  );
};

export default UserPage;
