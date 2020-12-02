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
  }

  render() {
    return (
      <li key={this.props.key}>
        {this.props.item}
      </li>
    );
  }
}

var myGroceries = ['Kale', 'Quinoa', 'Cucumbers', 'Chicken'];


ReactDOM.render(<GroceryList groceries={myGroceries}/>, document.getElementById("app"))