/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext({});
export function AuthProvider({children}) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    birthday: "",
    gender: "",
    address: "",
    guest: "",
    decision: ""
  });
  const [loading, setLoading] = useState(false);
  // const [token, setToken] = useState<string | undefined>(Cookies.get("token"));

  // const handleLogin = async (values: LoginFormInput) => {
  //   setLoading(true);

  //   login(values)
  //     .then(({ data, status }) => {
  //       if (status === 200) {
  //         Cookies.set("token", data.token, {
  //           expires: addDays(new Date(), 24),
  //         });

  //         setToken(data.token);
  //         setIsAuthenticated(true);

  //         navegation("/");
  //       }
  //     })
  //     .catch(() => {
  //       handleLoggout();
  //     })
  //     .finally(() => setLoading(false));
  // };

  // const handleVerifySession = async () => {
  //   setLoading(true);

  //   whoAmI({ token })
  //     .then(({ data }) => {
  //       setUser(data);

  //       setIsAuthenticated(true);

  //       return;
  //     })
  //     .catch(() => handleLoggout())
  //     .finally(() => setLoading(false));
  // };

  // const handleLoggout = () => {
  //   Cookies.remove("token");
  //   localStorage.clear();

  //   setUser(null);
  //   setToken(undefined);
  //   setIsAuthenticated(false);
  // };

  // useEffect(() => {
  //   if (token) handleVerifySession();
  //   else handleLoggout();
  // }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        //
        user,
        setUser,
        //
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
