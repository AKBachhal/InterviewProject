// Import stylesheets
import "./style.css";

// Write Javascript code!


let acctData = [
  {
    "acctNum": "AAA - 1234",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 5231",
    "user": "Bob"
  },
  {
    "acctNum": "AAA - 9921",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 8191",
    "user": "Alice"
  }
];
let balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};


function getAccounts(user, sortBy='acctNum', sortDirection='asc'){


  return this.acctData
}