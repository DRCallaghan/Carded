import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PHONE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const PhoneForm = ({ profileId }) => {
  const [phone, setPhone] = useState('');

  const [addPhone, { error }] = useMutation(ADD_PHONE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addPhone({
        variables: { profileId, phone },
      });

      setPhone('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Endorse some more phones below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Endorse some phones..."
              value={phone}
              className="form-input w-100"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Endorse phone
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to endorse phones. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PhoneForm;
