function findRotationCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    if (arr[leftIndex] <= arr[rightIndex]) {
        return leftIndex
    }

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleValue = arr[middleIndex]

        if (middleValue < arr[middleIndex - 1]) {
            return middleIndex
        }
        if (middleValue > arr[rightIndex]) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }
    return -1
}

module.exports = findRotationCount