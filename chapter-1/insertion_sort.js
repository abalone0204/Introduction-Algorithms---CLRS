"use strict";
// Pseudo code:
// for j=2 to A[length]
//   key = A[j]
//   // Insert A[j] into the sorted sequence A[1 ..j-1]
//   i = j-1
//   while (i >0 and A[i] >key)
//      A[i+1] = A[i]
//      i = i -1
//   A[i+1] = key
function insertionSort(list) {
    if (list.length === 1) {
        return list
    }
    const sorted = list.slice()
    for(let j=1 ; j < list.length - 1; j++) {
        // 暫存當前要比較的值
        let key = sorted[j]
        let idx = j - 1
        while(idx>=0 && sorted[idx] > key) {
            // 將前一個值跟現在要比較的值所處的位置對調
            sorted[idx+1] = sorted[idx]
            idx -= 1
        }
        sorted[idx+1] = key
    }
    return sorted
}


const result = insertionSort([2,4,1,3,7,9,13])
console.log(result);