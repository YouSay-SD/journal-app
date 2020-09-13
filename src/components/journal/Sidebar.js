import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

  const { name } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <aside className="journal__sidebar">
      
      <div className="journal__sidebar-navbar">

        <h3 className="mt-4">

          <i className="far fa-moon"></i>

          <span>{ name }</span>

        </h3>

        <button 
          className="btn"
          onClick={ handleLogout }
        >
          Logout
        </button>

      </div>

      <div className="journal__new-entry">

        <i className="far fa-calendar-plus fa-5x mb-4"></i>

        <p>New entry</p>

      </div>

      <JournalEntries />

    </aside>
  )
}
