import React from 'react'
import './style.css'
import uploadicon from '../../images/upload-file.png'
import searchicon from '../../images/search.png'
import lightbulb from '../../images/light-bulb.png'
import calculator from '../../images/calculator.png'

function FourcardComponent() {
  return (
    <div>
      <div className='four-card'>
        <div className='four-card-body'>
          <div className='info'>
            <h1>Reliable, efficient delivery</h1>
            <h1>Powered by Technology</h1>
            <p>
              Our Artificial Intelligence powered tech use millions of project
              data points to ensure your project is successfull
            </p>
          </div>
          <div className='four-card-section'>
            <div className='card1'>
              <div className='top-line-card1'></div>
              <div className='title'>
                <h3>Team builder</h3>
                <p>Build your team with our support</p>
              </div>
              <div className='icon'>
                <img src={uploadicon} alt='team building' />
              </div>
            </div>
            <div className='card2'>
              <div className='top-line-card2'></div>
              <div className='title'>
                <h3>Supervisor</h3>
                <p>Build your team with our support</p>
              </div>
              <div className='icon'>
                <img src={searchicon} alt='supervisor' />
              </div>
            </div>
            <div className='card3'>
              <div className='top-line-card3'></div>
              <div className='title'>
                <h3>Karma</h3>
                <p>Build your team with our support</p>
              </div>
              <div className='icon'>
                <img src={lightbulb} alt='karma' />
              </div>
            </div>
            <div className='card4'>
              <div className='top-line-card4'></div>
              <div className='title'>
                <h3>Calculator</h3>
                <p>Build your team with our support</p>
              </div>
              <div className='icon'>
                <img src={calculator} alt='calculator' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourcardComponent
