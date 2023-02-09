"use strict";

function printCities(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  let str = arr?.join(",") + ".";
  return str;
}

function roundTo5(float) {
  return Math.round(float / 5) * 5;
}

function getCase(int) {
  const lastDigit = int % 10;

  switch (lastDigit) {
    case 1:
      return "компьютер";
    case 2:
    case 3:
    case 4:
      return "компьютера";
    default:
      return "компьютеров";
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function dublicates(arr1, arr2) {
  function findDuplicates(arr) {
    let obj = {};
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]] += 1;
      }
    }
    for (let key in obj) {
      if (obj[key] > 1) {
        duplicates.push(+key);
      }
    }
    return duplicates;
  }

  const duplicates1 = findDuplicates(arr1);
  const duplicates2 = findDuplicates(arr2);

  return duplicates1.filter((item) => duplicates2.includes(item));
}

function printTable(num) {
  let table = "";
  let maxValue = num * num;
  let maxLength = maxValue.toString().length + 1;

  table += " ".padStart(maxLength, " ");
  for (let i = 1; i <= num; i++) {
    table += i.toString().padStart(maxLength, " ");
  }
  table += "\n";

  for (let i = 1; i <= num; i++) {
    table += i.toString().padStart(maxLength, " ");
    for (let j = 1; j <= num; j++) {
      let multiplication = i * j;
      table += multiplication.toString().padStart(maxLength, " ");
    }
    table += "\n";
  }

  console.log(table);
}

