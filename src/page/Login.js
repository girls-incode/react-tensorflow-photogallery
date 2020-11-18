import React, { useState } from 'react';
import firebase from '../config/firebase';
import { Redirect } from 'react-router-dom';

function Login() {
  const cStyle = 'w-full p-2 rounded shadow';
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({ email: '', pass: '' });
  // const emailRef = useRef(null);
  // const passRef = useRef(null);

  function handleForm(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    // console.log(emailRef.current.value, passRef.current.value);
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.pass)
      .then((res) => {
        setLoading(false);
        setErrors([]);
        setIsLogged(true);
      })
      .catch((err) => {
        // console.log(err.code, err.message);
        setLoading(false);
        setErrors(err.message);
      });
  }

  function handleField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (isLogged) return <Redirect to='/' />;

  return (
    <div className='w-2/5 m-auto shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-800'>
      <form className='p-5' onSubmit={handleForm}>
        <h1 className='text-3xl text-center text-white pb-6'>Sign in</h1>
        <input
          type='email'
          // ref={emailRef}
          name='email'
          value={form.email}
          onChange={handleField}
          className={` ${cStyle} mb-3`}
          placeholder='email'
        />
        <input
          // ref={passRef}
          type='password'
          name='pass'
          value={form.pass}
          onChange={handleField}
          className={`${cStyle} mb-8`}
          placeholder='password'
        />
        <button
          type='submit'
          className={`${cStyle} bg-gradient-to-tr from-yellow-600 to-yellow-500 text-black font-bold`}
        >
          {loading ? <i className='fas fa-circle-notch fa-spin'></i> : 'Login'}
        </button>
        {errors.length > 0 && <p className='mt-4 text-white'>{errors}</p>}
      </form>
    </div>
  );
}

export default Login;
