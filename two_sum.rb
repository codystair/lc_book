# Brute Force
# def two_sum(nums, target)
#   (0...nums.size).each do |i|
#     ((i + 1)...nums.size).each do |j|
#       if nums[i] + nums[j] == target
#         return [i + 1, j + 1]
#       end
#     end
#   end
# end

def two_sum(nums, target)
  map = {}

  (0...nums.size).each do |i|
    current_value = nums[i]

    if map[target - current_value]
      return [map[target - current_value] + 1, i + 1]
    else
      map[current_value] = i
    end
  end
end

p two_sum([4, 5, 7, 6, 9], 14)
