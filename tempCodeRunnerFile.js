let title = "test"
let demoString = "test"
let heading = "test"


function renderPage(title,heading,demoString) {
    string = `
    <!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
  </head>
  <body>
    <!-- page content -->
    <h1> ${heading} </h1>
    <script>
      console.log("${demoString}"); 

    </script>
  </body>
</html>`

    return string;
 } 

 console.log(renderPage(title, heading,demoString))