import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: 'YouSay',
    email: 'yousay.sd@gmail.com',
    password: '12345',
    password2: '12345'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>

      <h3 className="auth__title mb-4">Register</h3>

      <form onSubmit={ handleRegister }>

        <input 
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />

        <input 
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />

        <input 
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={ password }
          onChange={ handleInputChange }
          />

        <input 
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
          value={ password2 }
          onChange={ handleInputChange }
          />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Register
        </button>

        <Link 
          to="/auth/link"
          className="link"
        >
          Already registered?
        </Link>

      </form>

    </>
  )
}
