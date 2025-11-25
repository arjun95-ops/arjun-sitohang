'use client';
import { useState } from 'react';
import { useAdmin } from '@/context/admin-context';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login } = useAdmin();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      router.push('/admin/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 rounded-2xl text-center">
        <Lock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter Password (admin123)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-pink-500 outline-none"
          />
          {error && <p className="text-red-500 text-sm">Wrong password</p>}
          <button type="submit" className="w-full p-3 bg-pink-600 rounded-lg text-white font-bold hover:bg-pink-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}