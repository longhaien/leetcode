var addTwoNumbers = function (l1, l2) {
  if (num1.length < num2.length) {
    for (let i = num1.length; i < num2.length; i++) {
      num1[i] = 0;
    }
  } else {
    for (let i = num2.length; i < num2.length; i++) {
      num2[i] = 0;
    }
  }

  for (let i = 0; i < num2.length; i++) {
    num1[i] += num2[i];
    if (num1[i] >= 10) {
      num1[i] = num1[i] % 10;
      if (i < num2.length) {
        num1[i + 1] += 1;
      }
    }
  }

  if (num1[num1.length - 1] >= 10) {
    num1[num1.length - 1] = num1[num1.length - 1] % 10;
    num1[num1.length] = 1;
  }

  return num1;

};