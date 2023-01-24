import React from 'react'

const OpenTicket = () => {
  return (
    <div className='OpenTicket'>
        <div className='Title'>
            <h3>Your Open Tickets</h3>
        </div>
        <div className="MassageOpen">
            <details className='testi'>
                <summary>
                    <div className="itemMas">
                        <div className="partInfo"><h5>Financia</h5></div>
                        <div className="partInfo"><h5>ID:'#'777777</h5></div>
                        <div className="partInfo"><h5>07/02/2022</h5></div>
                        <div className="partInfo"><h5>17:30</h5></div>
                        <div className="partInfo partInfoxl"><h5> Wait for FLC response</h5></div>
                        <div className="partInfo partInfox"><h2>▼</h2></div>
                    </div>
                </summary>
                <div className='InfoTicket'>
                    <div className="infoPart">
                        <div className="PartInfoTic"><h5>07/02/2022</h5></div>
                        <div className="PartInfoTic"><h5>17:30</h5></div>
                        <div className="PartInfoTic PartInfoTicx"><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut molestiae et doloremque magni nisi! Eum explicabo iusto asperiores, ab tempore modi veniam deserunt dolorum inventore ad id blanditiis magni eos, quidem est mollitia sit? Aliquid odit voluptates quidem, accusamus enim pariatur et. Dicta suscipit error quam quo aut nihil! Consequuntur non quae et quidem fuga commodi ad quasi dolor quis dignissimos exercitationem provident molestias molestiae expedita cum sapiente, aliquid deserunt? Quae dolores obcaecati similique neque ipsum tempora, quasi tenetur voluptatem illo. Aliquam tempore porro quo vitae veritatis magnam eaque aperiam dolor odio ipsa praesentium, necessitatibus ullam ab ducimus quaerat</h5></div>
                    </div>
                    <div className="infoPart">
                        <div className="PartInfoTic"><h5>07/02/2022</h5></div>
                        <div className="PartInfoTic"><h5>17:30</h5></div>
                        <div className="PartInfoTic PartInfoTicx"><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugit.</h5></div>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='write your massage here'></textarea>
                    <div className="btnStatus">
                           <button>send</button>
                    </div>
                </div>
            </details>
            <details>
                <summary>
                    <div className="itemMas">
                        <div className="partInfo"><h5>Financia</h5></div>
                        <div className="partInfo"><h5>ID:'#'777777</h5></div>
                        <div className="partInfo"><h5>07/02/2022</h5></div>
                        <div className="partInfo"><h5>17:30</h5></div>
                        <div className="partInfo partInfoxl"><h5> Wait for FLC response</h5></div>
                        <div className="partInfo partInfox"><h2>▼</h2></div>
                    </div>
                </summary>
                <div className='InfoTicket'>
                    <div className="infoPart">
                        <div className="PartInfoTic"><h5>07/02/2022</h5></div>
                        <div className="PartInfoTic"><h5>17:30</h5></div>
                        <div className="PartInfoTic PartInfoTicx"><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut molestiae et doloremque magni nisi! Eum explicabo iusto asperiores, ab tempore modi veniam deserunt dolorum inventore ad id blanditiis magni eos, quidem est mollitia sit? Aliquid odit voluptates quidem, accusamus enim pariatur et. Dicta suscipit error quam quo aut nihil! Consequuntur non quae et quidem fuga commodi ad quasi dolor quis dignissimos exercitationem provident molestias molestiae expedita cum sapiente, aliquid deserunt? Quae dolores obcaecati similique neque ipsum tempora, quasi tenetur voluptatem illo. Aliquam tempore porro quo vitae veritatis magnam eaque aperiam dolor odio ipsa praesentium, necessitatibus ullam ab ducimus quaerat</h5></div>
                    </div>
                    <div className="infoPart">
                        <div className="PartInfoTic"><h5>07/02/2022</h5></div>
                        <div className="PartInfoTic"><h5>17:30</h5></div>
                        <div className="PartInfoTic PartInfoTicx"><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugit.</h5></div>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='write your massage here'></textarea>
                    <div className="btnStatus">
                           <button>send</button>
                    </div>
                </div>
            </details>
            </div>
    </div>
  )
}

export default OpenTicket