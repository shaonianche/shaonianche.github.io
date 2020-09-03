---
title: "Missing Numbers"
layout: post
date: 2016-12-22 22:48
headerImage: false
tag:
- markdown
- components
- extra
category: blog
author: jamesfoster
description: Markdown summary with different options
---

### Problem

>Numeros, the Artist, had two lists A and B, such that  was a permutation of . Numeros was very proud of these lists. Unfortunately, while transporting them from one exhibition to another, some numbers were left out of A. Can you find the missing numbers?

#### Note

>If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.


>You have to print all the missing numbers in ascending order.

>Print each missing number once, even if it is missing multiple times.

>The difference between maximum and minimum number in B is less than or equal to 100.

#### Input Format

>There will be four lines of input:

  the size of the first list
>This is followed by n space-separated integers that make up the first list.
  the size of the second list
>This is followed by m space-separated integers that make up the second list.

#### Constraints

> 1 <= n , m <= 1000010
> n <= m
> 1 <= x <= 10000



```c++

	#include <iostream>
	#include <vector>
	#include <algorithm>
	#include <iterator>
	#include <fstream>
	#include <map>
	#include <set>
	using namespace std;


	int main() {

    long int m = 0, n = 0;
    cin >> m;
    vector<long int> A(m), out;

    for (long int i = 0; i < m; i++)
        cin >> A[i];

    cin >> n;
    vector<long int> B(n);

    for (long int i = 0; i < n; i++)
        cin >> B[i];

    map<int, int> mpA, mpB, mpOut;
    set<int> keys;

    for (auto it = A.begin(); it != A.end(); ++it)
    {
        mpA[*it]++;
    }
    for (auto it = B.begin(); it != B.end(); ++it)
    {
        mpB[*it]++;
    }

    for (auto it = mpA.begin(); it != mpA.end(); ++it)
        keys.insert((*it).first);
    for (auto it = mpB.begin(); it != mpB.end(); ++it)
        keys.insert((*it).first);

    for (auto it = keys.begin(); it != keys.end(); ++it)
        mpOut[*it] = abs(mpA[*it] - mpB[*it]);


    for (auto it = mpOut.begin(); it != mpOut.end(); ++it)
    {
        int value = (*it).first;
        if ((*it).second)
            cout << value << ' ';
    }

    return 0;

	}
```
