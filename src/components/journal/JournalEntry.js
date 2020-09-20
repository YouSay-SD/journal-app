import React from 'react';
import moment from 'moment';
import picture from './placeholder.jpg';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch();

  const noteDate = moment( date );

  const handleEntryClick = () => {
    dispatch( 
      activeNote( id, {
        date, title, body, url
      })
    );
  }

  return (

    <div 
      className="journal__entry"
      onClick={ handleEntryClick }
    >
      
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

          <h2 className="journal__entry-title">{ ( title.length > 24 ) ? title.substr(0, 24) + '...' : title }</h2>

          <p className="journal__entry-copy">{ ( body.length > 110 ) ? body.substr(0, 110) + '...' : body }</p>

        </div>

        <div className="journal__entry-date-box">

          <span>{ noteDate.format( 'dddd' ) }</span>

          <h3>{ noteDate.format( 'Do' ) }</h3>

        </div>

      </div>

    </div> 

  )
}
