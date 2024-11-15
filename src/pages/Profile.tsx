import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { Navigate } from 'react-router-dom';

function Profile() {
  const { session } = useAuth();

  const signOutHandler = async () => {
    await supabase.auth.signOut();
  };

  if (!session) return <Navigate to='/' replace/>;

  return (
    <div className='h-[calc(100vh-48px)] w-full flex flex-col items-center justify-center'>
      Profile
      <button
        onClick={signOutHandler}
        className='flex items-center justify-center px-4 py-2 border bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'
      >
        Sign Out
      </button>
    </div>
  );
}

export default Profile;
