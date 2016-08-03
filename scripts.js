
function steamrollArray(arr) {
  var result=[];
  // I'm a steamroller, baby
  var myArr = arr.toString().split(",");
  console.log("MyARRAY"+myArr);
  for (var i = 0; i < myArr.length; i++) {
    var temp=parseInt(myArr[i]);
    if(!isNaN(myArr[i])&&myArr[i]!="")
    {
      console.log("1"+temp);
      result.push(temp);
    }else if(myArr[i]==="[object Object]")
    {
      console.log("2 {}"+myArr[i]);

      result.push({});
    }else if(typeof myArr[i]==="string"&&myArr[i]!="")
    {
      console.log("3 string"+myArr[i]);

      result.push(myArr[i]);

    }
  }
  return result;
}

// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
