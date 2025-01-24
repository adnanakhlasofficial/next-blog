import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();

  console.log('[user]', user);
  console.log('[isAuthentication', isUserAuthenticated);

  if (!user || !isUserAuthenticated) {
    redirect('/api/auth/login');
  }

  return (
    <div className='container mx-auto text-4xl font-bold py-6 px-8'>
      Welcome to your profile!!
    </div>
  );
};

export default Profile;
