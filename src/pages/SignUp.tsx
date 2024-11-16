import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { session } = useAuth();

  async function signUpWithEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  if (session) return <Navigate replace to='/' />;

  return (
    <div className='h-[calc(100vh-128px)] w-full flex flex-col items-center justify-center'>
      <form className='mt-10 flex flex-col gap-4' onSubmit={signUpWithEmail}>
        <div className='flex flex-col items-start'>
          <h1>Email:</h1>
          <input
            className='h-[2rem] px-4 border border-secondary'
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
            className='h-[2rem] px-4 border border-secondary'
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
          disabled={loading}
        >
          {loading ? (
            <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
          ) : (
            <>Sign Up</>
          )}
        </button>
      </form>
      <div>
        <a href='/sign-in' className='text-sm text-secondary'>
          I have an account. <span className='underline'>Sign In</span>
        </a>
      </div>
    </div>
  );
}

export default SignUp;
