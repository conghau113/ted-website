import React from 'react';
import LoginForm from '~/components/LoginForm';
import ParticleBackground from '~/components/ParticleBackground';
import './styles.scss';

function Login(props) {
  return (
    <div id="container" className="bg-black-blue d-flex justify-content-center align-items-center">
      <LoginForm />
      <ParticleBackground />
    </div>
  );
}

export default Login;
