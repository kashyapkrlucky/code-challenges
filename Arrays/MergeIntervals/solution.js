function merge(intervals) {
    if (intervals.length === 0) return [];
    
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const lastInterval = result[result.length - 1];
        const currentInterval = intervals[i];
        
        if (lastInterval[1] >= currentInterval[0]) {
            // There is overlap, merge intervals
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            // No overlap, add current interval to result
            result.push(currentInterval);
        }
    }
    
    return result;
}

// Example usage:
// console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]