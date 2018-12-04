export default () => {
  let colors = [], hexnumbers = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  for (let i = 0; i < 100; i++){
    let someString = '#';
    for( let j = 0; j < 6; j++)
      someString += hexnumbers[Math.floor(Math.random() * Math.floor(16))];
    colors.push(someString);
  }
  return colors;
}
