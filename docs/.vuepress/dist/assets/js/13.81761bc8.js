(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{211:function(t,a,e){"use strict";e.r(a);var r=e(0),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"javascript-数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-数据类型"}},[t._v("#")]),t._v(" javascript 数据类型")]),t._v(" "),e("p",[t._v("ECMAScript中有6种简单数据类型（也称为基本数据类型）undefined、null、boolean、number、string和es6新加的Symbol。还有一种复杂数据类型Object")]),t._v(" "),e("h2",{attrs:{id:"undefined类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#undefined类型"}},[t._v("#")]),t._v(" undefined类型")]),t._v(" "),e("p",[t._v("undefined类型只有一个值，及特殊的undefined。在使用var声明变量但未对其加以初始化是，这个变量的值就是undefined，例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var message;\nconsole.log(message == undefined) // true\n")])])]),e("h2",{attrs:{id:"null类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null类型"}},[t._v("#")]),t._v(" null类型")]),t._v(" "),e("p",[t._v("Null类型是第二个只有一个值的数据类型，这个特殊的值是null。从逻辑角度来看，null值表示一个空对象指针，而这也正是使用typeof操作符检测null值是会返回‘object’的原因，例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var car = null;\nconsole.log(typeof(car));  //object\n")])])]),e("p",[t._v("如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null而不是其他值。这样一来。只要检查null值就可以知道响应的变量是否已经保存了一个对象的引用，例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("if(car != null) {\n    //对car对象执行某些操作\n}\n")])])]),e("p",[t._v("实际上，undefined值是派生自null值的，因此ECMA-262规定对它们的想等性测试要返回true")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("console.log(null == undefined);  //true\n")])])]),e("p",[t._v("这里，位于null和undefined之间的想等操作符(==)总是返回true，不过要注意的是，这个操作符出于比较目的会转换其操作数。"),e("br"),t._v("\n尽管null和undefined有这样的关系，但它们的用途完全不同。如上所述，无论在什么情况下都没有必要把一个变量的值设置为undefined，可同样的规则对null却不适用。换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确的让该变量保存null值。这样做不仅可以提现null作为空指针的惯例，而且也有助于进一步区分null和undefined。")]),t._v(" "),e("h2",{attrs:{id:"boolean类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boolean类型"}},[t._v("#")]),t._v(" boolean类型")]),t._v(" "),e("p",[t._v("boolean类型是ECMAScript中使用最多的一种类型，该类型只有两个字面值：true和false。这两个值与数字值不是一回事，因此true不一定等于1，而false也不一定等于0。以下是为变量赋值boolean类型值的例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var found = true;\nvar lost = false;\n")])])]),e("p",[t._v("需要注意的是，boolean类型的字面值true和false是区分大小写的，也就是说True和False都不是boolean值，只是标识符"),e("br"),t._v("\n虽然boolean类型的字面值只有两个，但是ECMAScript中所有的类型值都与这两个boolean值等价的值。要将一个值转换为其对应的boolean值，可以调用转型函数Boolean()，如下例所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var message = 'hello world';\nvar messageBoolean = Boolean(message) //true\n")])])]),e("p",[t._v("在这个例子中，字符串message被转换成了一个boolean值，该值被保存在messageBoolean变量中。可以对任意数据类型的值调用Boolean()函数，而且总会返回一个boolean值。至于返回的这个值是true还是false，取决于要转换值的数据类型及实际值，下表给出了各种数据类型")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("数据类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("抓换为true的值")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("转换为false的值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("任何非空字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("“”空字符串")])]),t._v(" "),e("tr",[e("td",[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("任何非零数字值(包括无穷大)")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("0和NAN")])]),t._v(" "),e("tr",[e("td",[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("任意对象")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("undefined")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("n/a")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("undefined")])])])]),t._v(" "),e("p",[t._v("这些转换规则对理解流控制语句(如if语句)自动执行响应的boolean转换非常重要，请看下面的代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var message = "Hello world";\nif (message){\n    alert(\'Value is true);\n}\n')])])]),e("p",[t._v("运行这个示例，就会显示一个警告框，因为字符串message被自动转换成了对应的boolean值（true）。由于存在这种自动执行的boolean转换，因此确切的知道在流程控制语句使用的是什么变量至关重要。错误的使用一个对象而不是一个boolean值，就有可能彻底改变应用程序的流程。")]),t._v(" "),e("h2",{attrs:{id:"number类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number类型"}},[t._v("#")]),t._v(" Number类型")]),t._v(" "),e("p",[t._v("Number类型应该是ECMAScript中最令人关注的数据类型了，这种类型使用IEEE754格式来表示整数和浮点数值（浮点数值在某些语言中也被称为双精度数值）。为支持各种数值类型，ECMA-262定义了不同数值字面量格式。\n最基本的数值字面量格式是十进制整数，十进制整数可以像下面这样直接在代码中输入:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var intnem = 55; //整数\n")])])]),e("p",[t._v("除了10进制表示外，整数还可以通过8进制（以8为基数）或16进制（以16为基数）的字符值来表示。其中，8进制字面值的第一位必须是零（0），然后是八进制序列号（0~7）。如果字面值中的数值超出了范围，那么前导零将被忽略，后面的数值将被当作十进制解析。请看下面的例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var octalnum1 = 070;  //八进制的56\nvar octalnum2 = 079;  //无效的八进制数值--解析为79\nvar octalnum3 = 08;   //无效的八进制数值--解析为8\n")])])]),e("p",[t._v("八进制字面量在严格模式下是无效的，会导致支持的javascript引擎抛出错误。\n十六进制字面值的前两位必须是0x，后跟任何十六进制数字（0～9 及 A～F）。其中，字母 A～F可以大写，也可以小写。如下面的例子所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var hexNum1 = 0xA; // 十六进制的 10\nvar hexNum2 = 0x1f; // 十六进制的 31\n")])])]),e("p",[t._v("在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。")]),t._v(" "),e("h3",{attrs:{id:"_1-浮点数值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-浮点数值"}},[t._v("#")]),t._v(" 1.浮点数值")]),t._v(" "),e("p",[t._v("所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。虽然小数点前面可以没有整数，但我们不推荐这种写法。以下是浮点数值的几个例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var floatNum1 = 1.1;\nvar floatNum2 = 0.1;\nvar floatNum3 = .1; // 有效，但不推荐\n")])])]),e("p",[t._v("由于保存浮点数值需要的内存空间是保存整数值的两倍，因此 ECMAScript 会不失时机地将浮点数值转换为整数值。显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。同样地，如果浮点数值本身表示的就是一个整数（如 1.0），那么该值也会被转换为整数，如下面的例子所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var floatNum1 = 1.; // 小数点后面没有数字——解析为 1\nvar floatNum2 = 10.0; // 整数——解析为 10\n")])])]),e("p",[t._v("对于那些极大或极小的数值，可以用 e 表示法（即科学计数法）表示的浮点数值表示。用 e 表示法表示的数值等于 e 前面的数值乘以 10 的指数次幂。ECMAScript 中 e 表示法的格式也是如此，即前面是一个数值（可以是整数也可以是浮点数），中间是一个大写或小写的字母 E，后面是 10 的幂中的指数，该幂值将用来与前面的数相乘。下面是一个使用 e 表示法表示数值的例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var floatNum = 3.125e7; // 等于 31250000 \n")])])]),e("p",[t._v("在这个例子中，使用 e 表示法表示的变量 floatNum 的形式虽然简洁，但它的实际值则是 31250000。在此，e 表示法的实际含义就是“3.125 乘以 107”。也可以使用 e 表示法表示极小的数值，如 0.00000000000000003，这个数值可以使用更简洁的 3e-17表示。在默认情况下，ECMASctipt 会将那些小数点后面带有 6 个零以上的浮点数值转换为以 e 表示法表示的数值（例如，0.0000003 会被转换成 3e-7）。浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数。例如，0.1 加 0.2的结果不是 0.3，而是 0.30000000000000004。这个小小的舍入误差会导致无法测试特定的浮点数值。例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('if (a + b == 0.3){ // 不要做这样的测试！\n alert("You got 0.3.");\n} \n')])])]),e("p",[t._v("在这个例子中，我们测试的是两个数的和是不是等于 0.3。如果这两个数是 0.05 和 0.25，或者是 0.15和 0.15 都不会有问题。而如前所述，如果这两个数是 0.1 和 0.2，那么测试将无法通过。因此，永远不要测试某个特定的浮点数值。")]),t._v(" "),e("p",[e("strong",[t._v("备注:"),e("em",[t._v("关于浮点数值计算会产生舍入误差的问题，有一点需要明确：这是使用基于IEEE754 数值的浮点计算的通病，ECMAScript 并非独此一家；其他使用相同数值格式的语言也存在这个问题")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"_2-数值范围"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-数值范围"}},[t._v("#")]),t._v(" 2.数值范围")]),t._v(" "),e("p",[t._v("由于内存的限制，ECMAScript 并不能保存世界上所有的数值。ECMAScript 能够表示的最小数值保存在 Number.MIN_VALUE 中——在大多数浏览器中，这个值是 5e-324；能够表示的最大数值保存在Number.MAX_VALUE 中——在大多数浏览器中，这个值是 1.7976931348623157e+308。如果某次计算的结果得到了一个超出 JavaScript 数值范围的值，那么这个数值将被自动转换成特殊的 Infinity 值。具体来说，如果这个数值是负数，则会被转换成-Infinity（负无穷），如果这个数值是正数，则会被转换成 Infinity（正无穷）。如上所述，如果某次计算返回了正或负的 Infinity 值，那么该值将无法继续参与下一次的计算，因为 Infinity 不是能够参与计算的数值。要想确定一个数值是不是有穷的（换句话说，是不是位于最小和最大的数值之间），可以使用 isFinite()函数。这个函数在参数位于最小与最大数值之间时会返回 true，如下面的例子所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var result = Number.MAX_VALUE + Number.MAX_VALUE;\nalert(isFinite(result)); //false \n")])])]),e("p",[t._v("尽管在计算中很少出现某些值超出表示范围的情况，但在执行极小或极大数值的计算时，检测监控这些值是可能的，也是必需的。")]),t._v(" "),e("p",[e("strong",[t._v("备注:"),e("em",[t._v("访问 Number.NEGATIVE_INFINITY Number.POSITIVE_INFINITY也可以得到负和正 Infinity 的值。可以想见，这两个属性中分别保存-Infinity 和Infinity。")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"_3-nan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-nan"}},[t._v("#")]),t._v(" 3.NaN")]),t._v(" "),e("p",[t._v("NaN，即非数值（Not a Number）是一个特殊的数值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。例如，在其他编程语言中，任何数值除以 0都会导致错误，从而停止代码执行。但在 ECMAScript中，任何数值除以 0会返回 NaN①，因此不会影响其他代码的执行。NaN 本身有两个非同寻常的特点。首先，任何涉及 NaN 的操作（例如 NaN/10）都会返回 NaN，这个特点在多步计算中有可能导致问题。其次，NaN 与任何值都不相等，包括 NaN 本身。例如，下面的代码会返回 false：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("alert(NaN == NaN); //false \n")])])]),e("p",[t._v('针对 NaN 的这两个特点，ECMAScript 定义了 isNaN()函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数是否“不是数值”。isNaN()在接收到一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值，例如字符串"10"或 Boolean 值。而任何不能被转换为数值的值都会导致这个函数返回 true。请看下面的例子：')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('alert(isNaN(NaN)); //true\nalert(isNaN(10)); //false（10 是一个数值）\nalert(isNaN("10")); //false（可以被转换成数值 10）\nalert(isNaN("blue")); //true（不能转换成数值）\nalert(isNaN(true)); //false（可以被转换成数值 1）\n')])])]),e("p",[t._v('这个例子测试了 5 个不同的值。测试的第一个值是 NaN 本身，结果当然会返回 true。然后分别测试了数值 10 和字符串"10"，结果这两个测试都返回了 false，因为前者本身就是数值，而后者可以被转换成数值。但是，字符串"blue"不能被转换成数值，因此函数返回了 true。由于 Boolean 值 true可以转换成数值 1，因此函数返回 false。')]),t._v(" "),e("p",[e("strong",[t._v("备注:"),e("em",[t._v("尽管有点儿不可思议，但 isNaN()确实也适用于对象。在基于对象调用 isNaN()函数时，会首先调用对象的 valueOf()方法，然后确定该方法返回的值是否可以转换为数值。如果不能，则基于这个返回值再调用 toString()方法，再测试返回值。而这个过程也是 ECMAScript 中内置函数和操作符的一般执行流程，")]),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"_4-数值转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-数值转换"}},[t._v("#")]),t._v(" 4.数值转换")]),t._v(" "),e("p",[t._v("有 3 个函数可以把非数值转换为数值：Number()、parseInt()和 parseFloat()。第一个函数，即转型函数 Number()可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值。这 3 个函数对于同样的输入会有返回不同的结果。")]),t._v(" "),e("p",[e("strong",[t._v("Number()函数的转换规则如下。")])]),t._v(" "),e("ul",[e("li",[t._v("如果是 Boolean 值，true 和 false 将分别被转换为 1 和 0。")]),t._v(" "),e("li",[t._v("如果是数字值，只是简单的传入和返回。")]),t._v(" "),e("li",[t._v("如果是 null 值，返回 0。")]),t._v(" "),e("li",[t._v("如果是 undefined，返回 NaN。")]),t._v(" "),e("li",[t._v("如果是字符串，遵循下列规则：\n"),e("ul",[e("li",[t._v('如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即"1"会变成 1，"123"会变成 123，而"011"会变成 11（注意：前导的零被忽略了）；')]),t._v(" "),e("li",[t._v('如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽略前导零）；')]),t._v(" "),e("li",[t._v('如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整数值；')]),t._v(" "),e("li",[t._v("如果字符串是空的（不包含任何字符），则将其转换为 0；")]),t._v(" "),e("li",[t._v("如果字符串中包含除上述格式之外的字符，则将其转换为 NaN。")])])]),t._v(" "),e("li",[t._v("如果是对象，则调用对象的 valueOf()方法，然后依照前面的规则转换返回的值。如果转换的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符串值。"),e("br"),t._v("\n根据这么多的规则使用 Number()把各种数据类型转换为数值确实有点复杂。下面还是给出几个具体的例子吧。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var num1 = Number("Hello world!"); //NaN\nvar num2 = Number(""); //0\nvar num3 = Number("000011"); //11\nvar num4 = Number(true); //1 \n')])])]),e("p",[t._v('首先，字符串"Hello world!"会被转换为 NaN，因为其中不包含任何有意义的数字值。空字符串会被转换为 0。字符串"000011"会被转换为 11，因为忽略了其前导的零。最后，true 值被转换为 1。'),e("br"),t._v('\n由于 Number()函数在转换字符串时比较复杂而且不够合理，因此在处理整数的时候更常用的是parseInt()函数。parseInt()函数在转换字符串时，更多的是看其是否符合数值模式。它会忽略字符串前面的空格，直至找到第一个非空格字符。如果第一个字符不是数字字符或者负号，parseInt()就会返回 NaN；也就是说，用 parseInt()转换空字符串会返回 NaN（Number()对空字符返回 0）。如果第一个字符是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或者遇到了一个非数字字符。例如，"1234blue"会被转换为 1234，因为"blue"会被完全忽略。类似地，"22.5"会被转换为 22，因为小数点并不是有效的数字字符。\n如果字符串中的第一个字符是数字字符，parseInt()也能够识别出各种整数格式（即前面讨论的十进制、八进制和十六进制数）。也就是说，如果字符串以"0x"开头且后跟数字字符，就会将其当作一个十六进制整数；如果字符串以"0"开头且后跟数字字符，则会将其当作一个八进制数来解析。为了更好地理解 parseInt()函数的转换规则，下面给出一些例子：')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var num1 = parseInt("1234blue"); // 1234\nvar num2 = parseInt(""); // NaN\nvar num3 = parseInt("0xA"); // 10（十六进制数）\nvar num4 = parseInt(22.5); // 22\nvar num5 = parseInt("070"); // 56（八进制数）\nvar num6 = parseInt("70"); // 70（十进制数）\nvar num7 = parseInt("0xf"); // 15（十六进制数）\n')])])]),e("p",[t._v("在使用 parseInt()解析像八进制字面量的字符串时，ECMAScript 3 和 5存在分歧。例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//ECMAScript 3 认为是 56（八进制），ECMAScript 5 认为是 70（十制）\nvar num = parseInt("070"); \n')])])]),e("p",[t._v('在 ECMAScript 3 JavaScript 引擎中，"070"被当成八进制字面量，因此转换后的值是十进制的 56。而在 ECMAScript 5 JavaScript 引擎中，parseInt()已经不具有解析八进制值的能力，因此前导的零会被认为无效，从而将这个值当成"70"，结果就得到十进制的 70。在 ECMAScript 5 中，即使是在非严格模式下也会如此。'),e("br"),t._v("\n为了消除在使用 parseInt()函数时可能导致的上述困惑，可以为这个函数提供第二个参数：转换时使用的基数（即多少进制）。如果知道要解析的值是十六进制格式的字符串，那么指定基数 16 作为第二个参数，可以保证得到正确的结果，例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var num = parseInt("0xAF", 16); //175 \n')])])]),e("p",[t._v('实际上，如果指定了 16 作为第二个参数，字符串可以不带前面的"0x"，如下所示：')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var num1 = parseInt("AF", 16); //175\nvar num2 = parseInt("AF"); //NaN \n')])])]),e("p",[t._v("这个例子中的第一个转换成功了，而第二个则失败了。差别在于第一个转换传入了基数，明确告诉parseInt()要解析一个十六进制格式的字符串；而第二个转换发现第一个字符不是数字字符，因此就自动终止了。"),e("br"),t._v("\n指定基数会影响到转换的输出结果。例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var num1 = parseInt("10", 2); //2 （按二进制解析）\nvar num2 = parseInt("10", 8); //8 （按八进制解析）\nvar num3 = parseInt("10", 10); //10 （按十进制解析）\nvar num4 = parseInt("10", 16); //16 （按十六进制解析）\n')])])]),e("p",[t._v("不指定基数意味着让 parseInt()决定如何解析输入的字符串，因此为了避免错误的解析，我们建议无论在什么情况下都明确指定基数。")]),t._v(" "),e("p",[e("strong",[t._v("备注："),e("em",[t._v("多数情况下，我们要解析的都是十进制数值，因此始终将 10 作为第二个参数是非常必要的")]),t._v("。")])]),t._v(" "),e("p",[t._v('与 parseInt()函数类似，parseFloat()也是从第一个字符（位置 0）开始解析每个字符。而且也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。也就是说，字符串中的第一个小数点是有效的，而第二个小数点就是无效的了，因此它后面的字符串将被忽略。举例来说，"22.34.5"将会被转换为 22.34。\n除了第一个小数点有效之外，parseFloat()与 parseInt()的第二个区别在于它始终都会忽略前导的零。parseFloat()可以识别前面讨论过的所有浮点数值格式，也包括十进制整数格式。但十六进制格式的字符串则始终会被转换成 0。由于 parseFloat()只解析十进制值，因此它没有用第二个参数指定基数的用法。最后还要注意一点：如果字符串包含的是一个可解析为整数的数（没有小数点，或者小数点后都是零），parseFloat()会返回整数。以下是使用 parseFloat()转换数值的几个典型示例。')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var num1 = parseFloat("1234blue"); //1234 （整数）\nvar num2 = parseFloat("0xA"); //0\nvar num3 = parseFloat("22.5"); //22.5\nvar num4 = parseFloat("22.34.5"); //22.34\nvar num5 = parseFloat("0908.5"); //908.5\nvar num6 = parseFloat("3.125e7"); //31250000\n')])])]),e("h2",{attrs:{id:"string类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string类型"}},[t._v("#")]),t._v(" String类型")]),t._v(" "),e("p",[t._v("String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，即字符串。字符串可以由双引号（\"）或单引号（'）表示，因此下面两种字符串的写法都是有效的：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var firstName = \"Nicholas\";\nvar lastName = 'Zakas'; \n")])])]),e("p",[t._v("与 PHP 中的双引号和单引号会影响对字符串的解释方式不同，ECMAScript 中的这两种语法形式没有什么区别。用双引号表示的字符串和用单引号表示的字符串完全相同。不过，以双引号开头的字符串也必须以双引号结尾，而以单引号开头的字符串必须以单引号结尾。例如，下面这种字符串表示法会导致语法错误：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var firstName = 'Nicholas\"; // 语法错误（左右引号必须匹配）\n")])])]),e("h3",{attrs:{id:"_1-字符字面量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符字面量"}},[t._v("#")]),t._v(" 1.字符字面量")]),t._v(" "),e("p",[t._v("String 数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他用途的字符。这些字符字面量如下表所示：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("字面量")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\n")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("换行")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\t")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("制表")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\b")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("空格")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\r")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("回车")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\f")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("进纸")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("斜杆")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("'")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单引号('),在用单引号表示的字符串中使用。例如：'He said, 'hey.''")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v('"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('双引号("),在用单引号表示的字符串中使用。例如："He said, "hey.""')])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\xnn")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('以十六进制代码nn表示的一个字符（其中n为0～F）。例如，\\x41表示"A"')])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("\\unnnn")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("以十六进制代码nnnn表示的一个Unicode字符（其中n为0～F）。例如，\\u03a3表示希腊字符Σ")])])])]),t._v(" "),e("p",[t._v("这些字符字面量可以出现在字符串中的任意位置，而且也将被作为一个字符来解析，如下面的例子所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var text = "This is the letter sigma: \\u03a3.";\n')])])]),e("p",[t._v("这个例子中的变量 text 有 28 个字符，其中 6 个字符长的转义序列表示 1 个字符。任何字符串的长度都可以通过访问其 length 属性取得，例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("alert(text.length); // 输出 28 \n")])])]),e("p",[t._v("这个属性返回的字符数包括 16 位字符的数目。如果字符串中包含双字节字符，那么 length 属性可能不会精确地返回字符串中的字符数目。")]),t._v(" "),e("h3",{attrs:{id:"_2-字符串的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符串的特点"}},[t._v("#")]),t._v(" 2.字符串的特点")]),t._v(" "),e("p",[t._v("ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量，例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var lang = "Java";\nlang = lang + "Script"; \n')])])]),e("p",[t._v('以上示例中的变量 lang 开始时包含字符串"Java"。而第二行代码把 lang 的值重新定义为"Java"与"Script"的组合，即"JavaScript"。实现这个操作的过程如下：首先创建一个能容纳 10 个字符的新字符串，然后在这个字符串中填充"Java"和"Script"，最后一步是销毁原来的字符串"Java"和字符串"Script"，因为这两个字符串已经没用了。这个过程是在后台发生的，而这也是在某些旧版本的浏览器（例如版本低于 1.0 的 Firefox、IE6 等）中拼接字符串时速度很慢的原因所在。但这些浏览器后来的版本已经解决了这个低效率问题。')]),t._v(" "),e("h3",{attrs:{id:"_3-转换为字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-转换为字符串"}},[t._v("#")]),t._v(" 3.转换为字符串")]),t._v(" "),e("p",[t._v("要把一个值转换为一个字符串有两种方式。第一种是使用几乎每个值都有的 toString()方法这个方法唯一要做的就是返回相应值的字符串表现。来看下面的例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var age = 11;\nvar ageAsString = age.toString(); // 字符串"11"\nvar found = true;\nvar foundAsString = found.toString(); // 字符串"true" \n')])])]),e("p",[t._v("数值、布尔值、对象和字符串值（没错，每个字符串也都有一个 toString()方法，该方法返回字符串的一个副本）都有 toString()方法。但 null 和 undefined 值没有这个方法。多数情况下，调用 toString()方法不必传递参数。但是，在调用数值的 toString()方法时，可以传递一个参数：输出数值的基数。默认情况下，toString()方法以十进制格式返回数值的字符串表示。而通过传递基数，toString()可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值。下面给出几个例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var num = 10;\nalert(num.toString()); // "10"\nalert(num.toString(2)); // "1010"\nalert(num.toString(8)); // "12"\nalert(num.toString(10)); // "10"\nalert(num.toString(16)); // "a" \n')])])]),e("p",[t._v("通过这个例子可以看出，通过指定基数，toString()方法会改变输出的值。而数值 10 根据基数的不同，可以在输出时被转换为不同的数值格式。注意，默认的（没有参数的）输出值与指定基数 10 时的输出值相同。在不知道要转换的值是不是 null 或 undefined 的情况下，还可以使用转型函数 String()，这个函数能够将任何类型的值转换为字符串。String()函数遵循下列转换规则：")]),t._v(" "),e("ul",[e("li",[t._v("如果值有 toString()方法，则调用该方法（没有参数）并返回相应的结果；")]),t._v(" "),e("li",[t._v('如果值是 null，则返回"null"；')]),t._v(" "),e("li",[t._v('如果值是 undefined，则返回"undefined"。\n下面在看几个例子：')])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var value1 = 10;\nvar value2 = true;\nvar value3 = null;\nvar value4;\nalert(String(value1)); // "10"\nalert(String(value2)); // "true"\nalert(String(value3)); // "null"\nalert(String(value4)); // "undefined" \n')])])]),e("p",[t._v("这里先后转换了 4 个值：数值、布尔值、null 和 undefined。数值和布尔值的转换结果与调用toString()方法得到的结果相同。因为 null 和 undefined 没有 toString()方法，所以 String()函数就返回了这两个值的字面量。")]),t._v(" "),e("p",[e("strong",[t._v("备注："),e("em",[t._v('要把某个值转换为字符串，可以使用加号操作符（3.5 节讨论）把它与一个字符串（""）加在一起。')])])]),t._v(" "),e("h2",{attrs:{id:"object类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object类型"}},[t._v("#")]),t._v(" object类型")]),t._v(" "),e("p",[t._v("ECMAScript 中的对象其实就是一组数据和功能的集合。对象可以通过执行 new 操作符后跟要创建的对象类型的名称来创建。而创建 Object 类型的实例并为其添加属性和（或）方法，就可以创建自定义对象，如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var o = new Object(); \n")])])]),e("p",[t._v("这个语法与 Java 中创建对象的语法相似；但在 ECMAScript 中，如果不给构造函数传递参数，则可以省略后面的那一对圆括号。也就是说，在像前面这个示例一样不传递参数的情况下，完全可以省略那对圆括号（但这不是推荐的做法）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var o = new Object; // 有效，但不推荐省略圆括号\n")])])]),e("p",[t._v("仅仅创建 Object 的实例并没有什么用处，但关键是要理解一个重要的思想：即在 ECMAScript 中，（就像 Java 中的 java.lang.Object 对象一样）Object 类型是所有它的实例的基础。换句话说，Object 类型所具有的任何属性和方法也同样存在于更具体的对象中。")]),t._v(" "),e("p",[t._v("Object 的每个实例都具有下列属性和方法。")]),t._v(" "),e("ul",[e("li",[t._v("constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是 Object()。")]),t._v(" "),e("li",[t._v('hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。')]),t._v(" "),e("li",[t._v("isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型（第 5 章将讨论原型）。")]),t._v(" "),e("li",[t._v("propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用 for-in 语句（本章后面将会讨论）来枚举。与 hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。")]),t._v(" "),e("li",[t._v("toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。")]),t._v(" "),e("li",[t._v("toString()：返回对象的字符串表示。")]),t._v(" "),e("li",[t._v("valueOf()：返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值相同。")])]),t._v(" "),e("p",[t._v("由于在 ECMAScript 中 Object 是所有对象的基础，因此所有对象都具有这些基本的属性和方法。")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("从技术角度讲，ECMA-262 中对象的行为不一定适用于 JavaScript 中的其他对象。浏览器环境中的对象，比如 BOM 和 DOM 中的对象，都属于宿主对象，因为它们是由宿主实现提供和定义的。ECMA-262 不负责定义宿主对象，因此宿主对象可能会也可能不会继承 Object。")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);