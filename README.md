**Paint Shop - getting Started**
`run node index.js path/filename -or- npm test in terminal to see results`
<br />
You run a paint shop, and there are a few different colors of paint you can prepare. Each color can be either "gloss" or "matte".
You have a number of customers, and each have some colors they like, either gloss or matte. No customer will like more than one color in matte.
<br />
You want to mix the colors, so that:
* There is just one batch for each color, and it's either gloss or matte.
* For each customer, there is at least one color they like.
* You make as few mattes as possible (because they are more expensive).
Your program should accept an input file as a command line argument and print a result to standard out. An example input file is:
`plain 5 1M3G5G 2G3M4G 5M`
The first line specifies how many colors there are.
Each subsequent line describes a customer. For example, the first customer likes color 1 in matte, color 3 in gloss and color 5 in gloss.
Your program should read an input file like this and print out either that it is impossible to satisfy all the customer, or describe, for each of the colors, whether it should be made gloss or matte.
The output for the above file should be: ```plain
GGGGM
```
...because all customers can be made happy by every paint being prepared as gloss except number 5.
An example of a file with no solution is:
```plain 1
1G 1M
```
Your program should print No solution exists
A slightly richer example is: ```plain
5
2M
5G
1G 5G1G4M 3G
5G 3G5G1G 3G
2M 5G1G 2M
5G
4M 5G4M
```
...which should print:
```plain GMGMG ```
