<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library App</title>
    <link rel="stylesheet" href="style.css">
</head>
<script defer src="script.js"></script>

<body>
    <div class="form">
        <h1>Library</h1>
        <form name="formy" onsubmit="validateForm();return false;">
            <input type="text" id="title" placeholder="Title">
            <p></p>
            <input type="text" id="author" placeholder="Author">
            <p></p>
            <input type="text" id="pages" placeholder="Pages">
            <p></p>
            <label for="read">Read? </label>
            <input type="checkbox" id="read" name="read">
            <p></p>
            <input type="submit" value="Submit">
            <p></p>
        </form>
    </div>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read?</th>
                <th>Controls</th>
            </tr>
        </thead>
        <tbody id="tableh">
        </tbody>
    </table>
</body>

</html>
