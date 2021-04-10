
// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string

var restoreString = function (s, indices) {
  let results = '';
  for (let i = 0; i < indices.length; i++) {
    results += s[indices.indexOf(i)];
  }
  return results;
};

var restoreString = function (s, indices) {
  let results = [];
  for (let i = 0; i < indices.length; i++) {
    results[indices[i]] = s[i];
  }
  return results.join('');
};

/*  Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.*/
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  if (x <= 1){
   return x;
  }
  while (left < right - 1) {
    let mid = Math.floor(left + (right - left) / 2);
    if (mid == x / mid) {
      return mid;
    } else if (x / mid > mid) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(mySqrt(3));


/* Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.*/
var sortColors = function (nums) {
  let currentNums, j;
  for (let i = 1; i < nums.length; i++) {
    currentNums = nums[i];
    j = i - 1;
    while (j >= 0 && nums[j] > currentNums) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = currentNums;
  }
  return nums;
};

/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. */ 

var searchInsert = function (nums, target) {
  let l = 0;
  let h = nums.length - 1;
  while (l <= h) {
    let m = Math.floor((l + h) / 2);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};


/*You have a RecentCounter class which counts the number of recent requests within a certain time frame. */

var RecentCounter = function() {
  this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let queue = this.queue;
    while(queue.length && queue[0] < t - 3000) {
      queue.shift();
    }
    queue.push(t);
    return queue.length;

    if (0 < this.queue.length) {
      while (3000 < t - this.queue[0]) {
        this.queue.shift();
      }
    }

    this.queue.push(t);

    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */