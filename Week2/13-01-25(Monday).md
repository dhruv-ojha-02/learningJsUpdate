# Date: 13/01/2025 - Monday

Topics to cover: 
- How browsers work?
- How servers work?
- What happens after you type in www.google.com?
- How HTTP requests work?



- DOM: It represents the page so that programs can change the document structure, style, and content.
The DOM represents the document as nodes and objects and that way, programming languages can interact with the page.

- Parsing: Parsing a document means translating it to a structure the code can use.

# Q. How browsers work?

- The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying
it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content.

- Rendering Engines: displaying the requested content on the browser.


- When a web browser renders a webpage, it first converts the HTML document into a tree-like structure called the "content tree"
by parsing the HTML elements into DOM nodes. Then, it combines styling information from both external CSS files and inline styles
within the HTML to create a "render tree" - essentially a visual representation of the page with rectangles defining each 
element's color, size, and position on the screen. This render tree is then laid out, assigning precise coordinates to each element, 
before finally being "painted" onto the screen by the browser's UI backend layer. Importantly, this process happens incrementally, 
meaning the browser starts displaying content as soon as it receives parts of the HTML, rather than waiting for the entire document 
to be fully parsed.


# Q. What happens when we enter a URL?

Steps for what happens when we enter a URL :
- Browser checks cache for DNS entry to find the corresponding IP address of website. It looks for following cache. If not found in one, 
then continues checking to the next until found.
- If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
- Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
- Browser sends an HTTP request to the web server. GET or POST request.
- Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
- Server sends out an HTTP response along with the status of response.
- Browser displays HTML content

					
                    
-----------------------------------------------------------Intro to JS: Summary of Chapter 1---------------------------------------------------

-JavaScript is the programming language of the web. It can update and change both HTML and CSS. It can calculate, manipulate and validate data.
Some languages are heavily slanted toward one paradigm like:
-C is procedural, Java/C++ are almost entirely class oriented, whereas JavaScript is most definitely a multi-paradigm language. You can write procedural, class-oriented, or FP-style code, and you can make those decisions on a line-by-line basis instead of being forced into an all-or-nothing choice.

### FORWARD COMPATIBILITY VS BACKWARD COMPATIBILITY

- Backward Compatibility: Backward compatibility essentially means that any valid JavaScript code written today should continue to work correctly in future versions of the language, even if new features are added.

- Forward Compatibility: Forward compatibility on the other hand, refers to the ability to write code that uses new JavaScript features, but still run it on older JavaScript engines without causing errors.


# Q. How to work around the problem of lack of forward compatibility in JS?

A. 
1. *TRANSPILING:* Transpiling is a contrived and community-invented term to describe using a tool to convert the source code of a program from one form to another (but still as textual source code)

- Transpiler → tool that transpiles, example “Babel” → Converts “newer syntax” → “older syntax”
2. *POLYFILLING:* a piece of code that provides a missing API method in an older environment that doesn't natively support it

### Interpreted or Compiled?

- Interpreted or Scripting Languages are the languages that get executed in a top-to-down and line-by-line fashion. This means that the errors in line 5 will only be highlighted, after the successful execution of lines before it.

- Compiled Languages go through many phases of compiling: Parsing + Compilation + Execution.

- Parsing → Converts the source code into some kind of intermediate code (generally called Abstract Syntax Tree) which helps in the early detection of errors.

- Compilation → Conversion of the intermediate code(output of the parsing) to an executable file(binary code).

- Execution → The Executable file generated in the last step is executed.

