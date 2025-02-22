<h2 id="cRcEj">简介</h2>
<img src="https://cdn.nlark.com/yuque/0/2024/png/38410155/1735473630875-9bf6c20e-7dd5-41f7-a04a-c9952260599a.png" style="zoom: 50%;" />

<h2 id="ICpw5">JS引入方式</h2>
<h3 id="jF4Sz">内联式</h3>
JS事件以属性的方式嵌入html标签。

```html
<button onclick="alert('hahaha')">按钮</button>
```

<h3 id="kjYmQ">嵌入式</h3>
```html
<script>
  alert("hello");
  document.querySelector("button").onclick = function () {
    alert("hahaha");
  };
</script>
```

<h3 id="rQpjF">外部脚本</h3>
```html
 <script src="./demo.js">
   // 不要写别的js代码
 </script>
 <!-- 标签里再写内嵌代码时不会执行，需要再写一个新的script标签 -->
```

<h2 id="WoK9t">指令结束符</h2>
<h3 id="VIIfO">分号</h3>
```javascript
alert('hello');
alert('world');
```

<h3 id="ctKaP">换行</h3>
```javascript
alert('hello')
alert('world')
```

<h2 id="rN6iR">输出内容</h2>
```javascript
// 输出到弹窗
alert();
// 输出到页面
document.write();
// 输出到控制台
console.log();
```

<h2 id="eK2jS">变量</h2>
<h3 id="eiMTi">数据、直接量、变量</h3>
数据：用于承载信息。

直接量：直接表示数据的方式，如`250`，`hello`。

变量：放置数据的容器。

<h3 id="eGKl2">变量的语法</h3>
```javascript
// 变量声明
var x;
// 给变量赋值
x = 400;
// 声明和赋值同时进行
var y = 'hello world!';
// 变量的使用
console.log(x);
console.log(y);

// 只声明，不赋值
var num;
console.log(num); // 输出undefined

// 不声明
console.log(num2); // 报错
```

<h3 id="SQ2jr">变量名的命名规范</h3>
<h4 id="sU6os">强制规范</h4>
由`数字`、`字母`、`_`、`$`组成，不能以数字开头，不能使用关键字或保留字。

```javascript
var _;
var $;
var user123;
```

<h4 id="nFrc7">建议规范</h4>
+ 使用有意义的词语作为变量名
+ 使用**小驼峰**命名法：

	**首单词小写**‌<font style="color:rgb(51, 51, 51);">：标识符的第一个单词的首字母小写。</font>

‌	**后续单词首字母大写**‌<font style="color:rgb(51, 51, 51);">：从第二个单词开始，每个单词的首字母大写。例如：myVariableName</font>

<h3 id="vRULA"><font style="color:rgb(51, 51, 51);">数据类型</font></h3>
<h4 id="fl7Ab">原始类型</h4>
```plain
number 数字
string 字符串
boolean 布尔
null 空
undefined 未定义
```

<h5 id="L6gX9">number</h5>
1. **整型**

```javascript
764; // 十进制
012; // 八进制
0x12; // 十六进制
```

2. **浮点型**

```javascript
0.1 + 0.2; // 存在精度问题 0.30000000000000004
```

3. **科学计数法**

```javascript
var num = 1.3e4 // 13000
var num2 = 2.3e-2 // 0.023
```

4. **NaN**
+ **NaN是number类型**
+ **NaN与任何数字计算结果都是NaN**
+ **NaN与任何数字都不相等，包括自己**

```javascript
// isNaN()函数
// 如果数据是NaN或者转为number的时候能转成NaN（不能转成数字），结果为true，
// 如果数据可以转为数字，结果为false。
isNaN('hello'); // true
isNaN('25'); // false
```

<h5 id="gX4TD">数字有效范围</h5>
```javascript
Number.MAX_VALUE // 最大数
Number.MIN_VALUE // 最小的正数

//超出有效范围
Infinity
// 判断是否是有效数字
isFinite() 
```

<h5 id="DLkNb">字符串</h5>
**转义字符**

+ `\n`：换行
+ `\r`：回车符
+ `\t`：制表符
+ `\'`：表示单引号
+ `\"`：表示双引号
+ `\\`：表示反斜杠
+ `\uXXXX`：四位十六进制表示unicode字符串
+ `\xXX`：两位十六进制表示拉丁字符

<h4 id="bZf4g">对象类型</h4>
```plain
array 数组
function 函数
object 对象
date 日期
……
```

<h4 id="sKkrr">判断数据类型</h4>
运算符`typeof()`

```javascript
var usename = "zhangsan";
var age = 18;
console.log(typeof usename); // string

var address = null;
console.log(typeof address); // object
```

<h4 id="St0c3">数据类型转换</h4>
<h5 id="pjT0w">string转number</h5>
`Number()`

```javascript
var msg = "hello";
var msg2 = Number(msg);
console.log(msg2); // NaN

var msg = "12.1";
var msg2 = Number(msg);
console.log(msg2); // 12.1

var msg = "0xab";
var msg2 = Number(msg);
console.log(msg2); // 171

var msg = "56hello";
var msg2 = Number(msg);
console.log(msg2); // NaN 纯数字字符串才能转换为有效数字

var msg = " 56    ";
var msg2 = Number(msg);
console.log(msg2); // 56

var msg = "";
var msg2 = Number(msg);
console.log(msg2); // 0
```

<h5 id="q7JDK">boolean转number</h5>
```javascript
true  --> 1
false --> 0
```

<h5 id="IhGhx">null转number</h5>
```plain
Number(null) // 0
Number(undefined) // NaN
```

<h5 id="qbPYT">其他类型转string</h5>
`String()`

```plain
var msg = 56;
var msg2 = String(msg);
console.log(msg2); // '56'
```

`'' + 数字`

```plain
'' + 123 // '123'
```

<h5 id="LNVLe">其他类型转boolean</h5>
```javascript
// 数字转布尔，只有0和NaN是false，其他都是true
Boolean(23.1); // true
Boolean(-23.1); // true
Boolean(0); // false
Boolean(Infinity); // true
Boolean(-Infinity); // true
Boolean(NaN); // false

// 字符串只要有内容就是true，空字符串是false
Boolean(''); // false
Boolean(' '); // true
Boolean('123'); // true
Boolean('0'); // true
Boolean('false'); // true

Boolean(null); // false
Boolean(undefined); // false
```

<h4 id="OfbGh">强制类型转换（显式）</h4>
```javascript
Number();
String();
Boolean();

parseInt();
// 非字符串全部转为NaN
// 提取以数字开头的字符串中数字的整数部分
parseFloat(); // 提取字符串中的数字
```

<h4 id="slPP0">自动类型转换（隐式）</h4>
根据运算环境所需要的类型进行自动转换。当前运算环境一般由运算符决定。

`*`运算符，自动转为`number`类型。

```javascript
true * 2 // 1 * 2 = 2
'60' * false // 60 * 0 = 0
'hello' * false // NaN * 0 = NaN
```

<h2 id="PAvHG">运算符</h2>
<h3 id="FagKX">运算符和表达式</h3>
<h4 id="LvR75">运算符</h4>
参与运算的符号叫运算符，与运算符一起运算的数据称为**操作数**。

<h4 id="g1ciO">表达式</h4>
+ 数据、运算符可以共同组成一个表达式。
+ 表达式具有计算结果，成为表达式的值。
+ 一个变量/直接量也可以算作表达式。
+ 多个简单的表达式可以组成复杂的表达式。

<h3 id="vAExD">运算符的分类</h3>
<h4 id="j9ZIX">按照操作数的个数</h4>
一元运算符

二元运算符

三元运算符

<h4 id="XHu84">按照运算符的功能</h4>
<h5 id="pRvev">算数运算符</h5>


<h5 id="mP8Xj">关系运算符、比较运算符</h5>
相等判断`==`，如果两个操作数类型不一致，转为number再比较

```javascript
// null特殊
null == '' //false
null == false // false
null == 0 // false
null == undefined // true
```

全等判断`===`，不会进行类型转换。

<h5 id="FXXvZ">逻辑运算符</h5>
| && | 逻辑与 | 一假则假 | 结果不是布尔类型 | 无副作用 |
| --- | --- | --- | --- | --- |
| || | 逻辑或 | 一真则真 | | 无副作用 |
| ! | 逻辑非 | 取反 | | 无副作用 |


```javascript
console.log(true && 200); // 200
console.log(null && 200); // null
// 如果第一个操作数为真，取第二个操作数作为表达式的值
// 如果第一个为假，取第一个作为表达式的值，不会执行第二个
var n = 0;
var res = n++ && ++n;
console.log(res); // 0
console.log(n); // 1

```

```javascript
console.log("hello" || 200); // hello
console.log(null || 200); // 200
// 如果第一个操作数为真，取第一个作为表达式的值，不会执行第二个
// 如果第一个为假，取第二个操作数作为表达式的值
var n = 0;
var res = n++ || ++n;
console.log(res); // 2
console.log(n); // 2

```

<h5 id="ORMD5">位运算符</h5>
| 位运算符 | 功能 | |
| --- | --- | --- |
| & | 按位与 | |
| | | 按位或 | |
| ^ | 按位异或 | |
| ~ | 按位非 | |


```javascript
var n1 = 11; // 1011
var n2 = 7; // 0111
var n3 = n1 & n2; // 0011
console.log(n3); // 3
/* 
     1 0 1 1
     0 1 1 1
     -------
     0 0 1 1 = 3
*/
```

<h5 id="cVY4B">赋值运算符</h5>
组成的表达式的值：赋值后的变量的值。

`=`：赋值。

```javascript
console.log((n = 100)); // 100
```

`+=`：相加赋值。

```javascript
var n = 0;
n += 1; // n = n + 1;
console.log(n); // 1
```

`-=`：相减赋值。

`%=`：取余赋值。

`*=`：相乘赋值。

`/=`：相除赋值。

`+=`：字符连接赋值。

```javascript
var n = "hell";
n += "o";
console.log(n); // hello

```

<h5 id="aZiao">其他运算符</h5>
| 位运算符 | 含义 | 操作数个数 | 操作数类型 | 表达式值的类型 | 有无副作用 |
| --- | --- | --- | --- | --- | --- |
| typeof | 类型判断 | 1 | 无要求 | string | 无 |
| , | 逗号运算符 | 2 | 无要求 | 取第二个操作数作为表达式的值 | 无 |
| + | 字符串连接符 | 2 | string | string | 无 |
| ?: | 条件运算符 | 3 | 第一个布尔，后两个无要求 | 取第二个或第三个 | 无 |


```javascript
var a = 100, // 逗号运算符多个变量赋值
    b = 200,
    c = 300;

var res = (a=100, b=200);
console.log(res); // 200
```

什么时候是加号，什么时候是字符串连接符？

```javascript
//只要有一个操作数是string，就是连接符
console.log(45 + "8"); // "458"

//两个操作数都不是string才是加号
```

<h6 id="I62Kz">三目运算符</h6>
```javascript
// 第一个操作数为真取100，不成立取200
var res1 = true ? 100 : 200;
console.log(res1); //100

```

<h3 id="r4ftG">运算符优先级</h3>
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

1. 一元运算符  逻辑非`!`
2. 算数运算符  幂运算符`**`>乘除`*``/`>加减`+``-`
3. 关系比较运算符 `>,>=,<,<=`>`==,===``!=,!==`
4. 逻辑 (`&&`>`||`)
5. 三元运算符
6. 赋值运算符
7. 逗号运算符

:::color2
小括号提高优先级

:::

<h2 id="KwhEx">流程控制结构</h2>
<h3 id="PuA2F">分支结构</h3>
<h4 id="IF5Bs">单向分支</h4>
```javascript
if () {
  
}
```

<h4 id="KZNBX">双向分支</h4>
```javascript
var money = prompt("请输入金额：");
if (money >= 100000) {
  alert("you are rich!");
} else {
  alert("you are poor!");
}
```

三元运算符实现双向分支

```javascript
var money = prompt("请输入金额：");
money >= 100000 ? alert("you are rich!") : alert("you are poor!");
alert (money >= 100000 ? "you are rich!" : "you are poor!");
```

<h4 id="xMFwN">多向分支 </h4>
<h5 id="Gni56">else if</h5>
```javascript
var score = prompt("请输入成绩：");
if (score < 60) {
  alert("不及格");
} else if (score < 70) {
  alert("成绩一般");
} else if (score < 80) {
  alert("成绩良好");
} else if (score < 90) {
  alert("成绩优秀");
} else {
  alert("天才！");
}
```

用户输入验证

```javascript
var score = prompt("请输入成绩：");
if (isNaN(score) || score === "") {
  alert("重新输入！");
} else {
  if (score < 60) {
    alert("不及格");
  } else if (score < 70) {
    alert("成绩一般");
  } else if (score < 80) {
    alert("成绩良好");
  } else if (score < 90) {
    alert("成绩优秀");
  } else {
    alert("天才！");
  }
}
```

<h5 id="cCyAq">switch case</h5>
```javascript
var num = + prompt("输入1-5的数字："); // +转成number类型
switch (num) {  // 使用严格等判断，不会自动进行数据类型转换
  case 1:
    alert("第1");
    break;
  case 2:
    alert("第2");
    break;
  case 3:
    alert("第3");
    break;
  case 4:
    alert("第4");
    break;
  case 5:
    alert("第5");
    break;
  default:
    alert("啥也不是");
}

var month = +prompt("请输入月份：");
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("这个月有31天");
    break;
  case 2:
    alert("这个月有28天");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("这个月有30天");
    break;
}
```

<h5 id="eBe8a">生肖计算器</h5>
```javascript
var year = +prompt("请输入出生年份：");
if (isNaN(year) || year === "") {
  alert("请输入正确的年份");
} else {
  num = year % 12;
  switch (num) {
    case 0:
      alert("猴年");
      break;
    case 1:
      alert("鸡年");
      break;
    case 2:
      alert("狗年");
      break;
    case 3:
      alert("猪年");
      break;
    case 4:
      alert("鼠年");
      break;
    case 5:
      alert("牛年");
      break;
    case 6:
      alert("虎年");
      break;
    case 7:
      alert("兔年");
      break;
    case 8:
      alert("龙年");
      break;
    case 9:
      alert("蛇年");
      break;
    case 10:
      alert("马年");
      break;
    case 11:
      alert("羊年");
      break;
  }
}
```

<h3 id="jwA7B">循环结构</h3>
<h4 id="GBAZf">while循环</h4>
```javascript
var n = 0;
while (n < 10) {
  console.log("hello world!");  // 输出10个hello world
  n++;
}

// 计算100以内所有数字的和
var n = 0;
var sum = 0;
while (n <= 100) {
  sum += n;
  n++;
}
console.log(sum);
```

<h4 id="mkoKW">do while循环</h4>
第一次循环不判断，只要循环次数超过一次，与while循环一样。

```javascript
var n = 0;
do {
  console.log(n);
  n++;
} while (n < 10); //输出0-9
console.log(n); // n=10
```

<h4 id="f2vKm">for 循环</h4>
```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // 10

// 倒叙输出56-43
for (var n = 56; n >= 43; n--) {
  console.log(n);
}
```

使用两个循环标记变量

```javascript
var x, y;
for (x = 1, y = 1; x < 5, y < 10; x++, y++) { //逗号运算符，表达式结果为后一个操作数的值
  console.log("x=", x, "y=", y); 
}
console.log("循环结束后x=", x, "y=", y); //x= 10 y= 10

```

![](https://cdn.nlark.com/yuque/0/2025/png/38410155/1739441010457-9045c7af-07b0-47d7-849f-615f2cbf253f.png)

```javascript
//取大雨0.59且小于0.61的随机数
var rand = Math.random();
for (rand; rand >= 0.61 || rand <= 0.59; rand = Math.random()) {
  console.count();
}
console.log(rand);
```

<h5 id="ySjod">js生成table</h5>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      table {
        width: 800px;
        table-layout: fixed;
        border-collapse: collapse;
        border: 1px solid black;
        text-align: center;

      }
      td {
        padding: 10px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <script>
      var row = +prompt("请输入表格的行数：");
      var col = +prompt("请输入表格的列数：");
      document.write("<table>");
      document.write("<tbody>");
      for (var i = 0; i < row; i++) {
        document.write("<tr>");
        for (var n = 0; n < col; n++) {
          document.write("<td>" + n + "</td>");
        }
        document.write("</tr>");
      }
      document.write("</tbody>");
      document.write("</table>");
    </script>
  </body>
</html>

```

<h5 id="CKcuA">js生成九九乘法表</h5>
<h6 id="KJ3Xf">第一种</h6>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      table {
        width: 800px;
        table-layout: fixed;
        border-collapse: collapse;
        text-align: center;
      }
      td {
        padding: 10px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <script>
      document.write("<table>");
      document.write("<tbody>");
      for (var i = 1; i < 10; i++) {
        document.write("<tr>");
        for (var n = 1; n < i + 1; n++) {
          var text = n + "✖️" + i + "=" + i * n;
          document.write("<td>" + text + "</td>");
        }
        document.write("</tr>");
      }
      document.write("</tbody>");
      document.write("</table>");
    </script>
  </body>
</html>
```

![](https://cdn.nlark.com/yuque/0/2025/png/38410155/1739444397089-032e9596-c5be-4286-8dae-f473932ef06b.png)

<h6 id="Yn67L">第二种</h6>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      table {
        width: 800px;
        table-layout: fixed;
        border-collapse: collapse;
        text-align: center;
      }
      td {
        padding: 10px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <script>
      document.write("<table>");
      document.write("<tbody>");
      for (var i = 1; i < 10; i++) {
        document.write("<tr>");
        for (var n = 1; n < 10 - i + 1; n++) {
          var text = n + "✖️" + (10 - i) + "=" + (10 - i) * n;
          document.write("<td>" + text + "</td>");
        }
        document.write("</tr>");
      }
      document.write("</tbody>");
      document.write("</table>");
    </script>
  </body>
</html>

```

![](https://cdn.nlark.com/yuque/0/2025/png/38410155/1739444671752-256a93f9-bacd-4224-862a-31d34fb4bfca.png)

<h6 id="S5ylE">第三种</h6>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      table {
        width: 800px;
        table-layout: fixed;
        border-collapse: collapse;
        text-align: center;
      }
      td {
        padding: 10px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <script>
      document.write("<table>");
      document.write("<tbody>");
      for (var i = 1; i < 10; i++) {
        document.write("<tr>");
        for (var j = 1; j < 10 - i; j++) {
          document.write("<td style='border: none;'></td>");
        }
        for (var n = 1; n < i + 1; n++) {
          var text = n + "✖️" + i + "=" + i * n;
          document.write("<td>" + text + "</td>");
        }
        document.write("</tr>");
      }
      document.write("</tbody>");
      document.write("</table>");
    </script>
  </body>
</html>

```

![](https://cdn.nlark.com/yuque/0/2025/png/38410155/1739446044802-f7d4578e-1992-4d95-8cf7-2b6edcecf721.png)

<h6 id="u5ww3">第四种</h6>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      table {
        width: 800px;
        table-layout: fixed;
        border-collapse: collapse;
        text-align: center;
      }
      td {
        padding: 10px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <script>
      document.write("<table>");
      document.write("<tbody>");
      for (var i = 1; i < 10; i++) {
        document.write("<tr>");
        for (var j = 1; j < i; j++) {
          document.write("<td style='border: none;'></td>");
        }
        for (var n = 1; n < 10 - i + 1; n++) {
          var text = n + "✖️" + (10 - i) + "=" + (10 - i) * n;
          document.write("<td>" + text + "</td>");
        }
        document.write("</tr>");
      }
      document.write("</tbody>");
      document.write("</table>");
    </script>
  </body>
</html>

```

![](https://cdn.nlark.com/yuque/0/2025/png/38410155/1739446456698-03cf13ab-abfb-41f5-be26-23d24b252c3e.png)

<h4 id="dl6mn">跳转语句</h4>
<h5 id="QFWeI">continue</h5>
跳出本次循环，后面语句不再执行，进入下一个循环。

<h5 id="giBzB">break</h5>
结束整个循环体。

<h2 id="mDK2W">数组 Array</h2>
1. 数组是值的**有序**集合。
2. 组成数组的成员成为元素。
3. 每个元素的位置用数字表示，称为索引（下标），从0开始的连续数字，最大为2^32-2。

<h3 id="W6AJz">如何创建数组</h3>
<h4 id="kdbGc">直接量方式</h4>
```javascript
var array = [1,2,3,4,5];
var array = ['北京','上海','广州','深圳'];
```

<h4 id="GxDef">Array函数方式</h4>
```javascript
var arr = Array(1,2,3,4,5);

var arr2 = Array(5); // 创建一个由5个空元素组成的数组
```

<h4 id="z6dca">Array构造函数方式</h4>
```javascript
var arr = new Array(1,2,3,4,5);

var arr2 = new Array(5); // 创建一个由5个空元素组成的数组
```

<h3 id="da3p2">数组的增删改查</h3>
<h4 id="Ce7P3">改查（读写）</h4>
```javascript
var arr = ["h", "e", "l", "l", "o", [1, 2, 3]];
// 读取元素
console.log(arr[1]); // e
var text = arr[0] + arr[1];
console.log(text);  // he
console.log(arr[5][0]); // 1
console.log(arr[6]); // undefined

//修改元素
arr[5][0] = 120;
console.log(arr[5][0]); // 120
arr[6] = 250; // 添加一个新元素
console.log(arr);
```

<h4 id="Rsliz">增添元素</h4>
```javascript
var nameList = ["张三", "李四", "王五", "赵六"];

nameList[nameList.length] = "刘七";

// push()方法，在数组后面添加一个或多个元素
nameList.push("周瑜");
nameList.push("钱九", "孙十");
console.log(nameList);

// unshift()方法，在数组前面添加一个或多个元素
nameList.unshift("吴十一");

// splice()指定位置添加一个或多个新元素
nameList.splice(6, 0, "郑"); // 第一个参数是索引，第二个参数为0是添加
```

<h4 id="UGvoM">删除元素</h4>
```javascript
var nameList = [
  "张三",
  "李四",
  "王五",
  "赵六",
  "刘七",
  "郑",
  "周瑜",
  "钱九",
  "孙十",
  "吴十一",
];
// 修改数组的length属性
nameList.length -= 1;
console.log(nameList);

// pop()方法删除最后一个元素，不能删多个
nameList.pop();

// shift()删除第一个元素，不能删多个
nameList.shift();

// 删除指定位置一个或连续多个元素
nameList.splice(3, 1); // 删除索引为3的元素
nameList.splice(3, 2); // 删除索引从3开始的连续两个元素
```

<h3 id="mdBIu">稀疏数组</h3>
<h4 id="UGRIJ">什么是稀疏数组</h4>
在 JavaScript 中，稀疏数组只是一种数组，其中部分索引是未定义的或未被分配值。与普通的“密集数组”不同，稀疏数组的某些索引上没有实际的元素(即没有显式分配值)，但这些索引在逻辑上是存在的。

<h4 id="Knzxd">哪些方式会产生稀疏数组？</h4>
1. 给数组添加新元素，索引与前面不连续
2. 使用构造函数如`var arr2 = new Array(5)`
3. 修改数组的length属性，值比原来大

<h3 id="YL6x8">数组操作案例</h3>
<h4 id="OQR8l">计算数组中所有元素和</h4>
```javascript
var arr = [12, 34, 55, 94, 181, 90];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("sum =", sum);
```

<h4 id="AWRK3">计算数组中元素的平均数</h4>
```javascript
var arr = [12, 34, 55, 94, 181, 90];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("sum =", sum);
console.log("avg =", sum / arr.length);
```

<h4 id="DOAbe">找出数组中最大/最小的数</h4>
```javascript
var max, min;
max = min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= max) max = arr[i];
  if (arr[i] <= min) min = arr[i];
}
console.log("min = ", min, "max =", max);
```

<h3 id="JhIp4">字符串的某些数组特性</h3>
```javascript
var msg = "hello 高小乐666。";
console.log("字符串长度：", msg.length);
console.log("第一个字符：", msg[0]);
console.log("最后一个字符：", msg[msg.length - 1]);
for (var i = 0; i < msg.length; i++) {
  console.log(msg[i]);
}

// 不具备的数组特性
// 不能修改某个字符
msg[0] = "H";
console.log(msg); // hello 高小乐666。
// 不能删除某个字符
msg.length -= 5;
console.log(msg); // hello 高小乐666。
```

<h3 id="nnKlw">数组排序 sort</h3>
```javascript
var nums = [98, 33, 45, 23, 11, 596, 67];
nums.sort(function (next, prev) {
  return next - prev; // 升序 返回小于零，交换两个数的位置
});
console.log(nums);

nums.sort(function (next, prev) {
  return prev - next; // 降序
});
console.log(nums);
```

<h2 id="s8b7b">函数</h2>
<h3 id="JzmgM">函数的概念</h3>
1. 函数是具有某种特定功能的代码块。
2. 函数是js中的一种数据类型，属于对象类型，使用typeof判断可以得到function。

```javascript
console.log(typeof Number); // function
console.log(typeof Number()); // number
console.log(typeof new Number()); // object
```



<h3 id="szYYk">函数的组成</h3>
<h4 id="TT4SB">函数名</h4>
通过`函数名()`调用函数。

```javascript
Number；// 函数名就是变量名，变量的值是function类型的数据
Number = 100; // 可以修改变量的值
```

<h4 id="VVSYQ">函数体</h4>
函数中的代码块

<h4 id="phycz">参数</h4>
用于向函数内传送数据，分为形参和实参。

<h4 id="vYqbU">返回值</h4>
函数的计算结果，是函数调用表达式的值。



















<h3 id="EHEMy">创建函数的方式</h3>
<h4 id="nolsP">function关键字</h4>
```javascript
function myFun(name) {
  console.log("hello my name is", name);
}
myFun("kade");

// 有返回值的函数
function myFun01(num1, num2) {
  return num1 * num2;
}
var res = myFun01(100, 200);
console.log(res);
```

<h4 id="HWlTv">表达式方式</h4>
```javascript
var fun01 = function (num1, num2) {
  return num1 + num2;
};
var res = fun01(100, 200);
console.log(res);
```

<h4 id="kkZ3G">Function函数方式</h4>
```javascript
var fun01 = Function('console.log("hello fun01!")');
fun01();

var fun02 = Function("name", 'console.log("hello " + name +"!")');
fun02("fun02");
```

<h4 id="DjkOa">Function构造函数方式</h4>
```javascript
var fun03 = new Function('console.log("hello fun03!")');
fun03();

var fun04 = new Function("name", 'console.log("hello " + name +"!")');
fun04("fun04");
```

<h3 id="X3Knp">函数的调用和返回值</h3>
<h4 id="w7e1v">函数调用</h4>
1. 函数名后跟上()才是调用，函数体语句才能执行。
2. 函数名后面没有()，则在使用该变量的值。

<h4 id="ZRpDq">函数的返回值</h4>
1. 函数体中没有return或者return后面是空的，表示该函数没有返回值，调用输出时是undefined。
2. return表示结束所在的函数，return后面的代码不再执行。

```javascript
var fun1 = function () {
  console.log(666);
};
var res1 = fun1;
var res2 = fun1(); // 调用fun1输出666
console.log(res1); // 输出fun1函数
console.log(res2); // undefined
console.log(fun1()); // 先调用fun1输出666 再输出返回值undefined
```

<h3 id="JHICE">形参和实参</h3>
调用函数时传递的参数是实参

创建函数时使用的参数是形参，形参是没有赋值的变量

<h4 id="RgppY">数量问题</h4>
```javascript
function func(name1, name2) {
  console.log(name1 + "和" + name2 + "跳舞");
}

func("张", "王");

// 实参 > 形参，按照顺序赋值
func("张", "王", "李");
// 实参 < 形参，自动得到undefined
func("张");
```

<h4 id="npElg">形参的默认值（可选参数）</h4>
<h5 id="QZqCH">ES5方式</h5>
```javascript
// 有默认值的形参放在后面
function func(name1, name2) {
  if (name2 === undefined) {
    name2 = '李四';
  }
  console.log(name1 + "和" + name2 + "跳舞");
}
```

<h5 id="RNBTF">ES6方式</h5>
```javascript
function func(name1, name2 = "李四") {
  console.log(name1 + "和" + name2 + "跳舞");
}
func("张");
func("张", "王");
```

<h4 id="PXnqL">arguments</h4>
1. 系统创建的变量，只能在函数里面使用。
2. 是一个伪数组，值为传进去的实参。
3. 应用：可变参数，如push方法。

```javascript
function func(arg1, arg2) {
  console.log(arg1, arg2); // 100 200
  console.log(arguments[2]); // hello
}
func(100, 200, "hello");
```

<h3 id="nHpHn">作用域</h3>
<h4 id="Mv1LQ">变量的作用域</h4>
1. 变量的可作用范围，一个变量只能在作用域内才能使用。
2. 根据作用域可以将变量分为全局变量和局部变量。

<h5 id="nWeOU">全局变量</h5>
在函数外面创建的变量

```javascript
// for if while语句内的变量是全局的
for (var i = 0; i <= 10; i++) {
  var age = i + 10;
  // i和age是全局变量
}
console.log(age); // 20
console.log(i); // 11
```

<h5 id="pPCWk">局部变量</h5>
在函数内部创建的变量

```javascript
function func () {
  var address = '上海';
  age = 10;  // 这里的age没有使用var创建，是全局变量，设计缺陷不建议使用
  console.log(address);
  console.log(age);

}
func();
console.log(age);

```

<h5 id="uoihD">作用域练习</h5>
```javascript
var username = "高小乐";
var userage = 100;
function fn() {
  var username = "曹操";
  username = "孙悟空";
  userage = 200;
  console.log(username); // 孙悟空
  console.log(userage); // 200
}
fn();
console.log(username); // 高小乐
console.log(userage); // 200
// -------------------------------------------
var num1 = 100;
var num2 = 200;
function fun(num1, num2) {
  num1 *= 2;
  num2 *= 2;
  console.log(num1);  // 200
  console.log(num2);  // 400
}
fun(num1, num2);
console.log(num1);  // 100
console.log(num2);  // 200
```

<h4 id="wY6ZN">作用域链</h4>
1. 在函数体中再创建函数，即函数嵌套声明时，形成了作用域链。
2. 当使用变量的时候，先从本作用域中查找，如果有到此为止，如果没有再去上层作用域查找，以此类推直到全局。
3. 如果全局也没有创建该变量，报错。

变量创建角度：

变量创建之后，可以在本作用域使用，也可以在下层作用域中使用。

```javascript
var username = "高小乐";
var age = 100;
var address = "上海";
var job = "coder";

function func01() {
  // fun01作用域
  var username = "孙悟空";
  var age = 200;
  var address = "北京";

  function func02() {
    // fun02作用域
    var username = "李逵";
    var age = 300;

    function func03() {
      // fun03作用域
      var username = "贾宝玉";
      console.log(username); // 贾宝玉
      console.log(age);      // 300
      console.log(address);  // 北京
      console.log(job);      // coder
    }
    func03();
  }
  func02();
}
func01();
```

**<font style="color:#DF2A3F;">一个变量的作用域只与函数声明的位置有关，域函数调用的位置无关！</font>**

```javascript
var age = 100;

function fn() {
  console.log("fn: ", age);
}

function func() {
  var age = 200;
  fn();  // fn上一级是全局作用域，会在全局中查找age，而不是在func中查找
}

func(); // fn: 100
```

<h3 id="S96XY">变量提升</h3>
1. 全局代码执行之前进行预处理，会查找全局代码中的`var`关键字，提前将变量创建好，但是不赋值。
2. 正式执行声明变量的代码时，仅仅进行赋值操作。 
3. 将变量的创建提升到了所在作用域的最前面，不会改变变量的作用域。

```javascript
console.log(address);  // undefined

var address = "上海";
console.log(address);  // 上海
```

函数调用时，执行函数体语句前也会进行预处理，会查找函数体中的var关键字。

```javascript
function func() {
  console.log(num);  // undefined
  var num = 100;
  console.log(num);  // 100
}

func();  // 函数调用时，在执行之前也会进行变量提升
```

<h5 id="HWEbO">练习</h5>
```javascript
var count = 100;
var message = "What";
// 创建函数
function fn() {
  console.log(count); // undefined 本作用域有count，不看外面的count
  console.log(message); // What 本作用域没有message，找外面的message

  var count = 200;
  message = "Where";  // 修改了全局中的message

  console.log(count); // 200
  console.log(message); // Where
}
// 调用函数
fn();
// 输出变量
console.log(count); // 100
console.log(message); // Where
```

<h3 id="xb0Mp">函数提升</h3>
`function`关键字声明的变量，在预处理阶段，创建好变量并赋值。

正式执行到该语句的时候什么都不干，直接跳过。

```javascript
console.log(fn01); // 输出函数本身 函数全部提升
fn01(); // 可以调用

console.log(fn02); // undefined
fn02(); // 不可以调用 fn02 is not a function

function fn01() {
  console.log("fn01:");
}

// 使用var关键字创建函数，不能整体提升 正式执行时仅仅进行赋值
var fn02 = function () {
  console.log("fn02");
};
```

<h4 id="LTked">var和function</h4>
1.  先找var，再找function
2.  创建一个address，没有值
3.  找到function 发现已经创建好了address，直接赋值
4.  一个作用域下只能有一个同名的变量

```javascript
// 使用变量
console.log(address); // 函数本身

var address = "北京";

function address() {
  console.log("我是函数address");
}

console.log(address); // 北京 执行到var时，进行赋值，会覆盖函数
address(); // address is not a function 此时值为北京
```

```javascript
var num = 10;
function fun() {
  var num = 20;
  fun2();
}
function fun2() {
  console.log(num);
}

fun(); // 10
```

<h3 id="bNGkk">匿名函数</h3>
没有名字的函数，是函数的直接量形式。

匿名函数适合用于立即调用的函数和回调函数。



```javascript
(function () {
  console.log("匿名函数");
})();

// (函数直接量)() = 函数名()
```

<h3 id="mTCZ5">立即调用的函数（IIFE）</h3>
主要是为了创建一个局部的作用域，避免全局变量污染

```javascript
(function () {
  var address = "上海";
  console.log("我是匿名的立即调用的函数");
})();
console.log(address);  // address is not defined
```

多个IIFE如果不加分号会出现语法错误，会将<font style="background-color:#FBDE28;">(function(){})()</font>() 解析为：<font style="background-color:#FBDE28;">函数返回值</font>()

不写分号的解决方案

```javascript
(function () {
  console.log("我是匿名的立即调用的函数");
})()// 在写多个立即调用函数时，如果不写分号，会出现语法错误
  // (function(){})()() 解析为：函数返回值()

//在前面加上一元运算符，表示后面的是一个整体，可解决
!(function () {
  console.log("我是匿名的立即调用的函数");
})();
```

<h3 id="xi0z4">回调函数（callback）</h3>
什么是回调函数

1. 函数是我定义的。
2. 我没有调用（没有直接调用）。
3. 函数最终执行了。

```javascript
var nameList = ["sd", "ee", "dfd", "iio", "kd"];
nameList.forEach(function () {
  console.log("被调用"); // 匿名函数作为一个回调函数 
});
```

回调函数的使用场景 

1. 数组的一些方法，如forEach，sort，filter，map，reduce等
2. 定时器的回调函数
3. DOM事件的回调函数
4. Ajax的回调函数
5. Promise的回调函数

<h3 id="TtbQE">高阶函数</h3>
<h4 id="GjY5x">返回值是函数</h4>
```javascript
function func() {
  var res = 100 * 2323;
  return function () {
    console.log(res);
  };
}
func()();  // 232300
```

<h4 id="kaP8s">参数是函数</h4>
```javascript
function fun01(db) {
  db(100, 200); // 实参
}
fun01(function (a, b) { // 形参
  console.log("我是回调函数:", a, b);
});
```

<h4 id="lfYWf">参数是函数，返回值也是函数</h4>
```javascript
function func02(num1, num2, cb) {
  return cb(num1, num2);
}
var res = func02(100, 200, function (a, b) {
  return a - b;
});
console.log(res); // -100
```

<h3 id="z5ucB">递归函数</h3>
<h4 id="YLMax">什么是递归函数</h4>
1. 函数体代码中自己调用自己，称为递归调用
2. 存在递归调用的函数就是递归函数

<h4 id="Mv7pu">递归成功的条件</h4>
1. 需要结束递归的条件
2. 随着递归次数增加，条件要趋向于结束递归

```javascript
// 阶乘递归版
function factorial(n) {
  if (n <= 2) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));
```

```javascript
function func(n) {
  console.log(n);
  if (n > 1) {
    func(n - 1);
  }
  console.log(n);
}
func(3); // 321123
```

<h4 id="Xhw7p">递归的缺点</h4>
1. 很容易发生内存泄漏而调用失败。
2. 效率不高

<h4 id="gzqGW">应用场景</h4>
后段处理文件夹操作：

删除文件夹以及里面的内容

复制文件夹以及里面的内容

剪切文件夹以及里面的内容

<h4 id="RwbIz">练习</h4>
```javascript
// 拉平数组
var nums = [
  [1000, 2000, 3000],
  "hello",
  [[10, 20, 30], ["a", "b", ["A", "B", "C"]], "小乐"],
  12313,
  [101, 202, 303],
];
function func(arr, res = []) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      func(arr[i], res);
    } else {
      console.log(arr[i]);
      res.push(arr[i]);
    }
  }
  return res;
}
var res = func(nums);
console.log(res);
```

<h2 id="peL5A">对象</h2>
<h3 id="t1ICN">Object 类型</h3>
1. Object类型的数据是值的无序集合
2. Object类型的数据由属性组成，属性由属性名和属性值
3. 属性值可以是任何类型的数据，属性名用字符串表示，符合变量命名规范可以不用加引号
4. 如果属性值是一个函数，该属性可以被称为方法

<h3 id="AtYCl">如何让创建 Object</h3>
<h4 id="Eza0y">直接量方式</h4>
```javascript
var obj2 = {
  username: "高小乐",
  age: 67,
  "home-address": "上海",
  friends: ["刘姥姥", "欧阳姥姥", "司马姥姥"],
  child: {
    name: "高小小乐",
    age: 37,
  },
  getInfo: function () {
    console.log("obj2 getInfo");
  },
  eat: function () {
    console.log("高小乐爱吃");
  },
};
```

<h4 id="Uhfl5">使用Object函数</h4>
```javascript
var obj2 = Object();
```

<h4 id="NgcLj">使用构造函数</h4>
```javascript
var obj2 = new Object();
```

<h3 id="A7IOv">Object 读写</h3>
<h4 id="lsZfP">`.`语法</h4>
```javascript
console.log(obj2.username);
console.log(obj2.job);  // undefined
obj2.child.name;
```

<h4 id="L6SWe">`[]`语法</h4>
```javascript
console.log(obj2['username']);
console.log(obj2['job']);  // undefined
obj2['getInfo']();
```

<h5 id="POr5q">必须使用`[]`的情况</h5>
1. 属性名不符合变量命名规范

```javascript
obj2.home-address // 报错
obj2['home-address']
```

2. 用变量表示属性名

```javascript
var prop = "friends";
console.log(obj2[prop]);
```

<h4 id="vjtSL">练习</h4>
```javascript
var users = [
  { name: "曹操", age: 67, address: "许昌" },
  { name: "刘备", age: 47, address: "成都" },
  { name: "孙权", age: 37, address: "南京" },
  { name: "吕布", age: 51, address: "包头" },
  { name: "赵云", age: 46, address: "石家庄" },
  { name: "诸葛亮", age: 52, address: "南阳" },
];

users.sort(function (next, prev) {
  return next.age - prev.age;  // 按年龄升序排序
});
console.log(users);

```

<h3 id="zFSbC">遍历Object对象的属性</h3>
```javascript
for (var item in obj) {
  console.log(item, obj[item]);
}
// item是属性名 obj[item]才是属性值
```

<h3 id="Kd5ZG">删除对象中的属性</h3>
```javascript
delete obj.eat;
delete obj['eat'];
```

<h3 id="AAaYd">判断对象中是否存在某个属性</h3>
```javascript
// in 关键字判断 结果为布尔值
console.log("friends" in obj);
```

<h2 id="RtlTh">构造函数</h2>
<h3 id="qnULj">构造函数的定义</h3>
构造函数对对象进行描述，描述对象的特点，每个对象都有构造函数。

> 构造函数对应的是数据类型
>

构造函数是对象的描述，对象是构造函数的实例

一个构造函数可以对应无数个对象，一个对象只能对应一个构造函数

<h3 id="PwSOm">判断对象的构造函数</h3>
<h4 id="ehEGV">`instanceof`返回布尔值</h4>
```javascript
var arr = [10, 20, 30, 40, 50];
var fn = function () {};
var user = { name: "hhhha", age: 100 };
var date = new Date();

console.log(arr instanceof Date); // false
```

<h4 id="jsIAa">`constructor`属性</h4>
每个对象都有`constructor`属性，可获取该对象的构造函数。

```javascript
console.log(arr.constructor);
console.log(arr.constructor === [].constructor); // true
```

<h3 id="Cj5rk">实例化</h3>
`new`构造函数();

每实例化一次构造函数就会产生一个新对象。

直接量创建数组其实是`new Array()`的简写

```javascript
var arr = []; // 相当于new Array();
var obj = {}; // 相当于new Object();
```

<h3 id="EJ3lB">自定义构造函数</h3>
```javascript
function User(name, age, address) {
  // 设置User实例的属性
  this.name = name;
  this.age = age;
  this.address = address;
  this.addShopCar = function (product) {
    console.log(this.name + "将" + product + "加入购物车");
  };
  this.buy = function (product) {
    console.log(this.name + "购买了" + product);
  };
}
var u1 = new User("高小乐", 18, "上海");
console.log(u1);
u1.addShopCar("奶粉");
```

<h4 id="qHawa">构造函数的返回值对实例化结果的影响：</h4>
1. 如果返回值是原始数据类型，则无影响，实例化的结果就是创建的新对象。
2. 如果返回值是对象类型的数据，则实例化的结果是return的数据。

```javascript
function Product() {
  return [1, 2, 3, 4];
}
var p = new Product();
console.log(p); // [1,2,3,4]
```

调用和实例化的结果一样

```javascript
function User() {
  return function () {}; // return一个对象类型的数据
}
var user1 = new User();
var user2 = User();
console.log(user1);
console.log(user2);
```

<h3 id="JIQJS">原始类型数据的对象特性</h3>
`Number`、`String`、`Boolean`既有值的状态，也有对象的状态。

```javascript
var num1 = 5;           // 值的状态
var num2 = Number(15);  // 值的状态
var num3 = new Number(25);  // 对象的状态
// 无论处于什么状态，需要什么形式自动转化
console.log(num1*num3);
console.log(num2);
console.log(num3);

num1.constructor; // 自动包装成对象

5..constructor; // 5.constructor会解析为小数点
```

原始数据类型临时包装成对象

```javascript
var msg = "";
// 临时 new String(msg) 创建对象，添加address属性，用完即毁
msg.address = "上海";

// 又临时创建new String(msg) 读取address属性，用完即毁
console.log(msg.address); // undefined
```

<h2 id="lJnGY">this</h2>
<h3 id="vyKQV">含义</h3>
1. this可以认为是系统内置的只读变量，不可修改。
2. this的值在不同的地方值不一样。

<h3 id="jRwYJ">window</h3>
1. `window`表示浏览器窗口，运行在浏览器上的js，`window`是全局对象
2. 在打开浏览器的时候，`window`对象就自动创建了
3. 所有的全局变量都是`window`的属性
4. `Number`、`String`、`Boolean`、`Object`、`Array`、`Function`都是全局变量

```javascript
var arr = [1, 2, 3];
console.log(window.arr);
```

<h3 id="XEPZx">this的指向</h3>
1. 在函数外面使用（全局下），this的指向是window
2. 在构造函数内部使用，this的指向是构造函数的实例
3. 在函数（方法）中使用，this的值是调用该函数（方法）的对象，看最直接调用的对象，没有`.`就是window

```javascript
var user = {
  name: "sds",
  age: 10,
  getInfo: function () {
    console.log("getInfo");
    console.log(this);
    console.log(this.name);
  },
  friend: {
    name: "cc",
    say: function () {
      console.log("say");
      console.log(this);
      console.log(this.name);
    },
  },
};

user.getInfo();
console.log();
user.friend.say();
// ===============================================
var name = "龙傲天";
function func() {
  console.log("func");
  console.log(this);
  console.log(this.name);
}
func();
console.log("");

var drink = user.getInfo;
drink(); // this指向 window
console.log("");

user.friend.eat = func;
user.friend.eat();  // 指向 cc 这个对象
```

```javascript
var name = "222";
var a = {
  name: "111",
  say: function () {
    console.log(this.name);
  },
};
var fun = a.say;
fun();     // 222
a.say();   // 111

var b = {
  name: "333",
  say: function (func) {
    func();  // 这里调用，没有.，所以是window调用
  },
};
b.say(a.say);  // 222 看15行
b.say = a.say;
b.say();       // 333


// ============================================================
var foo = 123;
function print() {
  this.foo = 234;
  console.log(foo);
}
print();  // 234

// ============================================================

var a = 5;
function test() {
  a = 0;
  console.log(a);
  console.log(this.a);
  var a;
  console.log(a);
}
test();  // 0 5 0

new test(); // 0 undefined 0 
// 创建了一个新对象，this指向这个对象，新对象中没有a属性，自动得到undefined
```

<h3 id="o9cJv">全局变量是window的属性</h3>
```javascript
console.log(window.address);  // undefined 符合属性规则
console.log(address);  // 报错 变量不存在 符合变量规则
```

<h2 id="CQ3a7">原型</h2>
<h3 id="mNQKJ">原型的概念</h3>
1. 每个对象都有原型，原型也是对象
2. 对象可以使用原型上的属性（继承）

<h3 id="JVLmY">如何获取对象的原型</h3>
`对象.__proto__`（隐式原型才是对象的原型）

```javascript
console.log(arr.__proto__);
```

`对象构造函数.prototype`（显式原型）

```javascript
console.log(Array.prototype);
console.log(arr.__proto__ === Array.prototype); // true
```

<h3 id="mZqEH">对象、构造函数、原型之间的关系</h3>
<h4 id="Hin5o">构造函数和对象</h4>
1. 构造函数是对象的描述（设计理念），对象是构造函数的实例。
2. 一个构造函数可以有无数个对象，一个对象只能有一个构造函数

<h4 id="BcXPB">对象和原型</h4>
1. 每个对象都有原型，可以使用原型上的属性和方法
2. 一个对象只能有一个原型，一个原型可以作为多个对象的原型

<h4 id="etazJ">构造函数和原型</h4>
1. 可以通过构造函数获取到对象的原型
2. 构造函数相同的对象，原型也是相同的；相同数据类型的对象，原型相同

<h3 id="taeM6">自定义构造函数时原型的应用</h3>
```javascript
function User(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
// 将方法添加到User的实例的原型
User.prototype.addShop = function (product) {
  console.log(this.name + "将" + product + "添加购物车");
};

User.prototype.buy = function (product) {
  console.log(this.name + "购买了" + product);
};

var u1 = new User("高小乐", 30, "上海");
var u2 = new User("高小小乐", 10, "北京");

u1.addShop("洗衣粉");
u1.buy("肥皂");

u2.addShop("方便面");
u2.buy("火腿肠");
```

<h3 id="foPH6">判断属性是否属于对象本身</h3>
`对象.hasOwnProperty('属性名')`

```javascript
var arr01 = [10, 20, 30, 40];
console.log(arr01.hasOwnProperty("length"));  // true
console.log(arr01.hasOwnProperty("push"));  // false

// 用 in 判断无论属性在对象还是在原型上都会返回 true
```

<h3 id="wa8tw">创建对象的同时设置原型</h3>
`Object.create()`

```javascript
var obj = {};
console.log(obj); // 原型存在，创建对象时进行绑定

var obj2 = Object.create([1, 2, 3, 4]); // 括号中填写原型
console.log(obj2);
var obj3 = Object.create(new String("hello"));
console.log(obj3);

// 创建没有原型的对象
var obj4 = Object.create(null);
console.log(obj4);
```

<h3 id="oCM7T">原型链</h3>
原型链描述了属性的查找过程。

每个对象都有原型，原型也是一个对象（Object），即原型也有自己的原型，由此组成了一个原型链。原型链的顶层为`Object.prototype`，`Object.prototype.__proto__`的值为`null`。

<h4 id="XNtfH">原型链的作用</h4>
1. 对象在查找属性的时候，先从自身去找看有没有这个属性，如果有，直接使用这个属性的值。
2. 如果没有，会沿着原型链向上找，如果找到就使用这个属性的值且停止查找，如果没找到继续向上找直到原型链的终点。
3. 如果找到原型链的终点还没有找到，就返回 undefined

```javascript
var arr = [1, 2, 3];
var obj = {};
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__ === obj.__proto__); // true
```

```javascript
var func = function () {};
var f1 = new func();
console.log(f1.__proto__ === func.prototype);
console.log(Object.prototype === func.prototype.__proto__);
```

![画板](https://cdn.nlark.com/yuque/0/2025/jpeg/38410155/1739879407375-1eb1a745-d896-4ca1-9e2e-b3d4fe10bc7e.jpeg)

<h3 id="ElHf2">原型和构造函数</h3>
`Object`的原型是`Function.prototype`，`Function.prototype`的构造函数是`Object`。

```javascript
// Array自己的原型
console.log(Array.__proto__ === Function.prototype); // true

// Array实例的原型
console.log(Array.prototype);

// 特殊的
console.log(Object.__proto__.__proto__ === Object.prototype);

console.log(Function.__proto__ === Function.prototype);
```



![画板](https://cdn.nlark.com/yuque/0/2025/jpeg/38410155/1739882850807-b7273374-6168-4304-8782-556393c0d07a.jpeg)

```javascript
var arr = [];
Array.prototype.username = "ggg";
Function.prototype.age = 10;
Object.prototype.address = "北京";
// arr --> Array.prototype --> Object.prototype
console.log(arr.username); // ggg
console.log(arr.age); // undefined
console.log(arr.address); // 北京
// Array --> Function.prototype --> Object.prototype
console.log(Array.username); // undefined
console.log(Array.age); // 10
console.log(Array.address); // 北京
// user --> fn.prototype --> Object.prototype
var fn = function () {};
var user = new fn();
console.log(user.__proto__ === fn.prototype); // true
console.log(fn.__proto__ === Function.prototype); // true
```

<h3 id="z7Gj5">instanceof 和原型链</h3>
如果第二个操作数是对象原型链上某个对象的构造函数也成立

```javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object);  // true
console.log(arr instanceof Function);  // false
```

<h3 id="t22om">`constructor`属性</h3>
原型上的`constructor`方法是给实例使用的，不是给构造函数使用的。

假如`a`的原型是`b`，那么`b.constructor`的值也是`a.constructor`的值。

```javascript
// arr --> Array.prototype --> Object.prototype
var arr = [];
console.log(arr.constructor); // Array 用的是原型上的constructor方法
console.log(Array.prototype.constructor); // Array 用的是自己的constructor方法

console.log(Object.prototype.constructor); // Object
console.log("");
var user = {};
console.log(user.constructor); // Object
```



![画板](https://cdn.nlark.com/yuque/0/2025/jpeg/38410155/1739886391226-d2d90f37-a834-4745-993c-1bbadb29af78.jpeg)

<h2 id="uCXFy">值类型和引用类型</h2>
<h3 id="tnvOB">概念</h3>
值类型： 原始类型数据也叫值类型，传值方式是值传递

引用类型： 对象类型数据也叫引用类型，传值方式是引用传递（地址传递）

区别：

1. 内存存储方式

   值类型： 存储在栈结构

   引用类型： 存储在堆结构，栈结构中存储的是地址

2. 赋值方式（传值方式）

   值类型： 值传递

   引用类型： 引用传递（地址传递）

3. 可变和不可变

   值类型： 也叫不可变类型，值类型都是整体，不能修改其中的一部分。

   引用类型： 也叫可变类型，引用类型是集合，可以修改其中的某个属性，修改完之后还是原来的对象

4. 判等方式

   值类型：只要值是相同的，两个数据就相等

   引用类型：只有**地址相同**，两个数据才相等。 

```javascript
console.log({ name: "qq" } === { name: "qq" }); // false
```

<h2 id="amW8E">标准内置对象（内置构造函数）</h2>
<h3 id="vWA5Z">Boolean</h3>
```javascript
// 直接量方式
true;
false;

// 函数方式
Boolean(true);
Boolean(false);

// 构造函数方式 默认对象状态
new Boolean(true);
new Boolean(false);
```

<h3 id="ztCUl">Number</h3>
<h4 id="iVWwR">实例的属性和方法</h4>
```javascript
// toFixed(); 返回指定小数位数的字符串类型数字，四舍五入
var num = 12.34361;
var res = num.toFixed(3);  // 保留三位小数 
console.log(res);

// toString(); 返回字符串
console.log(num.toString());  // 转换成十进制形式
console.log(num.toString(2)); // 转换成二进制形式
console.log(num.toString(8)); // 转换成八进制形式
console.log(num.toString(16)); // 转换成十六进制形式
console.log(num.toString(36)); // 最大转换成三十六进制形式 
```

<h4 id="smit9">构造函数本身的属性和方法</h4>
```javascript
Number.MAX_VALUE; // JS中最大的数 1.7976931348623157e+308
Number.MIN_VALUE; // JS中最小的正数 5e-324
```

<h3 id="SgjxS">String</h3>
<h4 id="IKbmd">实例的属性和方法</h4>
1. `length`：读取字符串长度，字符个数
2. `charAt()`：返回指定位置的字符，参数是指定的索引
3. `indexOf()`：返回指定的内容在字符串中第一次出现的位置（索引），参数就是指定的内容
4. `lastIndexOf()`：返回指定的内容在字符串中最后一次出现的位置（索引），参数就是指定的内容
5. `slice()`：截取字符串并返回，参数指定开始位置和结束位置（结束位置字符不包括在内），不设置第二个参数截取到最后
6. `substring()`：截取字符串并返回，规则同上
7. `substr()`：截取字符串并返回，参数指定开始位置和截取长度，不设置第二个参数截取到最后
8. `split()`：分隔字符串返回数组，参数指定分隔符
9. `toUpperCase()`：将字符串所有字母转为大写并返回，不需要参数
10. `toLowerCase()`：将字符串所有字母转为小写并返回，不需要参数
11. `charCodeAt()`：返回指定位置的字符的unicode编码，参数是指定的索引

```javascript
var msg = "hello world";
// 1.length 获取字符串长度
console.log(msg.length); // 11

// 2.charAt(); 返回字符串第几个字符
console.log("第五个字符：", msg.charAt(4));

// 3.indexOf 返回指定的内容在字符串中第一次出现的位置(索引) 若没有返回-1
console.log(msg.indexOf("o")); // 4
console.log(msg.indexOf("!")); // -1

// 4.lastIndexOf 返回指定的内容在字符串中最后一次出现的位置(索引)
console.log(msg.lastIndexOf("o")); // 7
console.log(msg.lastIndexOf("p")); // -1

// 5.slice(start, end) 截取开始位置到结束位置的字符串，不包括结束位置
console.log(msg.slice(3, 7)); // lo w

// 6.slice(start, end) 截取开始位置到结束位置的字符串，不包括结束位置
console.log(msg.substring(3, 7)); // lo w

// 7.截取字符串并返回，参数指定开始位置和截取长度，不设置第二个参数截取到最后
console.log(msg.substr(3)); // lo world

// 8.split
console.log(msg.split(" ")); // ['hello', 'world']
console.log(msg.split("")); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// 9.toUpperCase
console.log(msg.toUpperCase()); // HELLO WORLD

// 10.toLowerCase
console.log(msg.toLowerCase()); // hello world

// 11.charCodeAt
console.log(msg.charCodeAt(4)); // 111
```

<h4 id="hvaVq">构造函数本身的属性和方法</h4>
`fromCharCode()`

```javascript
// 根据unicode编码返回字符串
console.log(String.fromCharCode(97));
```

<h3 id="fnUrj">Math</h3>
Math 就是系统定义好的对象，是一个 Object 的实例.

`Math.PI`：圆周率

`Math.abs()`：返回绝对值

`Math.pow()`：返回次方数，两个参数

`Math.sqrt()`：返回平方根

`Math.floor()`：返回整数，向下取整

`Math.ceil()`：返回整数，向上取整

`Math.round()`：返回整数，四舍五入

`Math.max()`：返回参数中最大的，参数数量可以是任意个

`Math.min()`：返回参数中最小的，参数数量可以是任意个

`Math.random()`：返回一个随机数，范围是0到1，0可能会被取到，1不可能。

<h4 id="m2YP9">取随机整数： 0 ~ n</h4>
```javascript
console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.floor(Math.random() * 17)); // 0-16
console.log(Math.floor(Math.random() * (n + 1))); // 0-n

// 1-10 ceil
console.log(Math.ceil(Math.random() * 10));
```

<h4 id="Ba3TY">取随机整数： m ~ n</h4>
```javascript
console.log(Math.floor(Math.random() * 8 + 8)); // 8-15
console.log(Math.floor(Math.random() * m + n-m+1));
```

<h3 id="ad9ew">Date</h3>
<h4 id="JERRE">实例化日期时间对象</h4>
```javascript
// 输出当前时间
var d1 = new Date();
console.log(d1);

// 指定时间
var d2 = new Date("December 17, 1995 01:23:34");
console.log(d2);

var d3 = new Date("2008-09-12T19:20:00");
console.log(d3);

// 兼容性最好的写法 月份从0开始算 0代表一月
var d4 = new Date(2002, 9, 1, 10, 30, 12); // Tue Oct 01 2002 10:30:12
console.log(d4);

var d5 = new Date(2002, 9);
console.log(d5);

// 时间戳 1970.1.1 00:00:00 距离目标日期的毫秒数
var d7 = new Date(36000000000); 
console.log(d7); // Mon Feb 22 1971 00:00:00 GMT+0800 (中国标准时间)
```

<h4 id="Iblc0">实例的属性和方法</h4>
```javascript
var d1 = new Date();
// 公元纪年
console.log(d1.getFullYear());
// 月
console.log(d1.getMonth() + 1);
// 星期几
console.log(d1.getDay());
// 日
console.log(d1.getDate());
// 时 分 秒 毫秒
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());
// 时间戳 距离1970年的毫秒数
console.log(d1.getTime());

// getUTC... 零时区 英国
console.log(d1.getUTCFullYear());
console.log(d1.getUTCHours());

// 设置时间set
d1.setFullYear(2000, 2, 10);
console.log(d1);
```

<h4 id="N0vIh">构造函数本身的属性和方法</h4>
```javascript
// 获取当前的时间戳
console.log(Date.now());

// 指定日期的时间戳（零时区）
console.log(Date.UTC(2000, 10, 2));
```

<h3 id="zieOp">Array</h3>
<h4 id="ym63b">实例的属性</h4>
`length`

<h4 id="P4YAC">实例的访问器方法（不改变原数组）</h4>
执行完方法后，结算结果以返回值给出，而调用方法的对象本身不会被修改。

1. `concat()`：将多个数组连接成一个，返回连接好的数组，参数是数组，可以是任意个
2. `slice()`：截取数组中一部分返回新数组，指定开始位置和结束位置
3. `join()`：将数组中所有的元素合并成一个字符串并返回，参数指定分隔符，默认是逗号
4. `indexOf()`：返回指定元素在数组第一次出现的位置，不存在返回-1
5. `lastIndexOf()`：返回指定元素在数组最后一次出现的位置，不存在返回-1
6. `forEach()`：遍历数组，没有返回值
7. `filter()`：返回由符合条件的元素组成的新数组，如果回调函数返回true，与之对应的元素表示符合条件
8. `map()`：返回由回调函数的返回值组成的新数组，新数组长度与原数组一致
9. `every()`：只有每个回调函数都返回true，every方法才返回true，否则every方法返回false
10. `some()`：只要有一个回调函数返回true，some方法就返回true		
11. `reduce()`：用于累计运算，最后一次回调函数的返回值作为reduce方法的返回值
12. `reduceRight()`：reduce()从左到右遍历，reduceRight从右到左遍历

```javascript
// 定义数组
var users = [
  { name: "曹操", age: 67, address: "许昌" },
  { name: "刘备", age: 47, address: "成都" },
  { name: "孙权", age: 37, address: "南京" },
  { name: "吕布", age: 51, address: "包头" },
  { name: "赵云", age: 46, address: "石家庄" },
  { name: "诸葛亮", age: 53, address: "南阳" },
];
console.log(users);
console.log("");

// forEach 无返回值
users.forEach(function (item, index) {
  console.log(item, index);
});
console.log("");

// filter
var user1 = users.filter(function (item, index, arr) {
  return item.age > 50; // 返回年龄大于50的元素
});
console.log(user1);

// map
var user2 = users.map(function (item, index, arr) {
  return item.name; // 得到所有用户的用户名
});
var user3 = users.map(function (item, index, arr) {
  item.age -= 10;
  return item; // 让所有用户的年龄-10
});
console.log(user3);

// every 判断是否所有用户都是成年人
var res1 = users.every(function (item, index, array) {
  return item.age > 18;
});
console.log(res1);
// 判断是否所有用户的名字都是两个字的
var res2 = users.every(function (item, index, array) {
  return item.name.length === 2;
});
console.log(res2);

// some 判断是否有住在南京的用户
var res3 = users.some(function (item, index, array) {
  return item.address === "南京";
});
console.log(res3);

// reduce() 第一个参数是回调函数 第二个参数可选
// reduce不写第二个参数，回调函数从第二个元素开始执行，第一个元素作为第一次调用的prev
users.reduce(function (prev, item, index, arr) {
  // prev是上一次回调函数的返回值，第一次调用使用reduce的第二个参数
  console.log(prev, item, index);
}, "高小乐");

// 计算所有用户的年龄和
var sum = users.reduce(function (prev, item) {
  return prev + item.age;
}, 0);
console.log(sum);
// 省去第二个参数的情况
var arr = [1, 2, 3, 4, 5, 6];
var sum_arr = arr.reduce(function (prev, item) {
  return prev + item;
});
console.log(sum_arr);

var sum_arr2 = arr.reduceRight(function (prev, item) {
  console.log(prev);

  return prev + item;
});
console.log(sum_arr2);
```

<h4 id="MPQJO">实例的修改器方法（改变原数组）</h4>
执行完方法后，调用该方法的对象本身会被修改，修改器方式是数组所独有的。

1. `push()`：在数组的后面添加元素，返回添加元素后数组的长度
2. `unshift()`：在数组的前面添加元素，返回添加元素后数组的长度
3. `pop()`：删除最后一个元素，返回被删除的元素
4. `shift()`：删除第一元素，返回被删除的元素
5. `splice()`：替换指定位置指定数量元素，返回数组，数组中被删除掉的元素
6. `sort()`：数组排序，返回排好序的数组
7. `reverse()`：翻转数组，返回翻转好的数组

```javascript
var nameList = [
  "欧阳姥姥",
  "司马姥姥",
  "独孤姥姥",
  "令狐姥姥",
  "东方姥姥",
  "西门姥姥",
  "诸葛姥姥",
];
var new_length = nameList.push("爱新觉罗姥姥");
console.log(nameList, new_length);

console.log(nameList.splice(2, 1, "刘姥姥", "牛姥姥")); // ['独孤姥姥']
console.log(nameList.reverse()); // 翻转数组
```

<h3 id="g3ycs">Function</h3>
Function 是所有函数的构造函数，Function 也是自己的构造函数，Function 实例的属性方法：

1. `length`：获取形参的数量
2. `call()`：调用函数并设置里面的this，第二个参数开始后面的参数都是给函数的
3. `apply()`：调用函数并设置里面的this，第二个参数是数组，数组中的元素作为函数的函数
4. `bind()`：不会调用函数，返回被设置了this的新函数

```javascript
function func(num01, num02) {
  console.log("func被调用了", num01 * num02, this);
  return num01 + num02; 
}
// call调用func的同时可以设置里面的this
func.call({ name: "hhh" }, 10, 20);

// apply 第二个参数是数组类型
func.apply("hello", [10, 30]);

// bind
var fun01 = func.bind([10, 20, 30, 40, 50]);
console.log(fun01(10, 20));
var fun02 = func.bind([10, 20, 30], 10000);
console.log(fun02(2));
```

<h4 id="wBom9">使用forEach遍历字符串</h4>
```javascript
var str = "hello world!";
[].forEach.call(str, function (item, index) {
  console.log(item, index);
});
```

<h4 id="ahYx2">使用reduceRight翻转字符串</h4>
```javascript
var reverse = [].reduceRight.call(str, function (prev, item) {
  return prev + item;
});
console.log(reverse);
```

<h3 id="cEyvM">Global</h3>
`<font style="color:rgb(6, 7, 31);">global</font>`<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);"> 对象是在非浏览器环境（如Node.js）中的全局对象。它相当于浏览器环境中的 </font>`<font style="color:rgb(6, 7, 31);">window</font>`<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);"> 对象。</font>

1. `<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);">eval()</font>`<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);">：参数是字符串，将字符串作为代码执行</font>
2. `<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);">encodeURI()</font>`<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);">：对URL进行编码</font>
3. `<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);">decodeURI()</font>`<font style="color:rgb(6, 7, 31);background-color:rgb(253, 253, 254);">：对编码后的URL进行解码</font>

```javascript
var msg = 'var address = "shanghai"';
eval(msg);
console.log(address);

var url = "http://www.atguigu.com/image/小乐.html";
var url01 = encodeURI(url);
console.log(url01);

var url02 = decodeURI(url01);
console.log(url02);
```





























