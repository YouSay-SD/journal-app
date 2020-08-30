
import React from 'react';
import picture from './placeholder.jpg';

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${ picture })`,
          backgroundPosition: 'center'
        }}
      >
      </div>

      <div className="journal__entry-content">

        <div className="journal__entry-body">

          <h2 className="journal__entry-title">Un Nuevo Dia</h2>

          <p className="journal__entry-copy">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>

        </div>

        <div className="journal__entry-date-box">

          <span>Monday</span>

          <h3>28</h3>

        </div>

      </div>

    </div> 
  )
}
