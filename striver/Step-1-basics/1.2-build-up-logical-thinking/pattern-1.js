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
const pattern5 = (n) => {
  for (let i = n; i > 0; i--) {
    let star = "";
    for (let j = i; j > 0; j--) {
      star += " *";
    }
    console.log(star);
  }
};
// pattern5(5); //Time: O(n2) & Space:O(n)

// 1 2 3
// 1 2
// 1
const pattern6 = (n) => {
  for (let i = n; i >= 1; i--) {
    let numRow = "";
    for (let j = 1; j <= i; j++) {
      numRow += j;
    }
    console.log(numRow);
  }
};
// pattern6(5); //Time: O(n2) & Space:O(n)

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
const pattern7 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
};
// pattern7(3); //Time: O(n2) & Space:O(n)

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
const pattern8 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    const compare = 2 * n - (2 * i + 1);
    for (let j = 0; j < compare; j++) {
      row += "*";
    }
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    console.log(row);
  }
};
// pattern8(3); //Time: O(n2) & Space:O(n)

const pattern9 = (n) => {
  const input = Math.floor(n / 2);
  pattern7(input);
  pattern8(input);
};
// pattern9(8); //Time: O(n2) & Space:O(n)

const pattern10 = (n) => {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let starCount = i;
    if (i > n) starCount = 2 * n - i;
    let row = "";
    for (let j = 1; j <= starCount; j++) {
      row += "*";
    }
    console.log(row);
  }
};
// pattern10(8); //Time: O(n2) & Space:O(n)

// 0
// 10
// 010
// 1010
// Approach-1
const pattern11_1 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j % 2 == 0) row += "1";
      else row += "0";
    }
    console.log(row);
  }
};
// pattern11_1(4); //Time: O(n2) & Space:O(n)
//Approach-2
const pattern11_2 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    if (i % 2 == 0) start = 1;
    else start = 0;

    for (let j = 1; j <= i; j++) {
      row += start;
      start = 1 - start;
    }
    console.log(row);
  }
};
// pattern11_2(4); //Time: O(n2) & Space:O(n)

// 1    1
// 12  21
// 123321
const pattern12 = (n) => {
  let maxSpace = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    for (let j = 0; j < maxSpace; j++) {
      str += "*";
    }
    for (let j = i; j > 0; j--) {
      str += j;
    }
    console.log(str);
    maxSpace -= 2;
  }
};

// pattern12(4); //Time: O(n3) & Space:O(n)

// 1
// 2 3
// 4 5 6
// 7 8 9 10
const pattern13 = (n) => {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${num}; `;
      num++;
    }
    console.log(row);
  }
};
// pattern13(4); //Time: O(n2) & Space:O(n)

// A
// A B
// A B C
const pattern14 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j < i; j++) {
      str += String.fromCharCode(64 + j);
    }
    console.log(str);
  }
};
// pattern14(4); //Time: O(n2) & Space:O(n)

// A B C
// A B
// A
//APPROACH-1: brut force approach
const pattern15_1 = (n) => {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = n; j >= i; j--) {
      str += String.fromCharCode(64 + num);
      num++;
    }
    num = 1;
    console.log(str);
  }
};
// pattern15_1(4); //Time: O(n2) & Space:O(n)

//APPROACH-2: brut force approach
const pattern15_2 = (n) => {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j < i; j++) {
      str += String.fromCharCode(64 + j);
    }
    console.log(str);
  }
};
// pattern15_2(6); //Time: O(n2) & Space:O(n)

// A
// B B
// C C C
const pattern16 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(64 + i);
    }
    console.log(str);
  }
};
// pattern16(3); //Time: O(n2) & Space:O(n)

// A
// ABA
// ABCBA
const pattern17 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += String.fromCharCode(65 + j);
    }
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
};
pattern17(3); //Time: O(n2) & Space:O(n)
