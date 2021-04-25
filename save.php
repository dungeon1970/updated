<?php
$visitor = $_REQUEST['visitor'];
$subject = $_REQUEST['subject'];
$comments = $_REQUEST['comments'];

$myFile = "data.json";
$arr_data = array(); // create empty array
try
{
    //Get form data
    $formdata = array(
       'visitor'=> $visitor,
       'subject'=> $subject,
       'comments'=> $comments
    );

    //Get data from existing json file
    $jsondata = file_get_contents("comments.json");

    // converts json data into array
    $arr_data = json_decode($jsondata, true);

    // Push user data to array
    array_push($arr_data,$formdata);

    //Convert updated array to JSON
    $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
    
    //write json data into data.json file
    if(file_put_contents("comments.json", $jsondata)) {
        
     }
    else 
         echo "error";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}





return;

?>
