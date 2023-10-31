Time complexity: how program is execuating over a time period on the basis of the input size
1. ignore constants
2. ignore lower orders
ex: 
Q.1 2n^3 + 3n^2 + n
    n^3 + n^2 + n
    n^3
    
    10,00,000 + 10,000 + 100
    10,10,100
prof.1 
    Does 10,10,000 has major impact on 10,00,000? 
    -> No, hence ignore lower numbers than 10,00,0000. if does not has major change then ingore.
prof.2
    compare n^3 + n^2 + n and n^2 + logn?
    -> after ignoring constants, n^3 == n^3 are same. hence we ignore them

TIME COMPLEXITY:
(Worst to best)
O(N!)
O(2^N)
O(N^3)
O(Nlogn)
O(N)
O(root of N)
O(logn)
O(1)
<!-- https://youtu.be/hUdqNPhXOh4?si=l-tPmqWH0ui1-C0T  -->

STRIVER's DSA
1. Every peace of the code takes time in terms of big O notation.
O(time taken) -> O(n)
Rules:
1. Time complextiy should be consider alwayas with worst case scenario:
    Best case: Ω(n)
    Worst case: O(n)
    Average case: θ(n)
2. avoid constants
3. always avoid lower order terms

1+2+3+4+..+n (Sum of all natural number formula):
    n*(n+1)/2 = n^2/2 + n/2 = n^2/2 = O(n^2)


space complexity: It is the amount of space taken by an algorithm on the basis of the input size. (auxillary + input space)
1. auxillary space - only space you created by assigning a new variable
2. total space complexity - total space of newly created variables and input space

Most of the server takes 1s = 10^8 operations, 2s = 2* 10^8
