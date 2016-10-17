* Flatten a nested array. You must account for varying levels of nesting.

* ```steamrollArray([[["a"]], [["b"]]])``` should return ```["a", "b"]```.
* ```steamrollArray([1, [2], [3, [[4]]]])``` should return ```[1, 2, 3, 4]```.
* ```steamrollArray([1, [], [3, [[4]]]]) ```should return ```[1, 3, 4]```.
* ```steamrollArray([1, {}, [3, [[4]]]]) ```should return ```[1, {}, 3, 4]```.
