<html>

<head>
    <title>Artikel 1</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <div class="container">
        <h1 align="center">belajar berhitung plano percetakan</h1>
        <h3>Membuat Perhitungan Plano </h3>
        <div class="row">
            <div class="col-sm">
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Ukuran Potong </th>
                            <td><input type="text" id="nilaix" onkeypress="jikaenter(this,event)" /></td>
                            <td>x</td>
                            <td><input type="text" id="nilaiy" onkeypress="jikaenter(this,event)" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm">
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Ukuran plano</th>
                            <td><input type="text" id="planox" onkeypress="jikaenter(this,event)" /></td>
                            <td>x</td>
                            <td><input type="text" id="planoy" onkeypress="jikaenter(this,event)" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <table class="table table-striped">

                    <td>
                        <input type="text" readonly="readonly" id="hasil"> <button type="button" class="btn btn-primary" onclick="sum();">Hasil</button>
                        <button type="button" class="btn btn-secondary" onclick="bersih();">Besih</button>
                    </td>

                </table>
            </div>
        </div>
        <div class="container-fluid">
            <canvas id="myCanvas" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
            </canvas>
        </div>
        <div class="container-fluid">
            <canvas id="myCanvas2" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
            </canvas>
        </div>
        <div class="container-fluid">
            <canvas id="myCanvas3" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
            </canvas>
        </div>
        <div class="container-fluid">
            <canvas id="myCanvas4" style="border:1px solid #d3d3d3;">
                Your browser does not support the canvas element.
            </canvas>
        </div>
        <!-- <script src="hitungan.js"></script> -->
        <script src="rumus.js">

        </script>
</body>

</html>