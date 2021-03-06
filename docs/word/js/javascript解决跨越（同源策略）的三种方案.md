# javascript解决跨越（同源策略）的三种方案
在某些情况下，同源策略就显得太过严格了，下面是三种不严格的同源策略

## domain
同源策略给那些使用多个子域的大站点带来了一些问题，例如，来自home.example.com的文档里的脚本想要合法的读取从developer.example.com载入的文档的属性，或者来自orders.example.com的脚本可能需要读catalog.example.com上文档的属性。为了支持这种类型的多域名站点，可以使用Document对象的domain属性。在默认情况下，属性domain存放的是载入文档的服务器的主机名。可以设置这一属性，不过使用的字符串必须具有有效的域前缀或它本身。因此如果一个domain属性的初始值是字符串“home.exaple.com”
，就可以把他设置为字符串“example.com”，但不能设置为“home.example”。另外。domain值中必须有一个点号，不能把它设置为“com”或其他顶级域名。

如果两个窗口（或窗体）包含的脚本把domain设置为相同的值，那么这两窗口就不再受同源策略的约束，它们可以相互读取对方的属性。例如，从order.example.com和catalog.example.com载入的文档中的脚本可以把它们的document.domain属性设置为“example.com”，这样一来这些文档就有了同源性，可以互相读取属性。

## 跨域资源共享CORS

跨域资源共享（Cross-Origin Resource Sharing,参见http://www.w3.org/TR/cors）。这个标准草案用新的“Origin:”请求头和新的Access-Control-Allow-Origin响应头来扩展http。它允许服务器用头信息显式的列出源，或使用通配符来匹配所有的源并允许由任意地址请求文件。类似Firefox和Safari的浏览器可以使用这种新的头信息来允许跨越http请求，这样XMLHttpRequest就不会被同源策略限制了。

## 跨文档消息 postMessage()

跨文档消息（cross-document messaging），允许来自一个文档的脚本可以传递文本消息到另一个文档里的脚本，而不管脚本的来源是否不同。调用Window对象上的postMessage()方法，可以异步传递消息事件（可以用onmessage事件句处理程序函数来处理它）到窗口的文档里，一个文档里的脚本还是不能调用在其他文档里的方法和读取属性，但他们可以用这种消息传递技术实现安全的通信。

