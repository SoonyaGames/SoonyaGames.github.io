<?php
        if ( $_POST[subreg] ){
        $name = $_POST[name];
        $file = fopen( "massreg.txt", "w" );
        $text = $name;
        $con = fwrite ($file, $text);
        if($con){
            echo ("a<href='massreg.txt'>Link</a>");
        }else{
            echo ("no");
        }
            
        }
?>