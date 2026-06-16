import React from 'react';
import AuthBanner from '../../Components/AuthBanner/AuthBanner';
import LoginForm from '../../Components/LoginForm/LoginForm';

function LoginPage(): React.ReactNode {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6 bg-background">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <AuthBanner />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
