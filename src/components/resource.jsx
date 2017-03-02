const React = require('react')
const objectAssign = require('object-assign')
const Dollar = require('./dollar')
const { getFullAmount, getYearlyAmount, getWeeklyAmount } = require('./utils')

const Resource = React.createClass({
  propTypes: {
    resource: React.PropTypes.shape({
      desc: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired
    }).isRequired,
    checked: React.PropTypes.bool,
    onCheck: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <tr className={this.getClassName()}>
        <td className="checkbox-column">
          <input
            id={this.getId()}
            type="checkbox"
            checked={this.props.checked || false}
            onClick={e => this.props.onCheck(e.target.checked)}
          />
        </td>
        <td><label htmlFor={this.getId()}>{this.props.resource.desc}</label></td>
        <td className="amount">
          <Dollar
            amount={getWeeklyAmount(this.props.resource) || null}
            editable={this.props.checked && this.props.resource.type === 'weekly'}
            onChange={this.handleChange.bind(this, 'weekly')}
          />
        </td>
        <td className="amount">
          <Dollar
            amount={getYearlyAmount(this.props.resource) || null}
            editable={this.props.checked && this.props.resource.type === 'yearly'}
            onChange={this.handleChange.bind(this, 'yearly')}
          />
        </td>
        <td className="amount">
          <Dollar
            amount={getFullAmount(this.props.resource) || null}
            editable={this.props.checked && this.props.resource.type === 'full'}
            onChange={this.handleChange.bind(this, 'full')}
          />
        </td>
      </tr>
    )
  },

  handleChange(attr, value) {
    const resource = objectAssign({}, this.props.resource)
    resource[attr] = value
    this.props.onChange(resource)
  },

  getId() {
    return this.props.resource.desc.replace(/[^a-z]/, '')
  },

  getClassName() {
    return this.props.checked ? 'enabled' : 'disabled'
  }
})

module.exports = Resource
