// 数组排序
var users = [
  { name: "曹操", age: 67, address: "许昌" },
  { name: "刘备", age: 47, address: "成都" },
  { name: "孙权", age: 37, address: "南京" },
  { name: "吕布", age: 51, address: "包头" },
  { name: "赵云", age: 46, address: "石家庄" },
  { name: "诸葛亮", age: 52, address: "南阳" },
];

users.sort(function (next, prev) {
  return next.age - prev.age;
});
console.log(users);
