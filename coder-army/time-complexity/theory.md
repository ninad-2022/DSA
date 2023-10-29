Time complexity: how program is execuating over a time period on the basis of the input given to him
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

Q.2 n