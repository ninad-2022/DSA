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


space complexity: It is the amount of space taken by an algorithm on the basis of the input size
1. auxillary space - only space you created by assigning a new variable
2. total space complexity - total space of newly created variables and input space


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