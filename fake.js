let ajax = (url, cb, test = 1) => {
  let resps = [
    'Cras placerat accumsan nulla. ',
    'Nam a sapien. ',
    'Donec vitae dolor. ',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    'Vivamus id enim. '
  ];
  let delay = Math.round(Math.random() * 5000);
  console.log('Requesting:', url, 'delayed', delay, 'test', test);
  setTimeout(() => {
    cb(resps[url]);
  }, delay);
};

let text1 = ajax(1, one => {
  console.log('remaining text1', 3);
  return one + ajax(2, two => {
  console.log('remaining text1', 2);
    return two + ajax(3, three => {
  console.log('remaining text1', 1);
      return three + ajax(4, four => {
        console.log('remaining text1', 0);
        console.log('text1', one, two, three, four);
        return four;
      });
    });
  });
});

let text2 = [1, 2, 3, 4];
let remainingCbs = text2.length;

text2.map((e, i) => {
  ajax(e, data => {
    remainingCbs--;
    console.log('remaining text2', remainingCbs);
    text2[i] = data;
    if (remainingCbs <= 0) {
      console.log('text2', text2.join(''));
    }
    return data;
  }, 2);
});

console.log(text2);
