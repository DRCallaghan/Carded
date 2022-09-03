import React from 'react';

const Teams = ({ teams, name }) => {
    if (!teams.length) {
      return <h3>No teams yet</h3>;
    }
  
    return (
      <div>
        <h3>{name}</h3>
        {teams &&
          teams.map((teams) => (
            <div key={teams._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {teams.name} <br />
                <span style={{ fontSize: '1rem' }}>
                 address is  {teams.address}
                </span>
              </h4>
              <div className="card-body bg-light p-2">
                <p>{teams.website}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Teams;