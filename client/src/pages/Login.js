import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Footer from '../components/Footer';
import Auth from '../utils/auth';
import BackButton from '../components/Bootstrap/backButton';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const navigate = useNavigate()
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    navigate('/profiles');

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const styles = {
    borderStyle: {
      paddingTop: '15vh',
      borderRadius: '50px',
      paddingRight: '2vw',
    },
    buttonStyle: {
      margin: 'auto',
      cursor: 'pointer',
      fontSize: 'calc(8px + .5vw)',
      display: 'flex',
    },
    goBack: {
      paddingTop: '2vh',
      paddingLeft: '2vw'
    },
    cardStyle: {
      background: 'linear-gradient(20deg, #77b5d9, #d7eaf3, #d7eaf3,#77b5d9)',
    }
  }

  return (
    <div style={styles.goBack}>
       <BackButton />
    <main style={styles.borderStyle} className="flex-row justify-center mb-4">
      <div className="border">
        <div className="card">
          <h4 style={styles.cardStyle} className="card-header bg-custom text-sign-in p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success
              </p>
            ) : (

              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button style={styles.buttonStyle}
                  className="btn btn-light"
                  type="submit"
                >
                  Submit
                </button>
              </form>

            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </div>
  );
};

export default Login;
