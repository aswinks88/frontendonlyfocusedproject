import React from 'react'
import './style.css'
function GridCardComponent() {
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <div className='card-desc'>
            <div className='card-title'>
              <h1>Join Our Community</h1>
            </div>

            <div className='card-info'>
              <h3>30 day hassle-free money back guarantee</h3>
              <p>
                Gain access to our full library of tutotrials aloing with expert
                code reviews. Perfect for any developers who are serious about
                honing their skills.
              </p>
            </div>
          </div>
          <div className='card-sub'>
            <div className='card-subscription'>
              <h4>Monthly subscription</h4>
              <div className='price'>
                <h1>$29</h1> <label>per month</label>
              </div>
              <label>Full access for less than $1 a day.</label>
              <div className='signup-button'>
                <button type='button'>Sign Up</button>
              </div>
            </div>
            <div className='card-subscription-info'>
              <h4>Why Us</h4>
              <ul>
                <li>Tutorial by industry experts</li>
                <li>Peer & expert code review</li>
                <li> Coding exercises</li>
                <li>Access to our GitHub repos </li>
                <li> Community forum</li>
                <li>Flashcard decks </li>
                <li>New vidoes every week</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridCardComponent
