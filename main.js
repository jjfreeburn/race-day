let raceNumber = Math.floor(Math.random() * 1000);

const runnerEarlyRegistered = true;

const runnerAge = 23;

if (runnerAge > 18 && runnerEarlyRegistered === true) {
  console.log(raceNumber + 1000);
}

if (runnerAge > 18 && runnerEarlyRegistered === true) {
  console.log(`You will race at 9:30am #${raceNumber + 1000}`);
} else if (runnerEarlyRegistered === false) {
  console.log(`You will race at 11:30am #${raceNumber}`);
} else {
  console.log(`YOu will race at 12:30pm #${raceNumber}`);
}
