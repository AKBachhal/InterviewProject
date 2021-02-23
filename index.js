// Import stylesheets
import "./style.css";

// Write Javascript code!

let acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
let balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

function getAccounts(user = "", sortBy = "acctNum", sortDirection = "asc") {
  let data = acctData.map(acc => ({
    ...acc,
    balance: balance[acc["acctNum"]]
  }));

  let output = data;
  if (user)
    output = output.filter(
      acc => acc["user"].toLowerCase() === user.toLowerCase()
    );

  output = mySort(output, sortBy, sortDirection === "asc");

  // not sure if asked account number object array or just account numbers array not clearly mentioned
  return output.map(acc => acc["acctNum"]);
}

function mySort(data, prop, isAsc) {
  return data.sort((a, b) => {
    return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1);
  });
}

console.log(getAccounts("Bob"));
console.log(getAccounts("Charlie"));
console.log(getAccounts("", "acctNum"));
console.log(getAccounts("Alice", "balance", "asc"));
