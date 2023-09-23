---
title: Day 18/30 - JavaScript
metaTitle: Day 18/30 Days of JavaScript — Trishan
metaDescription: Day 18 of JavaScript
layout: ../../layouts/CoursesLayout.astro
banner: https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/images/banners/day_1_18.png
---

# 📔 Day 18

## Closure

JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

```js
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
```

```sh
1
2
3
```

Let us more example of inner functions

```js
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
```

```sh
1
0
```

🌕 You are making progress. Maintain your momentum,  keep the good work.