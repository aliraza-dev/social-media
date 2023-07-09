import getConversations from "../actions/getConversations";
import { getUser } from "../actions/getUsers";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUser();

  return (
    <SideBar>
      <div className="h-full">
        <ConversationList initialItems={conversations} users={users} />
        {children}
      </div>
    </SideBar>
  );
}
