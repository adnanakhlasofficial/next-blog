import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect('/api/auth/login');
  }

  return (
    <div className='container mx-auto text-4xl font-bold py-6 px-8'>
      Welcome to your profile!
    </div>
  );
};

export default Profile;
