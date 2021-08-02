/*
The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday' : return 9;
    case 'tuesday' : return 7.5;
    case 'wednesday' : return 10.5;
    case 'thursday' : return 4;
    case 'friday' : return 3;
    case 'saturday' : return 9;
    case 'sunday' : return 7;
    default : console.log('Invalid entry!');
    return -1;
  }
}

const getActualSleepHours = () => {
  const weekDays = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ];
  let totalSleepHours = weekDays.map(getSleepHours).reduce((accumalater,currentValue)=>{return accumalater+currentValue;});
  return totalSleepHours;
}

const getIdealSleepHours = (idealHours=7) => {return idealHours*7;};

const calculateSleepDebt = (actualSleepHourFunc,idealSleepHourFunc) => {
  let actualSleepHours = actualSleepHourFunc();
  let idealSleepHours = idealSleepHourFunc(7);

  if(actualSleepHours===idealSleepHours)
    console.log('Hurray! You had Ideal sleep this week!');
    else if(actualSleepHours > idealSleepHours)
    console.log(`Dude, you overslept this week by ${actualSleepHours-idealSleepHours} hours!`);
    else console.log(`Bro!! Get some sleep, you slept short by ${idealSleepHours-actualSleepHours} hours!`);
}

calculateSleepDebt(getActualSleepHours,getIdealSleepHours);
