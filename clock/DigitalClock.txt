<!DOCTYPE html>
<html>
	<head>
		<title> Digital Clock </title>
		<style type= "text/css">
			body
			  {
			    background: #00BFFF; 
			  }
			.clock{
		            position absolute;
			    top: 50%;
			    left: 50%;
			    color: #fff;
			    front-size: 80px;
			    padding: 0px 5px 0px 5px;
			}
			    
			
		</style>
	</head>

	<body>
	<div id="MyClock" class="clock"></div>
		<script type="text/javascript">
		function showTime()
		{
    			var date = new Date();
    			var h = date.getHours(); // 0 - 23
    			var m = date.getMinutes(); // 0 - 59
    			var s = date.getSeconds(); // 0 - 59
    			
			h = (h<10)?"0"+h:h;
			m = (m<10)?"0"+m:m;
			s = (s<10)?"0"+s:s;

			var time = h + ":" + m + ":" + s;
			document.getElementById("MyClock").innerText = time;
			document.getElementById("MyClock").textContent = time;
			
			setTimeout(showTime, 1000);
		}
		showTime();
	 	</script>
	</body>
</html>