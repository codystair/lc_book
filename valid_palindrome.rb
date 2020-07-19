def valid_palindrome(str)
  str = str.downcase
  left_pointer = 0
  right_pointer = str.size - 1

  while left_pointer <= right_pointer
    while str[left_pointer] < 'a' || str[left_pointer] > 'z'
      left_pointer += 1
    end
    while str[right_pointer] < 'a' || str[right_pointer] > 'z'
      right_pointer -= 1
    end

    if str[left_pointer] == str[right_pointer]
      left_pointer += 1
      right_pointer -= 1
    else
      return false
    end
  end

  return true
end

p valid_palindrome("A man, a plan, a canal: Panama")
p valid_palindrome("race a car")
p valid_palindrome("")
