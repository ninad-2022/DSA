// * * *
// * * *
// * * *
const pattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    let stars = "";
    for (let j = 0; j < n; j++) {
      stars += " *";
    }
    console.log(stars);
  }
};
// pattern1(3); //Time: O(n2) & Space:O(n)

// *
// * *
// * * *
const pattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    let stars = "";
    for (let j = 0; j <= i; j++) {
      stars += " *";
    }
    console.log(stars);
  }
};
// pattern2(3); //Time: O(n2) & Space:O(n)

// 1
// 1 2
// 1 2 3
const pattern3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += j;
    }
    console.log(stars);
  }
};
// pattern3(5); //Time: O(n2) & Space:O(n)

// 1
// 2 2
// 3 3 3
const pattern4 = (n) => {
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += j;
    }
    console.log(stars);
  }
};
// pattern4(5); //Time: O(n2) & Space:O(n)

// * * * * *
// * * * *
// * * *
// * *
// *
const pattern6 = (n) => {
  for (let i = n; i > 0; i--) {
    let star = "";
    for (let j = i; j > 0; j--) {
      star += " *";
    }
    console.log(star);
  }
};
// pattern6(5); //Time: O(n2) & Space:O(n)

// 1 2 3
// 1 2
// 1
const pattern7 = (n) => {
  for (let i = n; i >= 1; i--) {
    let numRow = "";
    for (let j = 1; j <= i; j++) {
      numRow += j;
    }
    console.log(numRow);
  }
};
// pattern7(5); //Time: O(n2) & Space:O(n)

/*
   *
  ***
 *****
[2-1-2], [1-3-1], [0-5-0]
n-i-1      , 2 * i - 1
3-0-1 = 2  , 2 * 0 - 1 = 1
3-1-1 = 1  , 2 * 1 - 1 = 3
3-2-1 = 0  , 2 * 2 - 1 = 5
*/
const pattern8 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
};
// pattern8(3); //Time: O(n3) & Space:O(n)

/*
*****  
 ***
  *  
[2-1-2], [1-3-1], [0-5-0]
n-i-1      , 2 * i - 1
3-0-1 = 2  , 2 * 0 - 1 = 1
3-1-1 = 1  , 2 * 1 - 1 = 3
3-2-1 = 0  , 2 * 2 - 1 = 5
*/
const pattern9 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    const compare = 2 * n - (2 * i + 1);
    for (let j = 0; j < compare; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
};
// pattern9(3); //Time: O(n3) & Space:O(n)

const pattern10=()=>{
  pattern8(5);
  pattern9(5);
}
pattern10()
