import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';
import { UserContextProvider } from './context/UserContext';
// a provider is a component that will provide information to all its children
// we wrap our app with the provider so all the components inside can access the context
// we usually do this at the top level of our app
export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  );
};
