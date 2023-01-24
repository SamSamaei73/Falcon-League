import React from 'react'

const NewTicket = () => {
  return (
    <div className='NewTicket'>
        <div className='Title'>
            <h3>New Ticket</h3>
            <h6>send us your massage</h6>
        </div>
        <select>
            <option>subject</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <textarea name="text"  cols="30" rows="10"></textarea>
        <div className="btnStatus">
            <button>send</button>
        </div>
    </div>
  )
}

export default NewTicket