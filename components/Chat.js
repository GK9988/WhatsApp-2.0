import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import getRecipientEmail from "../utils/getRecipientEmail";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/dist/client/router";

const Chat = ({ id, users }) => {

  const router = useRouter()

  const enterChat = () => {
    router.push(`/chat/${id}`)
  }

  const [user] = useAuthState(auth);
  // console.log(users);

  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const recipientEmail = getRecipientEmail(users, user);
  // console.log(recipientEmail[0]);

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  // console.log(recipient);

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL}> </UserAvatar>
      ) : (
        <UserAvatar src={recipientEmail[0]}></UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
