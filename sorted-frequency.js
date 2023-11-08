function sortedFrequency(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let startAt;
    let endAt;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleValue = arr[middleIndex]

        if (middleValue < val) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }

    startAt = leftIndex;
    rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleValue = arr[middleIndex]

        if (middleValue <= val) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }

    endAt = rightIndex + 1;
    let numberFrequency = arr.slice(startAt, endAt).length

    if (numberFrequency > 0) {
        return numberFrequency
    } else {
        return -1
    }
}

module.exports = sortedFrequency