<!doctype html>

<html>

<head>

    <title> Weather </title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/
smoothness/jquery-ui.css">

<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/
libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>


<style>

html, body {
    height:100%;
    }
    
.holder {
    background-image:url("weather.jpg");
    width:100%;
    height:100%;
    background-size:cover;
    background-position:center;
    padding-top:100px;
    }
    
.input {
    position:center;
    }
    
h1, p {
    color:white;
    }

.center {
    text-align:center;
    padding:15px;
    }
    
.btn {
    margin:20px;
    }
   
.alert {
    display:none;
    } 


</style>

</head>

<body>


<div class="container holder">

    <div class="row">
    
        <div class="col-md-6 col-md-offset-3 center">
            
            <h1 class="center">Weather forecaster</h1>
                
                <form>
                
                <div class="form-group">
                    <label for="city"><p>Enter city:</p></label>
                    <input class="form-control" name="city" id="city" placeholder="E.g. Barcelona" />
                </div>
                
                <input type="submit" name="submit" id="findMyWeather" class="btn btn-success btn-lg" value="Get weather prediction" />
                </form>
                
                <div id="success" class="alert alert-success"> Success! </div>
                
                <div id="fail" class="alert alert-danger">No data available for that city</div>
                
                <div id="noCity" class="alert alert-danger">Please enter a city</div>


    
            </div>
            
        </div>
    
</div>

<script>

    $("#findMyWeather").click(function(event) {
    
        event.preventDefault();
        
            $(".alert").hide();
        
        if ($("#city").val()!="") {
    
        $.get("scraper.php?city="+$("#city").val(), function( data ) {
        
            
            if (data=="") {
            
        
                $("#fail").fadeIn();
                
            } else {
            
                $("#success").html(data).fadeIn();
            
            }
        
        });
        
        } else {
        
            $("#noCity").fadeIn();
            
            }
    
    });

</script>

</body>


</html>