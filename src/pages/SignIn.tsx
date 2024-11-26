import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

function SignIn() {
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { session, loading } = useAuth();

  async function signInWithPassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoadingSignIn(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
    }

    setLoadingSignIn(false);
  }
  if (loading) return;
  if (session) return <Navigate replace to='/'/>;

  return (
    <div className='h-[calc(100vh-128px)] w-full flex flex-col items-center justify-center'>
      <form className='mt-10 flex flex-col gap-4' onSubmit={signInWithPassword}>
        <div className='flex flex-col items-start'>
          <h1>Email:</h1>
          <input
            className='h-[2rem] px-4 border border-secondary focus:outline-secondary'
            name='senderEmail'
            type='email'
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
            maxLength={50}
            placeholder='Email'
          />
        </div>
        <div className='flex flex-col items-start'>
          <h1>Password:</h1>
          <input
            className='h-[2rem] px-4 border border-secondary focus:outline-secondary'
            name='senderEmail'
            type='password'
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            maxLength={50}
            placeholder='Password'
          />
        </div>

        <button
          type='submit'
          className='flex items-center justify-center gap-2 h-[2rem] w-full bg-secondary text-fourth outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-third active:scale-105 disabled:scale-100 disabled:bg-opacity-65'
          disabled={loadingSignIn}
        >
          {loadingSignIn ? (
            <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
          ) : (
            <>Sign In</>
          )}
        </button>
      </form>
      <div>
        <a href='/sign-up' className='text-sm text-secondary'>
          I don't have an account. <span className='underline'>Sign Up</span>
        </a>
      </div>
    </div>
  );
}

export default SignIn;
