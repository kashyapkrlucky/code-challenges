def merge(intervals):
    if not intervals:
        return []
    
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])
    
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last = merged[-1]
        if last[1] >= current[0]:
            # There is overlap, merge intervals
            last[1] = max(last[1], current[1])
        else:
            # No overlap, add current interval to result
            merged.append(current)
    
    return merged

# Example usage:
# print(merge([[1,3],[2,6],[8,10],[15,18]])) # Output: [[1,6],[8,10],[15,18]]