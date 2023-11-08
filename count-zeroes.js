function countZeroes(arr) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    let splitAtIndex

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleValue = arr[middleIndex]

        if (middleValue > 0) {
            leftIndex = middleIndex + 1
            splitAtIndex = middleIndex + 1
        } else if (middleValue === 0) {
            rightIndex = middleIndex - 1
            splitAtIndex = middleIndex
        } else {
            splitAtIndex = middleIndex
        }
    }
    return arr.slice(splitAtIndex).length
}








module.exports = countZeroes