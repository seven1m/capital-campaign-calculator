/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../src'

import 'purecss/build/pure.css'
import './main.css'
import '../style.css'

ReactDOM.render(
  <Calculator
    resources={[
      { desc: 'Eliminate 1 meal out per week', weekly: 35, type: 'weekly' },
      { desc: 'Eliminate 1 Starbucks per week', weekly: 4, type: 'weekly' },
      { desc: 'Eliminate 1 rented movie per week', weekly: 6, type: 'weekly' },
      { desc: 'Reduce entertainment/shopping', yearly: 500, type: 'yearly' },
      { desc: 'Reduce Christmas budget', yearly: 250, type: 'yearly' },
      { desc: 'Reduce Vacation budget', yearly: 300, type: 'yearly' },
      { desc: 'Garage sale income', yearly: 200, type: 'yearly' },
      { desc: "Everyone's spare change each day", weekly: 5, type: 'weekly' },
      { desc: '50 stock shares from our portfolio', full: 5000, type: 'full' },
      { desc: 'Increase cash giving', weekly: 50, type: 'weekly' }
    ]}
  />,
  document.getElementById('app')
)
