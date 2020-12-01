// TODO
var GroceryList = (props) => (
  <ul>
    {<Cucumbers />}
    {<Apricots />}
  </ul>
);
var Cucumbers = ( ) => (
  <li>Cucumbers</li>
)
var Apricots = ( ) => (
  <li>Apricots</li>
)

ReactDOM.render(<GroceryList item0={"Cucumbers"} item1= {"Apricots"}/>, document.getElementById("app"))