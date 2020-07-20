def two_sum(nums, target)
  map = {}

  nums.each_with_index do |num, i|
    p map
    if map[target - num]
      return [map[target - num] + 1, i + 1]
    else
      map[target - num] = i
    end
  end
end

p two_sum([5, 3, 7, 1], 4)
