const {wordfind} = require("./wordfind");

//console.log(wordfind.newPuzzle);
const words = ['cows', 'tracks', 'arrived', 'located', 'sir', 'seat',
'division', 'effect', 'underline', 'view', 'annual',
'anniversary', 'centennial', 'millennium', 'perennial',
'artisan', 'apprentice', 'meteorologist', 'blizzard', 'tornado',
'intensify','speed','count','consonant','someone',
'sail','rolled','bear','wonder','smiled','angle', 'absent',
'decadent', 'excellent', 'frequent', 'impatient', 'cell',
'cytoplasm', 'organelle', 'diffusion', 'osmosis',
'respiration'
];
const puzzle = wordfind.newPuzzleLax(words, {
  // Set dimensions of the puzzle
  height: 15,
  width:  15,
  // or enable all with => orientations: wordfind.validOrientations,
  //orientations: ['horizontal', 'vertical'],
  // Set a random character the empty spaces
  maxAttempts:2,
  maxGridGrowth: 20,
  fillBlanks: true,
  preferOverlap: false
});

puzzle.forEach((el) => {
  console.log(el.join('  '));
});