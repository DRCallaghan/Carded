import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_PHONE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const PhoneList = ({ phoneNumber, isLoggedInUser = false }) => {
  const [removePhone, { error }] = useMutation(REMOVE_PHONE, {
    update(cache, { data: { removePhone } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removePhone },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemovePhone = async (phone) => {
    try {
      const { data } = await removePhone({
        variables: { phone },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!phoneNumber.length) {
    return <h3>No Phone Number Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {phoneNumber &&
          phoneNumber.map((phone) => (
            <div key={phone} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{phone}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemovePhone(phone)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default PhoneList;
