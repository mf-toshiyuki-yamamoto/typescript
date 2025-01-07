const FizzBuzz = (n: number): void => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) {
        console.log('Fizz');
      } else {
        console.log(i);
      }
    }
  };
 
//100まで表示する
  FizzBuzz(100);