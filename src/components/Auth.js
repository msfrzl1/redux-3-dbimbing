import classes from './Auth.module.css';
import { useSelector } from 'react-redux';

const Auth = () => {
   const profile = useSelector((state) => state.profile);
   const { showProfile } = profile;
   console.log(showProfile);

   return (
      <main className={classes.auth}>
         <section>{showProfile}</section>
      </main>
   );
};

export default Auth;
