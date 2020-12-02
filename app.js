// TODO
var GroceryList = (props) => (
  <ul>
    {props.groceries.map((item, index) =>
      <GroceryListItem item={item} key={index} />
    )}
  </ul>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
  }
  onListItemHover() {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  render() {

    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    return (
      <li style={style} key={this.props.key} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}

var myGroceries = ['Kale', 'Quinoa', 'Cucumbers', 'Chicken'];


ReactDOM.render(<GroceryList groceries={myGroceries}/>, document.getElementById("app"))