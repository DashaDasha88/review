const findWaldo = function(names, found) {

  names.forEach((value, i) => {
    if (value === "Waldo") found(i)
  });
}

const actionWhenFound = function(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);