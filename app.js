/* Complete JavaScript File with Updated Functions */

const practicalData = {
    "practical-71": {
      id: "practical-71",
      number: "71",
      title: "Static Web Pages Design using HTML headings & paragraph",
      description: "Create static web pages using proper HTML headings (h1-h6) and paragraphs with enhanced desktop styling.",
      technologies: ["HTML5", "CSS3"],
      dateCompleted: "2024-01-15",
      hasSubAssignments: true,
      subAssignments: {
        "71-1": {
          id: "71-1",
          title: "Basic HTML Page with Headings",
          description: "Simple HTML page using h1-h6 headings with center alignment.",
          technologies: ["HTML5"],
          dateCompleted: "2024-01-15",
          code: `<!DOCTYPE html>
  <html>
      <head>
          <title>HEADING TAGS</title>
      </head>
      <body>
            <center><H1>This is heading 1</H1></center>
              <center><H2>This is heading 2</H2></center>
              <center><H3>This is heading 3</H3></center>
              <center><H4>This is heading 4</H4></center>
              <center><H5>This is heading 5</H5></center>
              <center><H6>This is heading 6</H6></center>
      </body>
  </html>`,
          features: [
            "All HTML heading tags (H1-H6)",
            "Center alignment using <center> tag",
            "Proper HTML document structure",
            "Basic webpage layout"
          ]
        },
        "71-2": {
          id: "71-2",
          title: "Paragraph Tag Implementation", 
          description: "HTML page demonstrating paragraph tag with styling.",
          technologies: ["HTML5"],
          dateCompleted: "2024-01-15",
          code: `<!DOCTYPE html>
  <html>
  <head>
      <title>PARAGRAPH TAG</title>
  </head>
  <body>
      <p style="color: red;">
          HTML is the standard markup language for creating Web pages. 
          HTML stands for Hyper Text Markup Language. HTML describes 
          the structure of Web pages using markup. HTML elements are 
          the building blocks of HTML pages. HTML elements are 
          represented by tags.
      </p>
  </body>
  </html>`,
        features: [
          "Paragraph tag implementation",
          "Inline CSS styling", 
          "Text color formatting",
          "Web development concepts"
        ]
      },
      "71-3": {
        id: "71-3",
        title: "Enhanced Heading Structure",
        description: "Professional heading hierarchy with improved styling optimized for desktop viewing.",
        technologies: ["HTML5", "CSS3"],
        dateCompleted: "2024-01-15",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Enhanced Heading Tags</title>
    <style>
        body {
            font-family: 'Inter', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 40px;
            min-height: 100vh;
            margin: 0;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        h1 { 
            color: #ffeb3b; 
            font-size: 3rem; 
            margin: 20px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        h2 { 
            color: #ff9800; 
            font-size: 2.5rem; 
            margin: 18px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        h3 { 
            color: #4caf50; 
            font-size: 2rem; 
            margin: 16px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        h4 { 
            color: #2196f3; 
            font-size: 1.7rem; 
            margin: 14px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        h5 { 
            color: #e91e63; 
            font-size: 1.4rem; 
            margin: 12px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        h6 { 
            color: #9c27b0; 
            font-size: 1.2rem; 
            margin: 10px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .heading-demo {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="heading-demo">
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
            <h3>This is heading 3</h3>
            <h4>This is heading 4</h4>
            <h5>This is heading 5</h5>
            <h6>This is heading 6</h6>
        </div>
    </div>
</body>
</html>`,
        features: [
          "Enhanced CSS styling with modern design",
          "Gradient background with glass morphism",
          "Responsive typography for desktop viewing",
          "Professional text shadows and effects",
          "Container-based layout for better desktop presentation"
        ]
      }
    }
  },
  
  "practical-72": {
  id: "practical-72",
  number: "72",
  title: "HTML formatting tags (Bold, Italic, Underline, etc.)",
  description: "Learn and implement HTML formatting tags and basic HTML page structures.",
  technologies: ["HTML5"],
  dateCompleted: "2024-01-16",
  hasSubAssignments: true,
  subAssignments: {
    "72-1": {
      id: "72-1",
      title: "Basic Heading and Paragraph",
      description: "Simple HTML page with a heading and a paragraph.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-16",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Page title</title>
</head>
<body>
     <h1>This is heading</h1>
     <p>This is paragraph</p>
</body>
</html>`,
      features: [
        "Usage of <h1> tag",
        "Usage of <p> tag",
        "Basic HTML page structure"
      ]
    },
    "72-2": {
      id: "72-2",
      title: "My First Web Page",
      description: "A very simple web page displaying plain text.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-16",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>www.sp/ta.com</title>
</head>
<body>
     My First Web page
</body>
</html>`,
      features: [
        "Basic HTML page setup",
        "Custom title in browser tab",
        "Plain text body content"
      ]
    }
  }
},

 "practical-73": {
  id: "practical-73",
  number: "73",
  title: "Paragraph Tag and Alignment",
  description: "Practice using <p> tags with alignment and line breaks in HTML.",
  technologies: ["HTML5"],
  dateCompleted: "2024-01-17",
  hasSubAssignments: true,
  subAssignments: {
    "73-1": {
      id: "73-1",
      title: "Paragraph Alignment",
      description: "Example of left, center, and right aligned paragraphs using inline CSS.",
      technologies: ["HTML5", "CSS"],
      dateCompleted: "2024-01-17",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Paragraph alignment</title>
</head>
<body>
    <p style="text-align:left">Left align paragraph</p>
    <p style="text-align:center">Center align paragraph</p>
    <p style="text-align:right">Right align paragraph</p>
</body>
</html>`,
      features: [
        "Usage of <p> tag",
        "Inline CSS for text alignment",
        "Left, Center, Right paragraph alignment"
      ]
    },
    "73-2": {
      id: "73-2",
      title: "Paragraphs with Line Breaks",
      description: "Demonstrates simple text, paragraphs, line breaks, and ignored whitespace.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-17",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Paragraph</title>
</head>
<body>
     This is a Simple Text.
     <p>This is a paragraph.</p>

     <p>This is <br>a Paragraph<br>with Line breaks.</p>

    <p>
        This paragraph
        contain a lot of lines
        in the source code
        but the browser
        ignores it.
    </p>
</body>
</html>`,
      features: [
        "Paragraph usage",
        "Line break tag <br>",
        "Browser ignoring extra spaces/newlines"
      ]
    }
  }
},

 "practical-74": {
  id: "practical-74",
  number: "74",
  title: "HTML Backgrounds, Colors & Formatting Tags",
  description: "Explore background colors, font colors, formatting tags, and heading styles in HTML.",
  technologies: ["HTML5", "CSS"],
  dateCompleted: "2024-01-18",
  hasSubAssignments: true,
  subAssignments: {
    "74-1": {
      id: "74-1",
      title: "Background and Font Color",
      description: "Set background color using the bgcolor attribute and font color using <font> tag.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-18",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Background color</title>
</head>
<body bgcolor="yellow">
    <h1>Background color is yellow</h1>
    <font color="red">Font color is red</font>
</body>
</html>`,
      features: [
        "Usage of bgcolor attribute",
        "Font color styling",
        "Simple text formatting"
      ]
    },
    "74-2": {
      id: "74-2",
      title: "Formatting Tags",
      description: "Demonstrates bold, italic, underline, strong, emphasis, subscript, superscript, and styled paragraphs.",
      technologies: ["HTML5", "CSS"],
      dateCompleted: "2024-01-18",
      code: `<html>
<head>
<title>Formatting Tags</title>
</head>
<body>
    <b>This text is Bold.</b> <br>
    <i>This text is Italic.</i> <br>
    <u>This text is Underline.</u> <br>
    <strong>This text is Strong.</strong> <br>
    <em>This text is Emphasized.</em> <br>
    <p>This is <sub>subscripted</sub> text.</p>
    <p>This is <sup>superscripted</sup> text.</p>
    <p style="text-align:center;">Centered paragraph.</p>
    <p style="color:red">I am red.</p>
    <p style="font-size:40px">I am big.</p>
    <p style="font-size:160%;">This is a paragraph.</p>
    <p style="font-family:verdana;">This is a paragraph.</p>
</body>
</html>`,
      features: [
        "Bold, Italic, Underline",
        "Strong and Emphasis text",
        "Subscript and Superscript",
        "CSS styles: alignment, color, font size, font family"
      ]
    },
    "74-3": {
      id: "74-3",
      title: "Heading Tags",
      description: "Example of HTML heading tags from h1 to h6.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-18",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Heading Tags</title>
</head>
<body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</body>
</html>`,
      features: [
        "Heading tags h1-h6",
        "Hierarchical structure",
        "Basic HTML headings demo"
      ]
    },
    "74-4": {
      id: "74-4",
      title: "Background Colors for Headings",
      description: "Each heading is styled with a different background color.",
      technologies: ["HTML5", "CSS"],
      dateCompleted: "2024-01-18",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Background color</title>
</head>
<body> 
    <h1 style="background-color: rgb(255,0,0); text-align:center;">Tomato</h1>
    <h1 style="background-color: orange; text-align:center;">Orange</h1>
    <h1 style="background-color: dodgerblue; text-align:center;">Dodgerblue</h1>
    <h1 style="background-color: mediumseagreen; text-align:center;">Mediumseagreen</h1>
    <h1 style="background-color: gray; text-align:center;">Gray</h1>
    <h1 style="background-color: slateblue; text-align:center;">Slateblue</h1>
    <h1 style="background-color: violet; text-align:center;">Violet</h1>
    <h1 style="background-color: lightgray; text-align:center;">LightGray</h1>
</body>
</html>`,
      features: [
        "Different background colors",
        "Centered headings",
        "Use of inline CSS"
      ]
    }
  }
},

 "practical-75": {
  id: "practical-75",
  number: "75",
  title: "HTML Lists and Tables",
  description: "Learn how to use ordered lists, unordered lists, description lists, and basic HTML tables.",
  technologies: ["HTML5"],
  dateCompleted: "2024-01-19",
  hasSubAssignments: true,
  subAssignments: {
    "75-1": {
      id: "75-1",
      title: "Lists in HTML",
      description: "Demonstrates ordered, unordered, and description lists.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-19",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Order list</title>
</head>
<body>

    <h2>Ordered List</h2>
    <ol>
        <li>KEYBOARD</li>
        <li>MONITOR</li>
        <li>CPU</li>
        <li>MOUSE</li>
    </ol>

    <h2>Unordered List</h2>
    <ul>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>C/C++</li>
        <li>Python</li>
    </ul>

    <h2>Description List</h2>
    <dl>
        <dt>Keyboard</dt>
        <dd>- Wired, Wireless</dd>
        <dt>Monitor</dt>
        <dd>- LCD, LED, CRT</dd>
    </dl>

</body>
</html>`,
      features: [
        "Ordered list with hardware items",
        "Unordered list with programming languages",
        "Description list with details"
      ]
    },
    "75-2": {
      id: "75-2",
      title: "Basic HTML Table",
      description: "Displays a simple table with student details.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-19",
      code: `<html>
<head>
<title>Basic HTML Table</title>
</head>
<body>
    <table border="5">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Tejas</td>
            <td>Thakkar</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Chetan</td>
            <td>Shah</td>
            <td>36</td>
        </tr>
        <tr>
            <td>Yash</td>
            <td>Patel</td>
            <td>22</td>
        </tr>
    </table>
</body>
</html>`,
      features: [
        "Table with border",
        "Header row with column names",
        "3 data rows with sample info"
      ]
    }
  }
},

 "practical-76": {
  id: "practical-76",
  number: "76",
  title: "Hyperlinks, Mailto, and Marquee",
  description: "Learn to create hyperlinks, email links, image/button links, and scrolling marquee text.",
  technologies: ["HTML5"],
  dateCompleted: "2024-01-20",
  hasSubAssignments: true,
  subAssignments: {
    "76-1": {
      id: "76-1",
      title: "Hyperlinks and Image/Button Links",
      description: "Examples of normal links, target attributes, image links, and button as links.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-20",
      code: `<html>
<head>
<title>Hyperlink</title>
</head>
<body>
    <a href="thanks.jpg">Click for Image</a> <br>

    <a href="https://www.google.co.in">Click here for Google</a> <br>

    <p>If you set the target attribute to "_blank", the link will open in a new browser window or tab.</p>
    <a href="https://www.google.co.in" target="_blank">Click here for Google</a>

    <p>If you set the target attribute to "top", the link will open in the same browser window or tab.</p>
    <a href="https://www.google.co.in" target="top">Click here for Google</a>

    <h2>Image Links</h2>
    <p>The image is a link. You can click on it.</p>
    <a href="https://www.google.co.in">
        <img src="google.jpg" alt="Google Website" style="width:70px;height:50px;border:0">
    </a>

    <h2>Button as a Link</h2>
    <p>Click the button to go to Google.</p>
    <button onclick="document.location='https://www.google.co.in'">Click for Google</button>
</body>
</html>`,
      features: [
        "Basic hyperlinks with href",
        "target attributes (_blank, top)",
        "Image as hyperlink",
        "Button as hyperlink"
      ]
    },
    "76-2": {
      id: "76-2",
      title: "Mailto and Address",
      description: "Using mailto in links and the <address> element for contact details.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-20",
      code: `<html>
<head>
<title>Mailto</title>
</head>
<body>
    <p>To create a link that opens in the user's email program, use mailto: inside the href attribute:</p>
    <p><a href="mailto:tejasthakkar@gmail.com">Send E-mail...</a></p>
    <hr>

    <h1>The address element</h1>                                                                                                                                                                                                                                                                                                                                                         
    <address>
        Written by <a href="mailto:tejasthakkar@gmail.com">Tejas Thakkar</a><br>
        Visit us at:<br>
        www.tejasthakkar.com<br>
        Ahmedabad<br>
        Gujarat
    </address>
</body>
</html>`,
      features: [
        "Mailto link to open email client",
        "Address element for author info",
        "Hyperlink inside address"
      ]
    },
    "76-3": {
      id: "76-3",
      title: "Marquee Scrolling Text",
      description: "Examples of text scrolling in different directions and speeds using <marquee>.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-20",
      code: `<html>
<head>
<title>Marquee</title>
</head>
<body>
    <marquee>Simple Marquee Text Scrolling</marquee>

    <marquee width="60%" direction="up" height="100px">
        This is a sample scrolling text that scrolls upward.
    </marquee>

    <marquee width="60%" direction="right" height="100px">
        This is a sample scrolling text that scrolls to the right.
    </marquee>

    <marquee behavior="scroll" direction="left" scrollamount="10">
        Little Fast Scrolling
    </marquee>

    <marquee behavior="scroll" direction="right" scrollamount="20">
        Fast Scrolling
    </marquee>

    <marquee behavior="scroll" direction="right" scrollamount="30">
        Very Fast Scrolling
    </marquee>

    <marquee behavior="scroll" direction="up" scrollamount="1">
        Slow Scrolling
    </marquee>

    <marquee behavior="scroll" direction="down" scrollamount="10">
        Downward Scrolling
    </marquee>
</body>
</html>`,
      features: [
        "Simple marquee",
        "Scrolling directions: up, right, left, down",
        "Different scroll speeds"
      ]
    }
  }
},

  "practical-77": {
  id: "practical-77",
  number: "77",
  title: "HTML Frames",
  description: "Demonstrates usage of frames and framesets with horizontal and vertical layouts.",
  technologies: ["HTML4 (Frameset)"],
  dateCompleted: "2024-01-21",
  hasSubAssignments: true,
  subAssignments: {
    "77-1": {
      id: "77-1",
      title: "Frame 1",
      description: "A single frame with red background.",
      technologies: ["HTML"],
      dateCompleted: "2024-01-21",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Frame_01</title>
</head>
<body bgcolor="red">
    <h1>Frame-1</h1>
</body>
</html>`,
      features: [
        "Single frame page",
        "Red background color"
      ]
    },
    "77-2": {
      id: "77-2",
      title: "Frame 2",
      description: "A single frame with yellow background.",
      technologies: ["HTML"],
      dateCompleted: "2024-01-21",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Frame_02</title>
</head>
<body bgcolor="yellow">
    <h1>Frame-2</h1>
</body>
</html>`,
      features: [
        "Single frame page",
        "Yellow background color"
      ]
    },
    "77-3": {
      id: "77-3",
      title: "Frame 3",
      description: "A single frame with gray background.",
      technologies: ["HTML"],
      dateCompleted: "2024-01-21",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Frame_03</title>
</head>
<body bgcolor="gray">
    <h1>Frame-3</h1>
</body>
</html>`,
      features: [
        "Single frame page",
        "Gray background color"
      ]
    },
    "77-4": {
      id: "77-4",
      title: "Horizontal Frameset",
      description: "Frameset that divides the browser window into 3 horizontal frames.",
      technologies: ["HTML Frameset"],
      dateCompleted: "2024-01-21",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Horizontal Frame</title>
</head>
<frameset rows="40%,40%,*">
    <frame src="frame-1.html">
    <frame src="frame-2.html">
    <frame src="frame-3.html">
</frameset>
</html>`,
      features: [
        "Frameset with rows",
        "Three horizontal sections"
      ]
    },
    "77-5": {
      id: "77-5",
      title: "Vertical + Nested Frameset",
      description: "Mixed layout: first frame on left, two stacked frames on right.",
      technologies: ["HTML Frameset"],
      dateCompleted: "2024-01-21",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Mixed Frame</title>
</head>
<frameset cols="40%,*">
    <frame src="frame-1.html">
    <frameset rows="50%,*">
        <frame src="frame-2.html">
        <frame src="frame-3.html">
    </frameset>
</frameset>
</html>`,
      features: [
        "Nested frameset",
        "Left column + right stacked frames"
      ]
    }
  }
},

"practical-78": {
  id: "practical-78",
  number: "78",
  title: "Form Element: Password",
  description: "HTML form demonstrating the use of password input field with validation.",
  technologies: ["HTML5"],
  dateCompleted: "2024-01-20",
  hasSubAssignments: true,
  subAssignments: {
    "78-1": {
      id: "78-1",
      title: "Password Field Example",
      description: "HTML form that accepts username and password with password masking.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-20",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>From Element: password</title>
</head>
<body>
      <from action="StudentFrom.html" method="GET">

        <hr><center> <h1>Student's from</hr></center></h1>
        <b>Username</b></from><br>
        
         <input type="text" name="uname"> <br> </br>
           
         <b> password:</b> <br>
         <input type="password" name="pwd" minlength="8" required><br><br>
           
          <input type="submit" value="sing in">

          <h2>PASSWORD Element</h2>
          <p>The characters in a password field are masked.</p>

      </from>
</body>
</html>`,
      features: [
        "Form element with username and password fields",
        "Password input masked for security",
        "Validation with minlength and required attributes",
        "Submit button functionality"
      ]
    }
  }
},

"practical-79": {
  id: "practical-79",
  number: "79",
  title: "Form Element: Password",
  description: "Another HTML form demonstrating the use of password input field with validation.",
  technologies: ["HTML5"],
  dateCompleted: "2024-01-21",
  hasSubAssignments: true,
  subAssignments: {
    "79-1": {
      id: "79-1",
      title: "Password Field Example",
      description: "HTML form that accepts username and password with password masking.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-21",
      code: `<html>
    <head>
<title>
    From Element:password
</title>
</head>
<body>
<form action="Student Form.html" method="GET">

<hr> <center> <h1> Student's Form <hr> </center> </h1>
<b> Username: </b> <br>
<input type="text" name="uname"> <br> <br>

<b> Password: </b> <br>
<input type="password" name="pwd" minlength="8"
required> <br> <br>

<input type="submit" value="Sign in">
<h2> PASSWORD Element </h2>
<p>The characters in a password field are masked (shown as asterisks or circles).
</p>

</form>
</body>
</html>`,
      features: [
        "Form element with username and password fields",
        "Password input masked for security",
        "Validation with minlength and required attributes",
        "Submit button functionality"
      ]
    }
  }
},

  "practical-80": {
  id: "practical-80",
  number: "80",
  title: "Form, Media and Embed Elements",
  description: "Programs demonstrating form fieldset, flash/embed, audio, and video elements in HTML.",
  technologies: ["HTML5"],
  dateCompleted: "2024-01-22",
  hasSubAssignments: true,
  subAssignments: {
    "80-1": {
      id: "80-1",
      title: "Form with Fieldset",
      description: "HTML form demonstrating use of fieldset, legend, and input types.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-22",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
   <title>Document</title>
</head>
<body>
         <form>
            <fieldset>
                     <legend>personal data</legend>
             name:   <input type="text"><br><br>
             f:name: <input type="text"><br><br>
             gender:  <input type="radio" name="a">male
                      <input type="radio" name="a">female<br><br>
             gmail:   <input type="email"><br><br>
            </fieldset>
         </form>
    </body>
</html>`
    },
    "80-2": {
      id: "80-2",
      title: "Flash File Embed",
      description: "HTML page embedding images and objects using embed and object tags.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-22",
      code: `<!DOCTYPE html>
<html>
<head>
     <title>flash file</title>
</head>
<embed>
    <h2>flash file</h2>
    <embed src="download (1).jpg" width="650" height="500"></embed>
    <object data="/images.jpg"   width="650"  height="600"></object>
    
</body>
</html>`
    },
    "80-3": {
      id: "80-3",
      title: "Audio File",
      description: "HTML page demonstrating audio playback with controls.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-22",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>audio</title>
</head>
<body>
       <h2>Audio file</h2>
         
           <audio controls>
             
               <source src="kgf 2.mp4" type="audio/mpeg">

               your browser does not support the audio element.
 </audio>
</body>
</html>`
    },
    "80-4": {
      id: "80-4",
      title: "Video File",
      description: "HTML page demonstrating video playback with controls.",
      technologies: ["HTML5"],
      dateCompleted: "2024-01-22",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>video file</title>
</head>
<body>
    <h2>video file</h2>
    <video src=" video.1.mp4 " controls width="420 " height="340 ">
</video>
</body>
</html>`
    }
  }
},

"practical-81": {
  id: "practical-81",
  number: "81",
  title: "Student Registration Form",
  description: "HTML form with multiple input fields, radio buttons, checkboxes, and styled table layout.",
  technologies: ["HTML5", "CSS3"],
  dateCompleted: "2024-01-23",
  hasSubAssignments: true,
  subAssignments: {
    "81-1": {
      id: "81-1",
      title: "Student Registration Form with CSS",
      description: "Form layout using table, input types, checkboxes, radio buttons, and inline CSS.",
      technologies: ["HTML5", "CSS3"],
      dateCompleted: "2024-01-23",
      code: `<!DOCTYPE html>
<html>
<head>
  <title>Student Registration Form</title>
  <style>
    h2 {
      font-family: sans-serif;
      font-size: 24px;
      color: green;
      text-align: center;
      text-decoration: underline;
    }
    table {
      font-family: verdana;
      color: blue;
      font-size: 16px;
      font-weight: bold;
      background: gray;
      border: 4px dashed red;
      border-collapse: collapse;
      margin: auto;
    }
    input[type=text], input[type=email], input[type=number], textarea, input[type=date] {
      width: 70%;
      padding: 6px 12px;
      margin: 5px 0;
      box-sizing: border-box;
    }
    input[type=submit], input[type=reset] {
      width: 15%;
      padding: 8px 12px;
      margin: 5px 0;
      box-sizing: border-box;
    }
  </style>
</head>
<body>

<h2>Student Registration Form</h2>

<form action="#" method="post">
  <table cellpadding="20">
    <tr>
      <td>First Name</td>
      <td><input type="text" name="FirstName" maxlength="50" placeholder="Tejas">
      (Max 50 Characters Allowed)</td>
    </tr>

    <tr>
      <td>Last Name</td>
      <td><input type="text" name="LastName" maxlength="50" placeholder="Thakkar">
      (Max 50 Characters Allowed)</td>
    </tr>

    <tr>
      <td>Email ID</td>
      <td><input type="email" name="EmailID" maxlength="100" placeholder="tejasrthakkar@gmail.com"></td>
    </tr>

    <tr>
      <td>Mobile Number</td>
      <td><input type="text" name="MobileNumber" maxlength="10" placeholder="9228xxxxxx">
      (10 Digits Allowed)</td>
    </tr>

    <tr>
      <td>Gender</td>
      <td>
        <input type="radio" name="Gender" value="Male"> Male
        <input type="radio" name="Gender" value="Female"> Female
      </td>
    </tr>

    <tr>
      <td>Date of Birth (DOB)</td>
      <td><input type="date" name="birthday"></td>
    </tr>

    <tr>
      <td>Address</td>
      <td><textarea name="Address" rows="5" cols="50"></textarea></td>
    </tr>

    <tr>
      <td>City</td>
      <td><input type="text" name="City" maxlength="50" placeholder="Ahmedabad">
      (Max 50 Characters Allowed)</td>
    </tr>

    <tr>
      <td>Pin Code</td>
      <td><input type="text" maxlength="6" placeholder="382350">
      (Max 6 Numbers Allowed)</td>
    </tr>

    <tr>
      <td>State</td>
      <td><input type="text" name="State" placeholder="Gujarat">
      (Max 50 Characters Allowed)</td>
    </tr>

    <tr>
      <td>Country</td>
      <td><input type="text" name="Country" maxlength="50" placeholder="India"></td>
    </tr>

    <tr>
      <td>Hobbies</td>
      <td>
        <input type="checkbox" name="HobbyDrawing" value="Drawing"> Drawing
        <input type="checkbox" name="HobbySinging" value="Singing"> Singing
        <input type="checkbox" name="HobbyDancing" value="Dancing"> Dancing
        <input type="checkbox" name="HobbyCooking" value="Cooking"> Cooking
      </td>
    </tr>

    <tr>
      <td>Qualification</td>
      <td>
        <input type="checkbox" name="HighSchool" value="High School"> High School (10th) <br>
        <input type="checkbox" name="HigherSchool" value="Higher School"> Higher School (12th) <br>
        <input type="checkbox" name="Graduation" value="Graduation"> Graduation (Bachelors) <br>
        <input type="checkbox" name="PostGraduation" value="Post Graduation"> Post Graduation (Masters) <br>
        <input type="checkbox" name="Phd" value="Phd"> Phd
      </td>
    </tr>

    <tr>
      <td colspan="2" align="center">
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
      </td>
    </tr>
  </table>
</form>

</body>
</html>`,
      features: [
        "Complete student registration form with table layout",
        "Multiple input types: text, email, date, radio, checkbox",
        "Form validation with maxlength attributes",
        "Styled with inline CSS for colors and fonts",
        "Professional form styling with gray background and red border",
        "Responsive input field styling with padding and margins",
        "Submit and Reset button functionality"
      ]
    }
  }
},

  "practical-82": {
  id: "practical-82",
  number: "82",
  title: "Student Registration Form & CSS Implementation",
  description: "HTML form with multiple input fields, radio buttons, checkboxes, table layout, and CSS styling methods.",
  technologies: ["HTML5", "CSS3"],
  dateCompleted: "2024-01-26",
  hasSubAssignments: true,
  subAssignments: {
    "82-1": {
      id: "82-1",
      title: "Student Registration Form with CSS",
      description: "Complete registration form using table layout, input types, checkboxes, radio buttons, and internal CSS styling.",
      technologies: ["HTML5", "CSS3"],
      dateCompleted: "2024-01-26",
      code: `<!DOCTYPE html>
<html>
<head>
  <title>Student Registration Form</title>
  <style>
    h2 {
      font-family: sans-serif;
      font-size: 24px;
      color: green;
      text-align: center;
      text-decoration: underline;
    }
    table {
      font-family: verdana;
      color: blue;
      font-size: 16px;
      font-weight: bold;
      background: gray;
      border: 4px dashed red;
      border-collapse: collapse;
      margin: auto;
    }
    input[type=text], input[type=email], input[type=number], textarea, input[type=date] {
      width: 70%;
      padding: 6px 12px;
      margin: 5px 0;
      box-sizing: border-box;
    }
    input[type=submit], input[type=reset] {
      width: 15%;
      padding: 8px 12px;
      margin: 5px 0;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
<h2>Student Registration Form</h2>
<form action="#" method="post">
  <table cellpadding="20">
    <tr>
      <td>First Name</td>
      <td><input type="text" name="FirstName" maxlength="50" placeholder="Tejas">
      (Max 50 Characters Allowed)</td>
    </tr>
    <tr>
      <td>Last Name</td>
      <td><input type="text" name="LastName" maxlength="50" placeholder="Thakkar">
      (Max 50 Characters Allowed)</td>
    </tr>
    <tr>
      <td>Email ID</td>
      <td><input type="email" name="EmailID" maxlength="100" placeholder="tejasrthakkar@gmail.com"></td>
    </tr>
    <tr>
      <td>Mobile Number</td>
      <td><input type="text" name="MobileNumber" maxlength="10" placeholder="9228xxxxxx">
      (10 Digits Allowed)</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>
        <input type="radio" name="Gender" value="Male"> Male
        <input type="radio" name="Gender" value="Female"> Female
      </td>
    </tr>
    <tr>
      <td>Date of Birth (DOB)</td>
      <td><input type="date" name="birthday"></td>
    </tr>
    <tr>
      <td>Address</td>
      <td><textarea name="Address" rows="5" cols="50"></textarea></td>
    </tr>
    <tr>
      <td>City</td>
      <td><input type="text" name="City" maxlength="50" placeholder="Ahmedabad">
      (Max 50 Characters Allowed)</td>
    </tr>
    <tr>
      <td>Pin Code</td>
      <td><input type="text" maxlength="6" placeholder="382350">
      (Max 6 Numbers Allowed)</td>
    </tr>
    <tr>
      <td>State</td>
      <td><input type="text" name="State" placeholder="Gujarat">
      (Max 50 Characters Allowed)</td>
    </tr>
    <tr>
      <td>Country</td>
      <td><input type="text" name="Country" maxlength="50" placeholder="India"></td>
    </tr>
    <tr>
      <td>Hobbies</td>
      <td>
        <input type="checkbox" name="HobbyDrawing" value="Drawing"> Drawing
        <input type="checkbox" name="HobbySinging" value="Singing"> Singing
        <input type="checkbox" name="HobbyDancing" value="Dancing"> Dancing
        <input type="checkbox" name="HobbyCooking" value="Cooking"> Cooking
      </td>
    </tr>
    <tr>
      <td>Qualification</td>
      <td>
        <input type="checkbox" name="HighSchool" value="High School"> High School (10th) <br>
        <input type="checkbox" name="HigherSchool" value="Higher School"> Higher School (12th) <br>
        <input type="checkbox" name="Graduation" value="Graduation"> Graduation (Bachelors) <br>
        <input type="checkbox" name="PostGraduation" value="Post Graduation"> Post Graduation (Masters) <br>
        <input type="checkbox" name="Phd" value="Phd"> Phd
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center">
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
      </td>
    </tr>
  </table>
</form>
</body>
</html>`,
      features: [
        "Complete student registration form with table layout",
        "Multiple input types: text, email, date, radio, checkbox",
        "Form validation with maxlength attributes",
        "Internal CSS styling with custom fonts and colors",
        "Gray background table with red dashed border",
        "Responsive input field styling with padding and margins",
        "Submit and Reset button functionality",
        "Personal information fields with placeholders"
      ]
    },
    "82-2": {
      id: "82-2",
      title: "External CSS Example",
      description: "HTML page demonstrating external CSS file linking with basic styling.",
      technologies: ["HTML5", "CSS3"],
      dateCompleted: "2024-01-26",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
     <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
       <h2>External CSS</h2>
       <h1>This is a heading</h1>
       <p>This is a paragraph</p>
</body>
</html>`,
      features: [
        "External CSS file linking using <link> tag",
        "HTML5 document structure with lang attribute",
        "Basic heading and paragraph elements",
        "Separation of HTML content and CSS styling"
      ]
    },
    "82-3": {
      id: "82-3",
      title: "Inline CSS Implementation",
      description: "HTML page demonstrating inline CSS styling with background colors and text colors.",
      technologies: ["HTML5", "CSS3"],
      dateCompleted: "2024-01-26",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
     <h2>Inline CSS</h2>
     <body style="background-color: rgb(43, 226, 64);">
      <h1 style="color: blue;">This is heading</h1>
      <p style="color: red;">This is a paragraph</p>  
</body>
</html>`,
      features: [
        "Inline CSS styling using style attribute",
        "Background color with RGB values",
        "Text color styling for heading and paragraph",
        "Direct styling within HTML elements"
      ]
    }
  }
},
  "practical-83": {
    id: "practical-83",
    number: "83",
    title: "JavaScript Loops (for, while, do-while)",
    description: "Implement different types of loops in JavaScript.",
    technologies: ["JavaScript"],
    dateCompleted: "2024-01-27",
    hasSubAssignments: false,
    demoLink: "#",
    codeLink: "#"
  },
 "practical-83": {
  id: "practical-83",
  number: "83",
  title: "JavaScript Introduction & Basic Output",
  description: "Introduction to JavaScript programming with basic output methods and document manipulation.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-01-27",
  hasSubAssignments: true,
  subAssignments: {
    "83-1": {
      id: "83-1",
      title: "Basic JavaScript Output with document.write()",
      description: "Simple JavaScript program demonstrating basic output using document.write() method.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-27",
      code: `<html>
<body>
<script language="javascript" type="text/javascript">
<!--
document.write("Hello SP/TA Studs....!")
//-->
</script>
</body>
</html>`,
      features: [
        "JavaScript script tag implementation",
        "document.write() method for output",
        "HTML comment style JavaScript wrapping",
        "Basic text output to webpage",
        "JavaScript language and type attributes"
      ]
    }
  }
},
 "practical-85": {
  id: "practical-85",
  number: "85",
  title: "JavaScript Output Methods",
  description: "Demonstrate different JavaScript output methods including console.log() and window.alert() for displaying results.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-01-29",
  hasSubAssignments: true,
  subAssignments: {
    "85-1": {
      id: "85-1",
      title: "Console Output with console.log()",
      description: "JavaScript program demonstrating console output using console.log() method for debugging and displaying results.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-29",
      code: `<!DOCTYPE html>
<html>
<body>
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>
<script>
    console.log(5 + 6);
</script>
</body>
</html>`,
      features: [
        "HTML5 document structure",
        "JavaScript console.log() output method",
        "Mathematical operation (5 + 6)",
        "Browser console debugging output",
        "Basic webpage with heading and paragraph"
      ]
    },
    "85-2": {
      id: "85-2",
      title: "Alert Dialog with window.alert()",
      description: "JavaScript program demonstrating popup alert dialog using window.alert() method for user interaction.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-29",
      code: `<!DOCTYPE html>
<html>
    <body>
        <h1>MY first web page</h1>
        <p>My first paragraph</p>
        <script>
            window.alert(5+6);
        </script>
    </body>
</html>`,
      features: [
        "HTML5 document structure",
        "JavaScript window.alert() popup method",
        "Mathematical calculation in alert dialog",
        "User interaction through alert box",
        "Basic webpage layout with content"
      ]
    }
  }
},
 "practical-86": {
  id: "practical-86",
  number: "86",
  title: "JavaScript Variables, Functions, and Data Types",
  description: "Comprehensive JavaScript programming covering functions, variables, number types, strings, arrays, and DOM manipulation.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-01-30",
  hasSubAssignments: true,
  subAssignments: {
    "86-1": {
      id: "86-1",
      title: "JavaScript Function with Button Click",
      description: "JavaScript function demonstration with button onclick event for addition calculation.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <script>
           function add()
{
    var a=2, b=10;
    var sum=0;
    sum=a+b;
    document.write("<b>addition:-</b>"+ sum);
    }
    </script>
    <p>Click the button</p>
    <input type="button" onclick="add()" value="click">
</body>
</html>`,
      features: [
        "JavaScript function definition",
        "Variable declaration and initialization",
        "Mathematical addition operation",
        "Button onclick event handling",
        "document.write() output with HTML formatting"
      ]
    },
    "86-2": {
      id: "86-2",
      title: "DOM Manipulation with getElementById",
      description: "JavaScript program demonstrating DOM element manipulation using getElementById method.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var a = 10;
var b = 50;
document.getElementById("demo").innerHTML = (a + b);
 //document.getElementById("demo").innerHTML = a;        
 //document.getElementById("demo").innerHTML = b;
</script>
<p>Try to experiment with the // comments.</p>
</body>
</html>`,
      features: [
        "DOM element selection with getElementById",
        "innerHTML property for content manipulation",
        "Variable arithmetic operations",
        "JavaScript comments demonstration",
        "Dynamic content update"
      ]
    },
    "86-3": {
      id: "86-3",
      title: "JavaScript Number Types and Scientific Notation",
      description: "Demonstration of different JavaScript number formats including decimals and scientific notation.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
      <p id="demo"></p>
      <script>
           var a1 = 15.00;
           var a2 = 40;
           var b  = 123e5;
           var c  = 123e-5;
    document.getElementById("demo").innerHTML
        = a1 +"<br>" + a2 + "<br>" + b + "<br>" + c
      </script>
</body>
</html>`,
      features: [
        "Decimal number variables",
        "Integer number variables",
        "Scientific notation (exponential) numbers",
        "Positive and negative exponents",
        "HTML line breaks in JavaScript output"
      ]
    },
    "86-4": {
      id: "86-4",
      title: "JavaScript String Variables and Quotes",
      description: "JavaScript string manipulation with different quote types and escape characters.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <script>
        var trName1 = "COPA"
        var trName2 = 'soft.prog.';
        var answer1 = "it's alright";
        var answer2 = "it is called'ITI Trade'";
        var answer3 = 'it is called"ITI trade"';
        document.getElementById("demo").innerHTML =
            trName1 + "<br>" +
            trName2 + "<br>" +
            answer1 + "<br>" +
            answer2 + "<br>" +
            answer3; 
    </script>
</body>
</html>`,
      features: [
        "String variables with double quotes",
        "String variables with single quotes",
        "Apostrophe handling in strings",
        "Nested quotes in strings",
        "String concatenation with HTML breaks"
      ]
    },
    "86-5": {
      id: "86-5",
      title: "JavaScript Arrays and Index Access",
      description: "JavaScript array creation and element access using index numbers.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <script>
        var trade =["COPA","SWP","E-COM"];
         document.getElementById("demo").innerHTML
         =trade[2];
    </script>
</body>
</html>`,
      features: [
        "Array variable declaration",
        "Array with string elements",
        "Array index access (zero-based)",
        "Displaying specific array element",
        "DOM content update with array data"
      ]
    },
    "86-6": {
      id: "86-6",
      title: "JavaScript Objects and Properties",
      description: "JavaScript object creation with properties and accessing object data using dot notation.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <script>
            var person={
            firstname  :"AJAY",
            lastname  :"darbar",
            age        :48,
            eyeColor   :"green"
         };
    document.getElementById("demo").innerHTML
    =person.firstname + " is " + person.age
    +" year old ";
    </script>
</body>
</html>`,
      features: [
        "JavaScript object literal syntax",
        "Object properties definition",
        "Dot notation for property access",
        "String concatenation with object data",
        "Person object with multiple attributes"
      ]
    },
    "86-7": {
      id: "86-7",
      title: "JavaScript Objects - Duplicate Example",
      description: "Another example of JavaScript object usage with person details and property access.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <script>
            var person={
            firstname  :"AJAY",
            lastname  :"darbar",
            age        :48,
            eyeColor   :"green"
         };
    document.getElementById("demo").innerHTML
    =person.firstname + " is " + person.age
    +" year old ";
    </script>
</body>
</html>`,
      features: [
        "JavaScript object creation",
        "Multiple object properties",
        "Object property concatenation",
        "DOM manipulation with object data",
        "Age and name display formatting"
      ]
    },
    "86-8": {
      id: "86-8",
      title: "String Concatenation with Function",
      description: "JavaScript string concatenation demonstration using the + operator with button click function.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<head>
     <title>Document</title>
</head>
<body>
    <p>The + operator concatenates(adds) string.</p>
    <button onclick="testFunction()">try it</button>
    <p id="demo"></p>
    <script>
         function testFunction(){
            var txt1="What a very";
            var txt2="nice day";
            document.getElementById
            ("demo").innerHTML =txt1 + txt2;
         }
    </script>
</body>
</html>`,
      features: [
        "String concatenation with + operator",
        "Function with button onclick event",
        "Multiple string variable declaration",
        "DOM element content update",
        "Interactive string manipulation"
      ]
    },
    "86-9": {
      id: "86-9",
      title: "JavaScript typeof Operator",
      description: "Comprehensive demonstration of JavaScript typeof operator for different data types and expressions.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
          <title>Document</title>
</head>
<body>
    <p>The type of operator returns the type of a variable or expression.</p>
       <button onclick="myFunction()">try it</button>
        <p id="demo"></p>
        <script>
             function myFunction() {
                var x=5;
                var y="SP/TA";
            document.getElementById("demo").innerHTML= typeof x + "<br>" + typeof 5 +"<br>"
             + typeof (5+5) + "<br>"
             + typeof y +"<br>" + typeof "5" + "<br>"
             + typeof false +"<br>"
             + typeof (3>5)+ "<br>"+ typeof[1,2,3,4]
             + "<br>"+ typeof{name:'john',age:34};
             }
        </script>
</body>
</html>`,
      features: [
        "typeof operator for variables",
        "typeof for numbers and expressions",
        "typeof for strings and booleans",
        "typeof for arrays and objects",
        "Comprehensive data type checking"
      ]
    },
    "86-10": {
      id: "86-10",
      title: "Type Conversion with Unary Plus",
      description: "JavaScript type conversion demonstration using unary plus operator to convert string to number.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<body>
<p>The typeof operator returns the type of a variable or expression.</p>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
var y="5";
var x=+ y;
document.getElementById("demo").innerHTML =
typeof y + "<br>" + typeof x;
}
</script>
</body>
</html>`,
      features: [
        "String to number conversion",
        "Unary plus operator usage",
        "typeof operator comparison",
        "Type conversion demonstration",
        "Before and after type checking"
      ]
    },
    "86-11": {
      id: "86-11",
      title: "JavaScript Comparison Operators",
      description: "JavaScript comparison operator demonstration with equality checking and boolean results.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<body>
<p>Assign 5 to x, and display the value of the comparison ( x ==8) </p>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
var x = 5
document.getElementById("demo").innerHTML =
( x ==8)
}
</script>
</body>
</html>`,
      features: [
        "Variable assignment",
        "Equality comparison operator (==)",
        "Boolean result display",
        "Comparison operation evaluation",
        "True/false output demonstration"
      ]
    },
    "86-12": {
      id: "86-12",
      title: "Conditional (Ternary) Operator",
      description: "JavaScript ternary operator demonstration for conditional logic with user input validation.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-30",
      code: `<!DOCTYPE html>
<html>
<body>
<p>Input your age and click the button:</p>
<input id="age" value="18">
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
var age, voteable;
age=document.getElementById("age").value;
voteable = (age<18)? "Too young":"Old enough";
document.getElementById("demo").innerHTML = voteable + " to vote.";
}
</script>
</body>
</html>`,
      features: [
        "HTML input field integration",
        "User input value retrieval",
        "Ternary operator conditional logic",
        "Age validation logic",
        "Dynamic result display based on condition"
      ]
    }
  }
},
  "practical-87": {
  id: "practical-87",
  number: "87",
  title: "JavaScript Conditional Statements (if, if-else, if-else if)",
  description: "JavaScript conditional programming using if statements, if-else statements, and if-else if chains for time-based greetings and decision making.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-01-31",
  hasSubAssignments: true,
  subAssignments: {
    "87-1": {
      id: "87-1",
      title: "Simple if Statement with Date Object",
      description: "Basic if statement demonstration using Date object to check current time and display conditional message.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-31",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p>Display "Have a nice day",if the time is less than 19:00:</p>
    <button onclick="myFunction()">try it</button>
    <p id="demo"></p>
     <script>
       function myFunction(){
       if(new Date().getHours() < 19){
     document.getElementById("demo").innerHTML = "Have a nice day";
     }
       }
 </script>    
</body>
</html>`,
      features: [
        "Simple if statement structure",
        "Date object for current time",
        "getHours() method usage",
        "Conditional message display",
        "Button click event handling"
      ]
    },
    "87-2": {
      id: "87-2",
      title: "if-else Statement for Time-based Greetings",
      description: "JavaScript if-else statement implementation for displaying different greetings based on current time.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-31",
      code: `<!DOCTYPE html>
<html>
<head>
       <title>Document</title>
</head>
<body>
     <p>Click on Button for Greetings:</p>
     <Button onClick="myFunction()">try it</Button>
     <p id="demo"></p>
     <script>
             function myFunction(){
                var greeting;
                    if(new Date().getHours() < 19){
                    greeting = "Good Day";
                    }else{
                    greeting = "Good Evening";    
                    }
                document.getElementById("demo").innerHTML = 
                greeting;
                }
     </script>
</body>
</html>`,
      features: [
        "if-else conditional structure",
        "Variable declaration and assignment",
        "Time-based conditional logic",
        "Dynamic greeting assignment",
        "Two-way decision making"
      ]
    },
    "87-3": {
      id: "87-3",
      title: "if-else if Chain for Multiple Time Conditions",
      description: "Advanced conditional programming using if-else if chain for multiple time-based greeting scenarios.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-01-31",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p>Click the button to get a time-based greeting</p>
     <button onClick="myFunction()">try it</button>
     <p id="demo"></p>
     <script>
         function myFunction(){
            var greeting;
            var time = new Date().getHours();
            if(time < 10){
                greeting ="good morning";
            }else if (time < 20){
                greeting ="good day";
            }else {
                greeting = "good evening";
            }   
        document.getElementById("demo").innerHTML =greeting    
        }
     </script>   
 </body>
</html>`,
      features: [
        "if-else if-else chain structure",
        "Multiple conditional checks",
        "Time variable storage",
        "Three-way decision logic",
        "Morning, day, and evening greetings"
      ]
    }
  }
},
  "practical-88": {
  id: "practical-88",
  number: "88",
  title: "JavaScript Arrays, Switch Statements, and Error Handling",
  description: "Advanced JavaScript programming covering array manipulation with splice method, switch statements for calculator operations, and error handling with try-catch blocks.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-02-01",
  hasSubAssignments: true,
  subAssignments: {
    "88-1": {
      id: "88-1",
      title: "Array Splice Method Demonstration",
      description: "JavaScript array manipulation using splice method to insert elements at specific positions.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-01",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p id="demo"> </p>
    <button onclick="testFunction()">Try it</button>
    <script>
        var sname = ["Amit", "Vishal", "Sonali", "Sunil", 46];
        function testFunction() {
            sname.splice(2, 0, "Manoj", "Priya"); 
            document.getElementById("demo").innerHTML = sname[3];  
        }
    </script>
</body>
</html>`,
      features: [
        "Array declaration with mixed data types",
        "splice() method for array manipulation",
        "Inserting multiple elements at specific index",
        "Array element access by index",
        "Dynamic array modification"
      ]
    },
    "88-2": {
      id: "88-2",
      title: "Switch Statement Calculator",
      description: "JavaScript calculator implementation using switch statement for basic arithmetic operations.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-01",
      code: `<!DOCTYPE html>
<html>
<head>
    <h1>Switch</h1>
    <title>Document</title>
</head>
<body>
    <script>
    var n1=parseInt(prompt("Enter the n1:"));
    var n2=parseInt(prompt("Enter the n2:"));
    var ans;
    
         var op=prompt("Enter operator which you want: +,-,*,/");
         document.writeln("n1 is " + n1 + "<br>");
         document.writeln("n2 is: " + n2 + "<br>");
            switch(op){
            case "+":
                   ans = n1 + n2;
                   document.writeln("Sum is = " + ans);                  
                   break;           
            
            case "-":
                ans = n1 - n2;
                document.writeln("Sub is = " + ans);
                break;
         
            case "*":
                ans = n1 * n2;
                document.writeln("Multiplication is = " + ans);
                break;
                
            case "/":
                ans = n1 / n2;
                document.writeln("Division is = " + ans);
                break;
                
            default:
                document.writeln("Invalid operator");
                break;
         }
    </script>
</body>
</html>`,
      features: [
        "User input with prompt() function",
        "parseInt() for string to number conversion",
        "Switch statement for multiple conditions",
        "Basic arithmetic operations (+, -, *, /)",
        "Default case for error handling",
        "Break statements to prevent fall-through"
      ]
    },
    "88-3": {
      id: "88-3",
      title: "Error Handling with Try-Catch",
      description: "JavaScript error handling demonstration using try-catch blocks for input validation.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-01",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p>Please input a number between 5 and 10:</p>
     <input id="demo" type="text">
     <button type="button" onClick="myFunction()">Test Input</button>
     <p id="message"></p>
     <script>
         function myFunction() {
            var message, x;
            message = document.getElementById("message");
            message.innerHTML = "";
            x = document.getElementById("demo").value;
            try {
                if(x == "") throw "empty";
                if(isNaN(x)) throw "not a number";
                x = Number(x);
                if(x < 5) throw "too low";
                if(x > 10) throw "too high";
                if(x >= 5 && x <= 10) throw "OK";
            }
            catch(err) {
                message.innerHTML = "Input is " + err;
            }
         }
     </script>
</body>
</html>`,
      features: [
        "HTML input field integration",
        "Try-catch error handling structure",
        "Multiple validation conditions",
        "Custom error messages with throw",
        "Input validation for empty, non-numeric, and range values",
        "Dynamic error message display"
      ]
    }
  }
},
  "practical-89": {
  id: "practical-89",
  number: "89",
  title: "JavaScript Array Properties and Methods",
  description: "JavaScript programming focusing on array length property, dynamic array manipulation, high index assignments, and array to string conversion methods.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-02-02",
  hasSubAssignments: true,
  subAssignments: {
    "89-1": {
      id: "89-1",
      title: "Array Length Property",
      description: "Demonstration of JavaScript array length property to get the number of elements in an array.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-02",
      code: `<!DOCTYPE html>
<html>
<body>
<p>The length property returns the length of an array.</p>
<p id="demo"></p>
<script>
var sname = ["Amit", "Vishal", "Sonali", "Sunil"]; 
document.getElementById("demo").innerHTML= sname.length;
</script>
</body>
</html>`,
      features: [
        "Array length property usage",
        "Dynamic length calculation",
        "Direct HTML element manipulation",
        "Array declaration with string elements",
        "Basic DOM interaction"
      ]
    },
    "89-2": {
      id: "89-2",
      title: "Dynamic Array Element Addition",
      description: "Using length property to append new elements to an array dynamically with user interaction.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-02",
      code: `<!DOCTYPE html>
<html>
<body>
<p>Using length property to append new elements to an array.</p>
<button onclick="testFunction()">Try it</button>
<p id="demo"></p>
<script>
var sname = ["Amit", "Vishal", "Sonali", "Sunil"];
window.onload = function() {
  document.getElementById("demo").innerHTML = sname.join(", ");
};
function testFunction() {
  sname[sname.length] = "yash";
  document.getElementById("demo").innerHTML = sname.join(", ");
}
</script>
</body>
</html>`,
      features: [
        "Dynamic array element addition using length property",
        "Window onload event handling",
        "Array join() method for display formatting",
        "Button click event handling",
        "Real-time array modification visualization",
        "Comma-separated array display"
      ]
    },
    "89-3": {
      id: "89-3",
      title: "High Index Array Assignment",
      description: "Adding elements to arrays using high index positions and demonstrating sparse array behavior.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-02",
      code: `<!DOCTYPE html>
<html>
<head>
        <title>Document</title>
</head>
<body>
    <p>Adding elememt with high indexes </p>
    <button onClick="testFunction()">Try it </button>
    <p id="demo"></p>
    <script>
        var Sname = ["Amit", "Vishal", "Sonali", "Sunils"];
        document.getElementById("demo").innerHTML 
        = Sname;
        function testFunction(){
            Sname[4]="Virat";
            document.getElementById("demo").innerHTML =
             Sname[4];
        }
    </script>
</body>
</html>`,
      features: [
        "High index array element assignment",
        "Sparse array creation demonstration",
        "Direct index-based element addition",
        "Array element access by specific index",
        "Dynamic array length modification",
        "Initial array display functionality"
      ]
    },
    "89-4": {
      id: "89-4",
      title: "Array toString Method",
      description: "Converting JavaScript arrays to string format using the toString() method for display purposes.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-02",
      code: `<!DOCTYPE html>
<html >
<head>
        <title>Document</title>
</head>
<body>
    <p>Adding elememt with high indexes </p>
    <button onClick="testFunction()">Try it </button>
    <p id="demo"></p>
    <script>
      
var sname = ["Amit", "Vishal", "Sonali", "Sunil", 46];
function testFunction() {
document.getElementById("demo").innerHTML
= sname.toString();
}
    </script>
</body>
</html>`,
      features: [
        "Array toString() method implementation",
        "Mixed data type array handling",
        "String conversion of array elements",
        "Button-triggered array display",
        "Comma-separated string output",
        "Mixed string and numeric array elements"
      ]
    }
  }
},
  "practical-90": {
  id: "practical-90",
  number: "90",
  title: "JavaScript Functions and Parameters",
  description: "JavaScript programming focusing on function definitions, parameter passing, return values, and practical applications including calculators and string manipulation.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-02-03",
  hasSubAssignments: true,
  subAssignments: {
    "90-1": {
      id: "90-1",
      title: "Basic Function Definition and Call",
      description: "Simple JavaScript function demonstration with alert message display.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-03",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Function</title>
</head>
<body>
    <h2>Display message</h2>
    <script>
        
          function ShowMessage()
    {
        alert("Hello World!");
    }
        ShowMessage();
    </script>
    
</body>
</html>`,
      features: [
        "Basic function definition syntax",
        "Function without parameters",
        "Alert dialog box usage",
        "Direct function call execution",
        "Simple message display functionality"
      ]
    },
    "90-2": {
      id: "90-2",
      title: "Function with Parameters - Addition",
      description: "JavaScript function with parameters to perform addition of two numbers and display result.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-03",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>Function</title>
</head>
<body>
    <h2>Function Add</h2>
    <h3>Add two number using function</h3>
    <script>
           
           var a=4;
           var b=6;
           var c=add(a,b);
           function add(a,b)
           {
            document.writeln("Sum is :" + (a+b));
           }
    </script>
    
</body>
</html>`,
      features: [
        "Function with multiple parameters",
        "Variable declaration and initialization",
        "Parameter passing to functions",
        "Mathematical operations within functions",
        "Document.writeln() for output display",
        "Function call with variables as arguments"
      ]
    },
    "90-3": {
      id: "90-3",
      title: "Calculator with Function and Return Values",
      description: "Interactive calculator using functions with return values, switch statement, and user input validation.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-03",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>Function Prompt</title>
</head>
<body>
    <script>
           let a = parseFloat(prompt("Enter No1"));
           let b = parseFloat(prompt("Enter No2"));
           let ch = parseFloat(prompt("1 Add| 2 Sub | 3 Mul | 4 Div | Enter Choice:"));
           let r=0, f1 = 0;
           switch(ch)
           {
             case 1:r=add(a,b); break;
             case 2:r=sub(a,b); break;
             case 3:r=mul(a,b); break;
             case 4:r=div(a,b); break;
             default:   f1 = 1;
           }
           if (f1)
                document.write("invaild choice");
            else 
                document.write("Result is: " + r);
            function add(a,b)
            {
                 return a + b;
            }
            function sub(a,b)
            {
                 return a - b;
            }
            function mul(a,b)
            {
                 return a * b;
            }
            function div(a,b)
            {
                 return a / b;
            }
    </script>
    
</body>
</html>`,
      features: [
        "Multiple function definitions with return values",
        "parseFloat() for decimal number input",
        "Switch statement for menu-driven operations",
        "User input validation and error handling",
        "Functions returning calculated values",
        "Conditional output based on user choice",
        "Complete calculator functionality (Add, Sub, Mul, Div)"
      ]
    },
    "90-4": {
      id: "90-4",
      title: "Vowel Counter Function",
      description: "String manipulation function to count vowels in user input name with case-insensitive checking.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-03",
      code: `<!DOCTYPE html>
<html>
<head>
   
    <title>Functiont</title>
</head>
<body>
    <script>
           var count=0;
           function countVowels(name)
           {
              for (var i=0; i<name.length; i++)
           {
              if(name[i]=="a"||name[i]=="e"||name[i]=="i"||name[i]=="o"||name[i]=="u"||name
              [i]=="A"||name[i]=="E"||name[i]=="I"||name[i]=="O"||name[i]=="U")
              count=count+1;
           }
                document.write("Hello " + name + "!!! <br> Your name has " + count + " vowels.");
        }
                var myName=prompt("please Enter Your Name");
                countVowels(myName);
            
    </script>
    
</body>
</html>`,
      features: [
        "String manipulation and character checking",
        "For loop for string iteration",
        "Case-insensitive vowel detection",
        "Multiple condition checking with OR operators",
        "Global variable usage for counting",
        "String length property utilization",
        "Personalized output with user input",
        "HTML break tags in JavaScript output"
      ]
    }
  }
},
  "practical-91": {
  id: "practical-91",
  number: "91",
  title: "JavaScript String, Math, and Date Functions",
  description: "Comprehensive JavaScript programming covering string manipulation methods, mathematical functions, and date/time operations including palindrome detection and random number generation.",
  technologies: ["HTML5", "JavaScript"],
  dateCompleted: "2024-02-04",
  hasSubAssignments: true,
  subAssignments: {
    "91-1": {
      id: "91-1",
      title: "String Concatenation Function",
      description: "JavaScript string concatenation using the concat() method to join multiple strings.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title> String Function: Concat</title>
</head>
<body>
       <h2>java script string</h2>
       <h3>The concat() method joins two or more string</h3>

       <script>
                 var string1 ="Hello";
                 var string2 ="world!";

           document.writeln("<br> String-1 is :" + string1);
           document.writeln("<br> String-2 is :" + string2); 
            
            var string3 = string1.concat(" ",string2);
            document.writeln("<br> concat strings is : " + string3);



       </script>
</body>
</html>`,
      features: [
        "String concat() method implementation",
        "Multiple string variable declaration",
        "String joining with space separator",
        "Document.writeln() for formatted output",
        "String concatenation demonstration"
      ]
    },
    "91-2": {
      id: "91-2",
      title: "String Split Function - Character Array",
      description: "Converting string to character array using split() method and displaying each character separately.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>String Function : spilt</title>
</head>
<body>
       <h2>JAVAscript String</h2>
       <h3>Array of single character</h3>
       <script>
               var str = "Hello";
               var arr =  str.split("");
               var text = "";
               var i;
               for(i = 0; i < arr.length; i++)

               {
                  text += arr[i] + "<br>"
               }

               document.writeln("String is : " + str + "<br>");
               document.writeln(text);

       </script>
</body>
</html>`,
      features: [
        "String split() method with empty separator",
        "For loop iteration through character array",
        "Dynamic string building with HTML breaks",
        "Array length property usage",
        "Character-by-character string processing"
      ]
    },
    "91-3": {
      id: "91-3",
      title: "Palindrome Detection Function",
      description: "Interactive palindrome checker using string methods including split, reverse, and join.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    
    <title>Document</title>
</head>
<body>
       <h2>javascript string</h2>
       <h3>Display whether a string is palindrome or not:</h3>
       <script>
                function  isPalindrome()
                {
                    var str=document.getElementById('isPal').value;
                    var rev=str.split("").reverse().join("");

                    if (str==rev)
                        output=str+" is Palindrome.";
                    else
                         output=str+" is not Palindrome.";

                    document.getElementById("result").textContent = output;
                         
                }
            </script>

             Enter String : <input type="text" id="isPal"></input>
             <button type="button" onclick="isPalindrome()">Check</button>
             <p id="result"></p>
</body>
</html>`,
      features: [
        "Interactive HTML input form integration",
        "String reverse using split-reverse-join chain",
        "Palindrome logic with string comparison",
        "DOM element value retrieval",
        "Dynamic result display with textContent",
        "Button click event handling"
      ]
    },
    "91-4": {
      id: "91-4",
      title: "Math Round Function",
      description: "Demonstration of Math.round() function for rounding decimal numbers to nearest integers.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>math function : round</title>
</head>
<body>
    
       <h2>java Script math Function</h2>
       <h3>math.round(x) return the value of x rounded to its nearest integer:</h3>
       <script>
               var no1=7.25;
               document.writeln("No1 is : " + no1);
               document.writeln("Round value is : " + Math.round(no1));

               var no2=7.65;
               document.writeln("<br> No2 is : " + no2);
               document.writeln("Round value is : " + Math.round(no2));
               
       </script>
</body>
</html>`,
      features: [
        "Math.round() method implementation",
        "Decimal number rounding demonstration",
        "Multiple variable rounding examples",
        "Formatted output with HTML breaks",
        "Nearest integer calculation"
      ]
    },
    "91-5": {
      id: "91-5",
      title: "Math Random Number Generator",
      description: "Random number generation using Math.random() and Math.floor() methods.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html >
<head>
    
   
    <title>math function : random</title>
</head>
<body>
     
      <h2>java script Math function</h2>
      <h3>Print a random number from 0 to 10:</h3>
      <script>
               no=Math.random()* 500
               document.write(Math.floor(no))
      </script>
      

       
    
</body>
</html>`,
      features: [
        "Math.random() for random number generation",
        "Number range scaling with multiplication",
        "Math.floor() for integer conversion",
        "Random number within specified range",
        "Single-line random number display"
      ]
    },
    "91-6": {
      id: "91-6",
      title: "Math Max and Min Functions",
      description: "Finding maximum and minimum values between two numbers using Math.max() and Math.min().",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
   
    
    <title>Math function</title>
</head>
<body>
       <h2>javascript Math function: Highest& lowerst</h2>
       <h3>Highest and Lower of the two numbers:</h3>
       
        <script>
                  var no1=2;
                  var no2=5;
                  document.writeln("Highest value is : " + Math.max(no1,no2) + "<hr>");
                
                  
                  var no3=2;
                  var no4=5;
                  document.writeln("Lower value is : " + Math.min(no3,no4));

        </script>
</body>
</html>`,
      features: [
        "Math.max() for finding maximum values",
        "Math.min() for finding minimum values",
        "Multiple number comparison",
        "HTML horizontal rule for formatting",
        "Comparative mathematical operations"
      ]
    },
    "91-7": {
      id: "91-7",
      title: "Comprehensive Math Functions",
      description: "Demonstration of various JavaScript Math functions including round, power, square root, absolute, ceiling, and floor.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>Math function</title>
</head>
<body>
       <h2>java script Math function</h2>

       <script>
                document.writeln("Math.round (5.45) : " + Math.round(5.45));

                document.writeln(" <br> Math.pow (8,3) : " + Math.pow(8,3));

                document.writeln(" <br> Math.sqrt (81) : " + Math.sqrt(81));

                document.writeln(" <br> Math.abs (-5.45) : " + Math.abs(-5.45));

                document.writeln(" <br> Math.ceil (8.8) : " + Math.ceil(8.8));

                document.writeln(" <br> Math.floor (5.2) : " + Math.floor(5.2));
       </script>
    
</body>
</html>`,
      features: [
        "Multiple Math function demonstrations",
        "Math.pow() for exponential calculations",
        "Math.sqrt() for square root operations",
        "Math.abs() for absolute value conversion",
        "Math.ceil() for ceiling rounding",
        "Math.floor() for floor rounding"
      ]
    },
    "91-8": {
      id: "91-8",
      title: "Date Function - Day, Month, Year",
      description: "Displaying current date with day, month, and year using JavaScript Date functions.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>Data Function</title>
</head>
<body> 
    <h2>JavaScript Date Function</h2>
    <h3>Print date including date, month and year:</h3>

    <script>
        var d = new Date();
        document.write(d.getDate());
        document.write(".");
        document.write(d.getMonth() + 1);
        document.write(".");
        document.write(d.getFullYear());
    </script>
</body>
</html>`,
      features: [
        "Date object instantiation",
        "getDate() method for day extraction",
        "getMonth() method with +1 adjustment",
        "getFullYear() method for complete year",
        "Formatted date display with dots"
      ]
    },
    "91-9": {
      id: "91-9",
      title: "Date Function - Time Display",
      description: "Displaying current time with hours, minutes, and seconds using JavaScript Date functions.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title></title>
</head>
<body>
    
     <h2>java script Date Function</h2>
     <h3>print time including hour minutes and secound</h3>

     <script>
              var d = new Date();
              document.write(d.getHours());
              document.write(".");
              document.write(d.getMinutes() + 1);
              document.write(".");
              document.write(d.getSeconds());
     </script>
    
</body>
</html>`,
      features: [
        "getHours() method for hour extraction",
        "getMinutes() method for minute extraction",
        "getSeconds() method for second extraction",
        "Time formatting with dot separators",
        "Real-time clock display functionality"
      ]
    },
    "91-10": {
      id: "91-10",
      title: "Complete Date Format with Day Names",
      description: "Displaying formatted date with day names and month names using arrays for custom formatting.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>Document</title>
</head>
<body>
    <h2>java script Dtae function </h2>
    <h3>print day date month and year</h3>

    <script>
            var d = new Date();
            var weekday= new Array
            ("Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday");
            var monthname=new Array
            ("jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            document.write(weekday[d.getDay()] + " ");
            document.write(d.getDate() + " ");
            document.write(monthname[d.getMonth()] + " ");
            document.write(d.getFullYear());
    </script>
</body>
</html>`,
      features: [
        "Custom weekday and month name arrays",
        "getDay() method for weekday index",
        "Array indexing for name lookup",
        "Formatted date string construction",
        "Complete date display with names"
      ]
    },
    "91-11": {
      id: "91-11",
      title: "Comprehensive Date Function Methods",
      description: "Demonstration of various JavaScript Date methods including year, month, date, hours, minutes, and seconds with descriptions.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Document</title>
</head>
<body>
      <h2>javascript Date Function </h2>

      <script>
              var d = new Date();
              document.writeln("<br> Get the year as a four digit number (yyyy) : " + d.getFullYear());
              
              var month = d.getMonth() + 1;

              document.writeln("<br> Get the number as a number (1-12) : " + month);
              document.writeln("<br> Get the day as a number (1-31): " + d.getDate());
              document.writeln("<br> Get the number as a hour (0-23): " + d.getHours());
              document.writeln("<br> Get the number as a minute (0-59): " + d.getMinutes());
              document.writeln("<br> Get the number as a second (0-59): " + d.getSeconds());
      </script>
</body>
</html>`,
      features: [
        "Comprehensive Date method showcase",
        "Descriptive output formatting", 
        "Month adjustment for human-readable format",
        "Range indicators for each time component",
        "Educational Date function demonstration"
      ]
    },
    "91-12": {
      id: "91-12",
      title: "Extended Date Function Methods",
      description: "Complete demonstration of JavaScript Date methods including milliseconds, timestamps, and weekday numbers with detailed descriptions.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Document</title>
</head>
<body>
      <h2>javascript Date Function </h2>
      <script>
              var d = new Date();
              document.writeln("<br> Get the year as a four digit number (yyyy) : " + d.getFullYear());
              /* To get the corret month you must add 1 */
               var month = d.getMonth() + 1;
              document.writeln("<br> Get the number as a number (1-12) : " + month);
              document.writeln("<br> Get the day as a number (1-31): " + d.getDate());
              document.writeln("<br> Get the number as a hour (0-23): " + d.getHours());
              document.writeln("<br> Get the number as a minute (0-59): " + d.getMinutes());
              document.writeln("<br> Get the second (0-59): " + d.getSeconds());
              document.writeln("<br> Get the millisecond (0-999): "+ d.getMilliseconds());
              document.writeln("<br> Get the time (milliseconds since January 1, 1970): " + d.getTime());
              document.writeln("<br> Get the weekday as a number (0-6): " + d.getDay());
              document.writeln("<br> Get the timestamp using Date.now(): " + Date.now());
               
</script>
                    
</body>
</html>`,
      features: [
        "Extended Date method collection",
        "Millisecond precision with getMilliseconds()",
        "Unix timestamp retrieval with getTime()",
        "Weekday number extraction with getDay()",
        "Static Date.now() method for current timestamp",
        "Comprehensive time component documentation",
        "Educational comments explaining month adjustment"
      ]
    },
    "91-13": {
      id: "91-13",
      title: "Time Display Function",
      description: "Displaying current time with hours, minutes, and seconds using JavaScript Date functions with formatted output.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title></title>
</head>
<body>
    
     <h2>java script Date Function</h2>
     <h3>print time including hour minutes and secound</h3>
     <script>
              var d = new Date();
              document.write(d.getHours());
              document.write(".");
              document.write(d.getMinutes() + 1);
              document.write(".");
              document.write(d.getSeconds());
     </script>
    
</body>
</html>`,
      features: [
        "Real-time hour extraction with getHours()",
        "Minute display with getMinutes() method",
        "Second display with getSeconds() method",
        "Formatted time output with dot separators",
        "Current system time retrieval"
      ]
    },
    "91-14": {
      id: "91-14",
      title: "Formatted Date with Custom Names",
      description: "Advanced date formatting using custom arrays for weekday and month names to display user-friendly date format.",
      technologies: ["HTML5", "JavaScript"],
      dateCompleted: "2024-02-04",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>Document</title>
</head>
<body>
    <h2>java script Dtae function </h2>
    <h3>print day date month and year</h3>
    <script>
            var d = new Date();
            var weekday= new Array
            ("Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday");
            var monthname=new Array
            ("jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            document.write(weekday[d.getDay()] + " ");
            document.write(d.getDate() + " ");
            document.write(monthname[d.getMonth()] + " ");
            document.write(d.getFullYear());
    </script>
</body>
</html>`,
      features: [
        "Custom weekday name array creation",
        "Custom month name array implementation",
        "getDay() method for weekday index lookup",
        "Array-based name mapping for user-friendly display",
        "Complete formatted date string construction",
        "Readable date format with names instead of numbers"
      ]
    }
  }
},
  "practical-92": {
    id: "practical-92",
    number: "92",
    title: "Design Calculator using JavaScript",
    description: "Create a functional calculator using JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    dateCompleted: "2024-02-05",
    hasSubAssignments: false,
    demoLink: "#",
    codeLink: "#"
  },

 "practical-93": {
  id: "practical-93",
  number: "93",
  title: "HTML Forms and Input Validation",
  description: "Comprehensive HTML form creation with advanced input validation, multiple input types, and user-friendly resume form interface with JavaScript validation functions.",
  technologies: ["HTML5", "JavaScript", "CSS"],
  dateCompleted: "2024-02-05",
  hasSubAssignments: true,
  subAssignments: {
    "93-1": {
      id: "93-1",
      title: "Resume Form with Validation",
      description: "Complete resume form with comprehensive input validation, multiple input types, and structured layout for candidate information collection.",
      technologies: ["HTML5", "JavaScript", "CSS"],
      dateCompleted: "2024-02-05",
      code: `<!DOCTYPE html>
<html>
<head>
    
    <title>RESUME UPDATE WEB PAGE</title>
</head>
<body bgcolor="yellow">

    <center><h1>RESUME OF CANDIDATE</center></h1>

    <div align="center">
    <form method="post" action="#">
    <table width="90%" border="1" cellpadding="10">

   <tr>
       <td width="40%"><div align="right">Name of the Candidate</div></td>
       <td width='33%'><input name="cname" type="text" onkeypress="return onlyAlphabets(event,this);"required></td>
   </tr>

   <tr>
         <td><div align="right">Date of Birth</div></td>
         <td><input type="date" name="dob"></td> 
   </tr>

   <tr>
        <td><div align="right">Father/ Hasband's Name</div></td>
        <td><input name="gname" type ="text" onkeypress="return onlyAlphabets(event,this)";required></td>
   </tr>

   <tr>
       <td> <div align="right">Gender</div></td>
       <td> <input required name="gender" type="radio" value="male">Male
       <input name="gender" type="radio" value="Famale">Female
       <input name="gender" type="radio"  value="TG">TransGender</td>
   </tr>

   <tr>
       <td  align="right">Person With Disability</td>
       <td>
        <input required name="phstatus" type="radio" value="Yes">Yes
        <input name="phstatus" type="radio" value="No">No
        </td>
   </tr>

   <tr>
       <td><div align="right">Category of Candidate</div></td> 
       <td><input name="Category" type="radio" value="Genral" required>Gender
       <input name="Category" type="radio" value="OBC">OBC
       <input name="category" type="radio" value="SC">SC
       <input name="category" type="radio" value="ST">ST
    </td>
   </tr>
</table>

         <h1>Contact Details of Candidate</h1>
      <table width="90%" border="1" cellpadding="10px">

        <tr>
             <td width="41%"><div align="right">Adress Line 1</div>
              <td width="59%"><input name="add1" type="text" id="add1" size="60" required>
            </td>
        </tr>

        <tr>
             <td  align="right">Address Line 2</td>
             <td><input name="add2" type="text" id="add2" size="60"></td>
        </tr>

        <td align="right">City/Town
         <td><input name="City" type="text" id="city" size="40" onketpress="return onlyAlphabets(event,this);"required></td>  
        </td>

        <tr>
             <td align="right">Pin Code</td>
             <td><input name="pin" type="text id="pincode size="10" maxlength="6" onkeypress="return isNumber(event);"required></td>
        </tr>

        <tr>
             <td align="right">State
                <td><input type="text" name="state" required>
                </td>
        </tr>

        <tr>
             <td align="right">District
                <td><input type="text" name="district" onkeypress="return onlyAlphabets(event,this);"required></td>
            </td>
            </tr>

            <tr>
            <td align="right">Email Adress
            <td><input name="email" type="email" onblur="vaildateEmail(this);"required></td>
           </tr>

            <tr>
                <td align="right">Phone
                 <td>STD<input name="std" type="text" onkeypress="return isNumber(event)" size="6">NO
                  <input name="phone" type="text" onkeypress="return isNumber(event)" maxlength="12">  
                </td>
            </tr>
            <tr>
                <td align="right">Mobile .No</td>
                <td class="inputtext"><input name="mobile" type="text" onkeypress="return isNumber(event)" required></td>    
                </td>
            </tr>
            <tr>
                <td align="right">Aadhar isNumber
                 <td width="59%"><input name="aadhar" type="text" maxlength="12" onkeypress="return isNumber(event)">(if available)</td>   
                </td>
            </tr>

            <tr>
                 <td align="right">Qualification</td>
                  <td> <input name="qualifi" type="radio" value="Degree" required>Degree
                  <input name="qualifi" type="radio" value="Diploma" required>Diploma
                  <input name="qualifi" type="radio" value="NCVT" required>NCVT </td> 
                 
            </tr>

            <tr>
                 <td align="right">Marksheet Upload
                   <td><input type="file"></td> 
                 </td>
            </tr>
           
      </table>  
      
      <p>
        <input name="Submit" type="Submit" class="inputtext" value="Submit">
        <input name="reset" type="Reset" class="inputtext" value="Reset">
      </p>

    
    </form>    
    
</body>
</html>`,
      features: [
        "Comprehensive HTML form with table-based layout",
        "Multiple input types: text, date, radio, email, file",
        "JavaScript validation functions for alphabets and numbers",
        "Required field validation with HTML5 attributes",
        "Radio button groups for gender, disability, and category selection",
        "Contact details section with address fields",
        "Email validation with onblur event",
        "Phone number input with STD code separation",
        "File upload functionality for marksheet",
        "Form submission and reset buttons",
        "Structured layout with proper alignment",
        "Input size and maxlength restrictions",
        "Professional resume form interface"
      ]
    }
  }
},
};

// DOM ELEMENTS
const sidebarMenu = document.getElementById("sidebarMenu");
const mainContent = document.getElementById("mainContent");

// CREATE PRACTICAL MENU FUNCTION
function createPracticalMenu(practical) {
  const li = document.createElement("li");
  li.className = "nav-item";
  const btn = document.createElement("button");
  btn.className = "nav-link";
  btn.dataset.practical = practical.id;
  
  const titleSpan = document.createElement("span");
  titleSpan.textContent = `${practical.number}. ${practical.title}`;
  btn.appendChild(titleSpan);
  
  if (practical.hasSubAssignments) {
    btn.classList.add("expandable");
    
    const subMenu = document.createElement("ul");
    subMenu.className = "submenu";
    subMenu.id = practical.id + "-submenu";
    li.appendChild(subMenu);
    
    btn.addEventListener("click", () => {
      const expanded = btn.classList.toggle("expanded");
      if (expanded) {
        subMenu.style.display = "block";
        renderSubAssignments(practical.id);
      } else {
        subMenu.style.display = "none";
      }
    });
  } else {
    btn.addEventListener("click", () => {
      renderPracticalDetails(practical.id);
    });
  }
  
  li.appendChild(btn);
  return li;
}

// âœ… RENDER SUB ASSIGNMENTS
function renderSubAssignments(practicalId) {
  const practical = practicalData[practicalId];
  const subMenu = document.getElementById(practicalId + "-submenu");
  subMenu.innerHTML = "";
  
  for (const subId in practical.subAssignments) {
    const sub = practical.subAssignments[subId];
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "sub-nav-link";
    btn.textContent = sub.title;
    btn.addEventListener("click", () => {
      renderSubAssignmentDetails(practicalId, subId);
    });
    li.appendChild(btn);
    subMenu.appendChild(li);
  }
}

// âœ… RENDER PRACTICAL DETAILS (WITHOUT SUB ASSIGNMENTS)
function renderPracticalDetails(practicalId) {
  const practical = practicalData[practicalId];
  mainContent.innerHTML = `
    <h2 class="practical-title">${practical.number}. ${practical.title}</h2>
    <p class="practical-description">${practical.description}</p>
    <div class="details">
      <strong>Technologies:</strong> ${practical.technologies.join(", ")}<br>
      <strong>Date Completed:</strong> ${practical.dateCompleted}
    </div>
    <div class="buttons">
      <a href="${practical.demoLink}" target="_blank" class="btn">View Demo</a>
      <a href="${practical.codeLink}" target="_blank" class="btn">View Code</a>
    </div>
  `;
}

// âœ… NEW: UPDATED RENDER SUB ASSIGNMENT DETAILS WITH CODE + PREVIEW
function renderSubAssignmentDetails(practicalId, subId) {
  const sub = practicalData[practicalId].subAssignments[subId];
  
  mainContent.innerHTML = `
    <div class="assignment-container">
      <h2 class="practical-title">${sub.title}</h2>
      <p class="practical-description">${sub.description}</p>
      
      <div class="details">
        <strong>Technologies:</strong> ${sub.technologies.join(", ")}<br>
        <strong>Date Completed:</strong> ${sub.dateCompleted}<br>
        <strong>Features:</strong>
        <ul>
          ${sub.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div class="code-preview-container">
        <!-- Code Display Section -->
        <div class="code-section">
          <div class="section-header">
            <h3>&#128196;Source Code</h3>
            <button class="copy-btn" onclick="copyCode('${subId}')">Copy Code</button>
          </div>
          <pre class="code-display" id="code-${subId}"><code class="html">${escapeHtml(sub.code)}</code></pre>
        </div>
        
        <!-- Live Preview Section -->
        <div class="preview-section">
          <div class="section-header">
            <h3>&#128205;Live Output</h3>
            <button class="fullscreen-btn" onclick="openFullscreen('${subId}')">Fullscreen</button>
          </div>
          <iframe 
            id="preview-${subId}"
            class="code-preview" 
            srcdoc="${sub.code.replace(/"/g, '&quot;')}"
            sandbox="allow-scripts allow-same-origin">
          </iframe>
        </div>
      </div>
      
      <div class="buttons">
        <button class="btn" onclick="refreshPreview('${subId}')"> Refresh Output</button>
        <button class="btn" onclick="downloadCode('${subId}', '${sub.title}')">Download HTML</button>
      </div>
    </div>
  `;
  
  // Apply syntax highlighting after content loads
  setTimeout(() => {
    if (typeof hljs !== 'undefined') {
      hljs.highlightAll();
    }
  }, 100);
}

// âœ… HELPER FUNCTIONS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function copyCode(subId) {
  const practical = findPracticalBySubId(subId);
  const sub = practical.subAssignments[subId];
  
  navigator.clipboard.writeText(sub.code).then(() => {
    showNotification('Code copied to clipboard!', 'success');
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = sub.code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showNotification('Code copied!', 'success');
  });
}

function refreshPreview(subId) {
  const practical = findPracticalBySubId(subId);
  const sub = practical.subAssignments[subId];
  const iframe = document.getElementById(`preview-${subId}`);
  
  if (iframe) {
    iframe.srcdoc = sub.code;
    showNotification('Output refreshed!', 'success');
  }
}

function openFullscreen(subId) {
  const practical = findPracticalBySubId(subId);
  const sub = practical.subAssignments[subId];
  
  const newWindow = window.open('', '_blank', 'width=1000,height=700');
  newWindow.document.write(sub.code);
  newWindow.document.close();
  newWindow.document.title = sub.title;
}

function downloadCode(subId, title) {
  const practical = findPracticalBySubId(subId);
  const sub = practical.subAssignments[subId];
  
  const blob = new Blob([sub.code], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/\s+/g, '_')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showNotification(`${title} downloaded!`, 'success');
}

function findPracticalBySubId(subId) {
  for (const practicalId in practicalData) {
    const practical = practicalData[practicalId];
    if (practical.hasSubAssignments && practical.subAssignments[subId]) {
      return practical;
    }
  }
  return null;
}

function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existing = document.querySelectorAll('.notification');
  existing.forEach(notif => notif.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#22c55e' : '#ef4444'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 600;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// âœ… INITIALIZE SIDEBAR MENU
Object.values(practicalData).forEach((practical) => {
  sidebarMenu.appendChild(createPracticalMenu(practical));
});