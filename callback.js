function get(url, cb) {

}

var combined = get(
  '1.json',
  function(d1) {
    return get(
      '2.json',
      function(d2) {
        return d1 + d2;
      });
  });
