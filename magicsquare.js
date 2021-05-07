const magicSquare = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
];

//For Loop version
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;

  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }

  console.log(`${row} summed to ${sum}`);

};

//For of version
for (let row of magicSquare) {
  let sum = 0;

  for (let num of row) {
    sum += num;
  };
  console.log(`${row} summed to ${sum}`);

};