import React from 'react';
import moment from 'moment';
import picture from './placeholder.jpg';

export const JournalEntry = ({ id, date, title, body, url }) => {

  const noteDate = moment( date );
s
  return (
    <div className="journal__entry">
      
      {

        picture &&
        
        <div 
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${ picture })`,
            backgroundPosition: 'center'
          }}
        >
        </div>
      
      }

      <div className="journal__entry-content">

        <div className="journal__entry-body">

          <h2 className="journal__entry-title">{ title }</h2>

          <p className="journal__entry-copy">{ body }</p>

        </div>

        <div className="journal__entry-date-box">

          <span>{ noteDate.format( 'dddd' ) }</span>

          <h3>{ noteDate.format( 'Do' ) }</h3>

        </div>

      </div>

    </div> 

  )
}
