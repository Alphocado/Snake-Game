<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snake Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <table border="0" cellspacing="0" id="myTable">
    <?php
    for ($y = 0; $y < 17; $y++):
      echo "<tr>";
      for ($x = 0; $x < 17; $x++):
        echo "<td><div><div id='$x-$y'></div></div></td>";
      endfor;
      echo "</tr>";
    endfor;
    ?>
  </table>
  <h1>Point: <span id="point">0</span></h1>

  <script src="script.js"></script>
</body>
</html>
