const React = require('react')
const Resource = require('./resource')
const Dollar = require('./dollar')
const { getFullAmount } = require('./utils')

const Calculator = React.createClass({
  propTypes: {
    resources: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired
  },

  getInitialState() {
    return {
      resources: this ? this.props.resources : [],
      checked: {}
    }
  },

  render() {
    return (
      <div className="ccc">
        <h2>Look at One Family&rsquo;s Plan for Creative Giving</h2>
        <table>
          <thead>
            <tr>
              <th/>
              <th>Potential Resources</th>
              <th>Weekly</th>
              <th>Yearly</th>
              <th>3 Years</th>
            </tr>
          </thead>
          <tbody>
            {this.state.resources.map((resource) =>
              <Resource
                key={resource.desc}
                resource={resource}
                checked={this.state.checked[resource.desc]}
                onCheck={this.handleCheckResource.bind(this, resource)}
                onChange={this.handleChangeResource.bind(this, resource)}
              />
            )}
            <tr>
              <td/>
              <td><h3>Three Year Total</h3></td>
              <td/>
              <td/>
              <td><Dollar amount={this.getTotal()}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },

  getTotal() {
    let total = 0
    this.state.resources.forEach((resource) => {
      if (this.state.checked[resource.desc]) {
        total += getFullAmount(resource) || 0
      }
    })
    return total
  },

  handleCheckResource(resource, checked) {
    const newObj = this.state.checked
    newObj[resource.desc] = checked
    this.setState({ checked: newObj })
  },

  handleChangeResource(resource, newResource) {
    const index = this.state.resources.indexOf(resource)
    const newResources = this.state.resources
                           .slice(0, index)
                           .concat(newResource)
                           .concat(this.state.resources.slice(index + 1))
    this.setState({ resources: newResources })
  }
})

module.exports = Calculator
