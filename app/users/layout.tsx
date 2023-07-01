import { getUser } from "../actions/getUsers";
import SideBar from "../components/sidebar/SideBar";
import UserList from "./components/UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUser();

  return (
    <SideBar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </SideBar>
  );
}
