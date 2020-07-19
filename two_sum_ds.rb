class TwoSum
    attr_reader :nums

  def initialize
    @nums = {}
  end

  def add(input)
    @nums[input] ? @nums[input] += 1 : @nums[input] = 1
  end

  def find(value)
    @nums.keys.each do |num|
      diff = value - num

      if diff == num
        return true if @nums[num] >= 2
      elsif @nums[diff]
        return true
      end
    end

    return false
  end
end

two_sum = TwoSum.new()
two_sum.add(1)
two_sum.add(3)
two_sum.add(5)
p two_sum.find(4)
p two_sum.find(7)
