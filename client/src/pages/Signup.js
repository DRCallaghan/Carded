import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import BackButton from '../components/Bootstrap/backButton';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirm: ''
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
    if (formState.password !== formState.confirm) {
      alert("Passwords don't match.");
      return;
    }

    navigate('/profiles');

    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  const styles = {
    borderStyle: {
      paddingTop: '5vh',
      borderRadius: '50px',
      paddingRight: '2vw',
    },
    buttonStyle: {
      margin: 'auto',
      cursor: 'pointer',
      fontSize: 'calc(8px + .5vw)',
      display: 'flex'
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
    <div style={styles.goBack} className='backBtn'>

      <BackButton />
      <main style={styles.borderStyle} className="flex-row justify-center mb-4">
        <div className="">
          <div className="card">
            <h4 style={styles.cardStyle} className="card-header bg-custom text-sign-in p-2">Sign Up</h4>
            <div className="card-body">
              {data ? ( <p> Success! </p> ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your Full Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your Business Phone Number"
                    name="phoneNumber"
                    type="text"
                    value={formState.phoneNumber}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your Position"
                    name="position"
                    type="text"
                    value={formState.position}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Enter Password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Confirm Password"
                    name="confirm"
                    type="password"
                    value={formState.confirm}
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

export default Signup;
