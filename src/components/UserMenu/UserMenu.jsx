import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {email}</span>
     <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
