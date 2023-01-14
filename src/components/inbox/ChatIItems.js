import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversation/conversationApi";
import ChatItem from "./ChatItem";
import Error from "../ui/Error";
import moment from "moment";
import getPartnerinfo from "../../utils/getPartnerinfo";
import gravatarUrl from 'gravatar-url';

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth) || {};
  const { email } = user || {};
  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(email);

  let content = null;
  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        <Error message={error?.data}></Error>
      </li>
    );
  } else if (!isLoading && !isError & (conversations?.length === 0)) {
    content = <li className="m-2 text-center">No Conversation found</li>;
  } else if (!isLoading && !isError & (conversations?.length > 0)) {
    content = conversations.map((conversation, index) => {
      const { message, id, timestamp,users } = conversation;
      const {name,email:partnerEmail} = getPartnerinfo(users, email);
      
      return (
        <li key={id}>
          <ChatItem
            avatar={gravatarUrl(partnerEmail,{
                size:80
            })}
            name={name}
            lastMessage={message}
            lastTime={moment(timestamp).fromNow()}
          />
        </li>
      );
    });
  }

  return <ul>{content}</ul>;
}
