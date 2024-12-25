function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  export function findNthPrime(n) {
    
    let count = 0;
    let number = 1;

    while (count < n) {
      number++;
      if (isPrime(number)) {
        count++;
      }
    }

    return number;
  }