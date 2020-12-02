// TODO
class GroceryList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.items}
      </ul>
    )
  }
}


var GroceryListItem = (props) => (
  <li key={props.key}>{props.item}</li>
);

var myGroceries = [
  {item: 'Kale', key: 0},
  {item: 'Cucumbers', key: 1},
  {item: 'Quinoa', key: 2},
  {item: 'Chicken', key: 3}
];

var listElements = myGroceries.map(item => GroceryListItem(item));
console.log(listElements);

ReactDOM.render(<GroceryList items={listElements}/>, document.getElementById("app"))