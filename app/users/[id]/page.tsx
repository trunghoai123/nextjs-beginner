import { getAllUsers, getUser } from "@/lib/API";
import { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: number;
  };
};

export const generateMetadata = async ({
  params: { id },
}: Params): Promise<Metadata> => {
  const user: User = await getUser(id);
  if (!user) return notFound();
  return {
    title: `User ${id}`,
    description: `User ${user.name} page`,
  };
};

const UserPage = ({ params }: Params) => {
  if (!params.id) return notFound();
  return (
    <div>
      <h1>user page</h1>
      <p>user page content</p>
    </div>
  );
};

export async function generateStaticParams() {
  const users: User[] = await getAllUsers();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
export default UserPage;
