let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
let CURRENCY_UNITS = {
  "ONE HUNDRED": 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};
const CURRENCY_UNITS_IN_CENTS = Object.fromEntries(
  Object.entries(CURRENCY_UNITS).map(([key, value]) => [key, value * 100]),
);

const purchaseBtn = document.getElementById("purchase-btn");
let cashInput = document.getElementById("cash");

const priceInput = document.createElement("input");
priceInput.type = "number";
priceInput.value = price;
document.querySelector("body").append(priceInput);

function convertToCent(num) {
  return Math.ceil(num * 100);
}

function convertBack(cent) {
  return cent / 100;
}

purchaseBtn.addEventListener("click", () => {
  const cash = parseFloat(cashInput.value);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    document.getElementById("change-due").innerHTML =
      "No change due - customer paid with exact cash";
    return;
  }

  const cashInCent = convertToCent(cash);
  const priceInCent = convertToCent(price);
  const cidInCent = cid.map((c) => {
    return [c[0], convertToCent(c[1])];
  });

  const changeInCent = cashInCent - priceInCent;
  const changesInCent = {};

  let status = "OPEN";
  let tempChange = changeInCent;
  while (tempChange > 0) {
    let changeAvailable = false;
    for (const [unit, value] of Object.entries(CURRENCY_UNITS_IN_CENTS)) {
      const cidUnit = cidInCent.find((c) => c[0] === unit);

      if (tempChange - value >= 0 && cidUnit[1] - value >= 0) {
        cidUnit[1] -= value;

        if (changesInCent[unit]) {
          changesInCent[unit] += value;
        } else {
          changesInCent[unit] = value;
        }

        tempChange -= value;

        changeAvailable = true;
        break;
      }
    }

    // check when insufficient fund
    if (!changeAvailable && tempChange !== 0) {
      status = "INSUFFICIENT_FUNDS";
      break;
    }

    let closed = true;
    for (const [_unit, value] of Object.values(cidInCent)) {
      if (value !== 0) {
        closed = false;
        break;
      }
    }

    if (closed) {
      status = "CLOSED";
    }
  }

  console.log(status);
  console.log(changesInCent);

  let result = `Status: ${status}`;

  if (status !== "INSUFFICIENT_FUNDS") {
    for (const [unit, value] of Object.entries(changesInCent)) {
      result += ` ${unit}: $${convertBack(value)}`;
    }
  }

  console.log(result);

  document.getElementById("change-due").innerHTML = result;
});
