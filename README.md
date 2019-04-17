# NodeJS 

NodeJS is a runtime environment to execute JavaScript code outside of the browser. It is used frecuently to build backend services or Application programming interfaces

NodeJS engine is developed in C++ using the JavaScript engine V8 from Google.

No-blocking and asynchronous application... Node applications are asynch by default. This has a event queue that is monitoring by the thread. For these reasons **Node Applications are ideal for I/O itensive apps.**

**Do not use NodeJS for CPU-intensive applications.**

In Node, we don’t have browser environment objects such as window or the
document object. Instead, we have other objects that are not available in
browsers, such as objects for working with the file system, network, operating
system, etc. 
