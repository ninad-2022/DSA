// Q.1
const n = 10;
for (let i = 0; i < 10; i++) {
  console.log("chamka");
}

/*
this algorithm is not dependent of the input hence it will have constant time complexity.
Best case: Ω(n)
Worst case: O(10) -> O(1)
Average case: θ(n)
*/

// Q.2
console.log(n * (n + 1) * 100);
// only one operation is carried out which is not dependent on the input, hence time complxity is O(1)

//Q.3
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log("chamka");
  }
}
//O(n^2)

//Q.4
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("chamka");
  }
}
//O(n^2) -> n(n+1)/2 -> (n^2+n)/2 -> ignorign lower order term O(n^2)

//Q.5
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= i * i; j++) {
    console.log("chamka");
  }
}
//n(n^1)+(2n+1)/6 -> n3 + n2 -> O(n^3)

//Q.6
const m = 3;
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= m; j++) {
    console.log("chamka");
  }
}
//O(mn)
//Q.7
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= i * i; j++) {
    for (let k = 0; k <= n / 2; k++) {
      //can find k as it is independent, n/2
      console.log("chamka");
    }
  }
}
// n/2 + 2^2(n/2) + 3^2(n/2)...n^2(n/2)
// n/2(1+2^2+3^3+4^4...n^2)
// n/2(n*(n+1)*(2n+1))
// O(n^4)

// Q.8
//Q.7
for (let i = 1; i < n; i++) {
  console.log("chamka");
}
/*
n = 2^k         ...k = power
logn = klog2    ...taking log
k = logn/log2
k = log2n
therefore, 
log2n + 1       ...ignoring lower order term
O(log2n)

if order is increasing or descreasing then take it log2n
ex:
1 - 2 - 4 - 8 - 16 -32
*/

// Q.9
//n/2
for (let i = n / 2; i <= n; i++) {
  //n/2
  for (let j = 1; j <= n / 2; j++) {
    //n
    for (let k = 1; k <= n; k++) {
      console.log("chamka");
    }
  }
}
// n/2 * n/2 * n = O(n^3)

// Q.10
//n/2
for (let i = n / 2; i <= n; i++) {
  //n/2
  for (let j = 1; j <= n; j = 2 * j) {
    //n
    for (let k = 1; k <= n; k = 2 * k) {
      console.log("chamka");
    }
  }
}
// n/2 * log2n * log2n -> O(log2n)^2 DO NOT IGNORE LOWER ORDER TERM IN MULTIPLICATION

// Q.11, you cannot solve directly as there is a dependency of outer loop inside inner loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j = j + i) {
    console.log("chamka");
  }
}
/* we called it harmonic series.
when i = 1, j = 1+n n times
when i = 2, j = n/2 n/2 times
when i = 3, j = n/3 n/3 times
when i = n, j = n/n n/n times
therfore,
    n + n/2 + n/2 + n/3 + n/4 + n/n
    n(1 + 1/2 + 1/3 + 1/4 +1/n ) 
    O(nlogen)
*/
