function findRotatedIndex(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleValue = arr[middleIndex]

        if (middleValue > arr[rightIndex]) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }

    let pivotVal = arr[leftIndex]
    let pivotIndex = leftIndex;

    leftIndex = 0
    rightIndex = arr.length - 1;

    if (pivotVal <= val && val <= arr[rightIndex]) {
        leftIndex = pivotIndex;
    } else {
        rightIndex = pivotIndex
    }

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleValue = arr[middleIndex]
        if (middleValue === val) {
            return middleIndex
        }

        if (middleValue < val) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }
    return -1
}

module.exports = findRotatedIndex