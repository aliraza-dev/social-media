"use client";

import { signOut } from "next-auth/react";

const Users: React.FC = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export default Users;
