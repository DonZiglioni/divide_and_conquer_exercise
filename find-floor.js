function findFloor(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    if (val > arr[rightIndex]) {
        return arr[rightIndex]
    } else if (val <= arr[leftIndex]) {
        return -1
    }

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleValue = arr[middleIndex]

        if (middleValue === val) {
            return arr[middleIndex - 1]
        }

        if (val > arr[middleIndex - 1] && val < arr[middleIndex + 1] &&
            middleValue < arr[middleIndex + 1]) {
            return arr[middleIndex]
        }

        if (val > middleValue) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }
}

module.exports = findFloor