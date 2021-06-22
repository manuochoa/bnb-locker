import "./App.css";
import Hero from "./component/hero";
import Tabs from "./component/tabs";
import Locker from "./component/locker";
import { LockerProvider } from "./component/appContext";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  return (
    <LockerProvider>
      {/* hero */}
      <Hero
        auth={authenticate}
        isAuth={isAuthenticated}
        logout={logout}
        userInfo={user}
      />
      {/* hero */}

      {/* tabs */}
      <Tabs />
      {/* tabs */}

      {/* locker details */}
      <Locker />
      {/* locker details */}
    </LockerProvider>
  );
}

export default App;
