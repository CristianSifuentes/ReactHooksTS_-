import { useContext, useState } from 'react';
import { UserContext } from '@/09-useContext/context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = login(+userId);

    if (!result) {
      toast.error('User not found with id ' + userId);
      return;
    }

    navigation('/profile');
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10" onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <Button type="submit">Login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost">Back to main page</Button>
      </Link>
    </div>
  );
};
