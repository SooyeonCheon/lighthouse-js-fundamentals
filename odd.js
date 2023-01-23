function isOdd (num) {
  return num % 2 === 1;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));


//In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre./
/*
const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++){
    if (stations[i][1] > 20 && stations[i][2] === "school" || stations[i][2] === "community centre"){
      goodStations.push(stations[i][0]);
    }
  }
  console.log(goodStations);
}
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


chooseStations(stations);*/


const chooseStations = function (stations) {
  let goodStations = [];
  for (let station of stations){
    const capacity = station[1];
    if(capacity>=20){
      const type = station[2];
      if (type === "school" || type === "community centre"){
        goodStations.push(station[0]);
      }
    }
  }
  console.log(goodStations);
}
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


chooseStations(stations);
