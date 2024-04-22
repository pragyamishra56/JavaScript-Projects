const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

// const cells = 6;
const cellsHorizontal = 4;
const cellsVertical = 2;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

/* Walls */
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }), // (distance from top left coordinate to center of that rectangle, how many units down from that top left corner,Total width of rectangle, height of rectangle)
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
];
World.add(world, walls);

//Maze generation Or maze walls ********

/* Normal Method
const grid = [];

for(let i=0; i<3; i++) {
  grid.push([]);
  for(let j=0; j<3; j++){
    grid[i].push(false);
  }
}
console.log(grid);
*/

// More Convenient way to create nested array
// replaced 3 to cells bcz cells=3 so Array(3) to Array(cells) and 2 to cells-1 which Array(2) but now Array(cells-1)
// purpose is to anytime can change the number of cells in one place that would be change the number of elements in rows and columns

/* Shuffling Neighbor Pairs */
const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};
const grid = Array(cellsVertical) //Array(rows)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false)); //Array(column)

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(false));

const horizontals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));
// console.log(horizontals);

/* Random pick in rows & column */
const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

// console.log(startRow, startColumn)

const stepThroughCell = (row, column) => {
  // If I have visited the cells at [row, column], then return
  if (grid[row][column]) {
    return;
  }
  // Mark this cell as being visited
  grid[row][column] = true;

  //Assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"], //above
    [row, column + 1, "right"], //down
    [row + 1, column, "down"], //right
    [row, column - 1, "left"], //left
  ]);
  console.log(neighbors);

  // For each neighbors...
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // See if that neighbor is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    ) {
      continue;
    }

    // If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }

    // Remove a wall from either horizontal or verticals
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    } else if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }
    stepThroughCell(nextRow, nextColumn);
  }
  // Visited that next cell
};

stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
  // console.log(row);
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      5,
      {
        label: 'wall',
        isStatic: true,
        render: {
          fillStyle: 'red'
        }
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      5,
      unitLengthY,
      {
        label: 'wall',
        isStatic: true,
        render: {
          fillStyle: 'red'
        }
      }
    );
    World.add(world, wall);
  });
});

const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    label: "goal",
    isStatic: true,
    render: {
      fillStyle: 'green'
    }
  }
);
World.add(world, goal);
// console.log(grid);

/* BALL */

const ballRadius = Math.min(unitLengthX + unitLengthY) / 2;
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius / 4, {
  label: "ball",
  render: {
    fillStyle: 'yellow'
  }
});
World.add(world, ball);

document.addEventListener("keydown", (event) => {
  const { x, y } = ball.velocity;
  console.log(x, y);
  if (event.keyCode === 87) {
    // console.log('move ball up');
    Body.setVelocity(ball, { x, y: y - 5 });
  }
  if (event.keyCode === 68) {
    // console.log('move ball right');
    Body.setVelocity(ball, { x: x + 5, y });
  }
  if (event.keyCode === 83) {
    // console.log('move ball down');
    Body.setVelocity(ball, { x, y: y + 5 });
  }
  if (event.keyCode === 65) {
    // console.log('move ball left');
    Body.setVelocity(ball, { x: x - 5, y });
  }
});

/* Win Condition */

Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      // console.log("User won!!");
      document.querySelector('.winner').classList.remove('hidden');
      world.gravity.y = 1;
      world.bodies.forEach(body => {
        if(body.label === 'wall') {
          Body.setStatic(body, false);
        }
      });
    }
  });
});
