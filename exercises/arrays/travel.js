let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function destinationChecker(destination, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === destination) {
            return true;
        }
    }
    return false;
}
console.log(destinationChecker('Bora Bora', destinations));
console.log(destinationChecker('Victoria', destinations));
