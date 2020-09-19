import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import placeholder from './placeholder.png';

export const NoteScreen = () => {

  const { active: note } = useSelector( state => state.notes );
  
  const [ formValues, handleInputChange ] = useForm( note );

  const { body, title } = formValues;
  console.log(formValues)

  return (
    <div className="notes__main-content">

      <NotesAppBar />

      <div className="notes__content">

        <input  
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name={ title }
          onChange={ handleInputChange }
        />

        <textarea 
          placeholder="What happened today?"
          className="notes__textarea"
          name={ body }
          onChange={ handleInputChange }
        ></textarea>

        {
          
          ( note.url ) &&

            <div className="notes__image">

              <img 
                src={ placeholder }
                alt="Note Img"
              />

            </div>

        }
          
      </div>
      
    </div>
  )
}
