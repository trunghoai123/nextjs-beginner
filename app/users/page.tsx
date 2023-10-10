import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getAllUsers } from "@/lib/API";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <div>
      <h1>Users Page</h1>
      <Link href={"/"}>Home</Link>
      <ul>
        {users.map((user) => {
          return (
            <Link href={`/users/${user.id}`} key={user.id}>
              {user.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
