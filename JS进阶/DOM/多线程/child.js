onmessage = function (event) {
  // console.log(event);
  var res = event.data[0] + event.data[1];
  this.postMessage(res);
};
