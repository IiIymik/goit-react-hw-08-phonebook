import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import { Container, Img, Text, Span ,Button} from './UserMenu.styled.js';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const avatar = defaultAvatar;

  return (
    <Container >
      <Img src={avatar} alt="avatar"/>
      <Text> Welcome, <Span>{email}</Span></Text>
     <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Container>
  );
}
