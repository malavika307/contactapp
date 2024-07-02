import React from 'react'

const Header = ({ toggleModal, noOfContacts }) => {
  return (
    <div>
      <header className='header'>
        <div className='container'>
            <h3>Contact List ({noOfContacts})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i>Add New Contact
            </button>
        </div>
      </header>
    </div>
  )
}

export default Header
