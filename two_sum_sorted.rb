def two_sum_sorted(nums, target)
  left_pointer = 0
  right_pointer = nums.size - 1

  loop do
    sum = nums[left_pointer] + nums[right_pointer]

    if sum < target
      left_pointer += 1
    elsif sum > target
      right_pointer -= 1
    else
      return [left_pointer + 1, right_pointer + 1]
    end
  end
end

p two_sum_sorted([4, 5, 5, 6, 9], 15)
