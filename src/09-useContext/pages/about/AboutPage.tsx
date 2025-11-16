import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { use } from 'react';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';


export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext);

  // useConext for reading context values
  // const { isAuthenticated, logout } = useContext(UserContext);
  // use is used in server components to read context values
  // const { isAuthenticated, logout } = use(UserContext);
  // use is more flexible and can be used in both server and client components

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">About Me</h1>
      <hr />

      <div className="flex flex-col gap-2">
        {/* User profile if authenticated */}
        {isAuthenticated && (
          <Link
            to="/profile"
            className="hover:text-blue-500 underline text-2xl"
          >
            Perfil
          </Link>
        )}

        {/* Login logout */}
        {isAuthenticated ? (
          <Button variant="destructive" className="mt-4" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Link to="/login" className="hover:text-blue-500 underline text-2xl">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
