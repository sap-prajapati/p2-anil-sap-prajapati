# Pesto Assignment - Week 1

When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.(2-3hours)

**a.What is the main functionality of the browser?**

  Web browser is used to locate, fetch and display content on the internet, including web pages, images, videos, documents, and other files.

when user enters any web url, it connects with DNS server and convert URL in IP address and fetch the data. The information it receives is rendered by the rendering engine and translated into an easily understandable format. It is then displayed in the user interface.

steps are-

1. user enters a URL
2. The browser finds the IP address for the domain using DNS.
3. The browser initiates a connection with the server
4. it sends an HTTP request to the webserver.
5. The server handles the request and sends out an HTTP response.
6.  The browser renders and displays the HTML content, i.e., the web page.

**b. High Level Components of a browser.**

User Interface >> Browser Engine >> Rendering Engine >> Network,JS interpreter,UI Backend

**c. Rendering engine and its use.**

The Rendering Engine renders the requested web page on the browser screen. A web page is a document commonly written in HTML- rendering engine converts this document and data to an understandable format so that users can see the desired site, image, or video.

It deals with HTML and XML documents and other files to generate the layout displayed in the user interface. 

**d. Parsers (HTML, CSS, etc)**

HTML content goes through a process called tokenisation, where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

and the DOM tree is created

HTML → Tokenisation →DOM

Just like HTML, CSS goes through a similar process where we have the CSS text and then the tokenisation of CSS to eventually create something called a CSSOM or CSS Object Model

CSS → Tokenisation → CSSOM

**e.Script Processors**

Script processor executes javascript code to process an event like Safari uses WebKit and Chrome uses JS V8 engine.

**f.Tree construction**

For example - html tag starts at the top and then the head tag starts before the html ends so the head is inside html and create a tree out of it.

**g.Order of script processing**

Script tags are executed in the order they appear.

**h.Layout and Painting**

**The layout** is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc) from The Render Tree and places the elements on the screen.

After Layout, a **Paint** happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors.
