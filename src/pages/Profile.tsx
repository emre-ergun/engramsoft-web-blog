import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { Navigate } from 'react-router-dom';

function Profile() {
  const { session } = useAuth();

  const signOutHandler = async () => {
    await supabase.auth.signOut();
  };

  if (!session) return <Navigate to='/' replace />;

  return (
    <div className='h-[calc(100vh-48px)] w-full flex flex-col items-center justify-center'>
      Profile
      <button
        onClick={signOutHandler}
        className='flex items-center justify-center gap-2 h-[2rem] px-4 bg-secondary text-fourth outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-third active:scale-105 disabled:scale-100 disabled:bg-opacity-65'
      >
        Sign Out
      </button>
    </div>
  );
}

export default Profile;
