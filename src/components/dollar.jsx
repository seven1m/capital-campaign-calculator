const React = require('react')

const Dollar = function(props) {
  if (!props.amount && !props.editable) return <span/>
  return (
    <span className="amount-input">
      <span className="dollar-sign">$</span>
      {props.editable ?
        <input value={props.amount || ''} onChange={e => props.onChange(e.target.value)}/> :
        <span className="amount">{props.amount.toLocaleString()}</span>
      }
    </span>
  )
}

Dollar.propTypes = {
  amount: React.PropTypes.number,
  onChange: React.PropTypes.func,
  editable: React.PropTypes.bool
}

module.exports = Dollar
