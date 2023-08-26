const selectinSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;
    
    for (let i = 0; i < arr.length - 1; ++i) {
        let minIndex = i;
        
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};

const arr = [20,12,53,3]
console.log(selectinSort(arr)); 

// Time complexity - O(n^2)