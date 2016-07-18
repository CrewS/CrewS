<?php 
$config = require_once realpath(__DIR__.'/..').'/json_config.php';
if(!isset($_COOKIE['auth_s']) || $_COOKIE['auth_s'] != md5($config['PASS'])){
    exit('<form action="../auth.php" method="post"><input type="text" name="password" class="form-control" placeholder="��¼����"><input type="submit" value="��¼" /></form>');
}
?>
<html lang="en">
<head>
	<meta charset="GBK">
	<title>�������ݱ�</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/index.css">
</head>
<body>
	<form class="dataInput" action="../json.php?a=save&d=meiqidainiqubeiji" method="post">
		<div class="form-inline champion">
        			<h3>��һ��</h3>
        		  	<div class="form-group">
        		    	<label>����</label>
        		    	<input type="text" name="g1_name" placeholder="����������">
        		  	</div>
        		  	<div class="form-group">
        		    	<label>ͷ������</label>
        		    	<input type="text" name="g1_link" placeholder="������ͷ������">
        		  	</div>
        		  	<div class="form-group">
        		    	<label>����</label>
        		    	<input type="text" name="g1_value" placeholder="����������">
        		  	</div>
        		</div>

        		<div class="form-inline pinkTeam" >
        			<h3>�ڶ���</h3>
        		  	<div class="form-group">
						<label>����</label>
						<input type="text" name="g2_name" placeholder="����������">
					</div>
					<div class="form-group">
						<label>ͷ������</label>
						<input type="text" name="g2_link" placeholder="������ͷ������">
					</div>
					<div class="form-group">
						<label>����</label>
						<input type="text" name="g2_value" placeholder="����������">
					</div>
        		</div>
        		<div class="form-inline redTeam" >
        			<h3>������</h3>
        		  	<div class="form-group">
						<label>����</label>
						<input type="text" name="g3_name" placeholder="����������">
					</div>
					<div class="form-group">
						<label>ͷ������</label>
						<input type="text" name="g3_link" placeholder="������ͷ������">
					</div>
					<div class="form-group">
						<label>����</label>
						<input type="text" name="g3_value" placeholder="����������">
					</div>
        		</div>
        		<div class="form-inline blueTeam" >
        			<h3>������</h3>
        		  	<div class="form-group">
						<label>����</label>
						<input type="text" name="g4_name" placeholder="����������">
					</div>
					<div class="form-group">
						<label>ͷ������</label>
						<input type="text" name="g4_link" placeholder="������ͷ������">
					</div>
					<div class="form-group">
						<label>����</label>
						<input type="text" name="4_value" placeholder="����������">
					</div>
        		</div>
        		<div class="form-inline whiteTeam" >
        			<h3>������</h3>
        		  	<div class="form-group">
						<label>����</label>
						<input type="text" name="g5_name" placeholder="����������">
					</div>
					<div class="form-group">
						<label>ͷ������</label>
						<input type="text" name="g5_link" placeholder="������ͷ������">
					</div>
					<div class="form-group">
						<label>����</label>
						<input type="text" name="g5_value" placeholder="����������">
					</div>
        		</div>
        		<div class="form-inline whiteTeam" >
        			<h3>������</h3>
        		  	<div class="form-group">
						<label>����</label>
						<input type="text" name="g6_name" placeholder="����������">
					</div>
					<div class="form-group">
						<label>ͷ������</label>
						<input type="text" name="g6_link" placeholder="������ͷ������">
					</div>
					<div class="form-group">
						<label>����</label>
						<input type="text" name="g6_value" placeholder="����������">
					</div>
        		</div>
		<input type="submit" class="btn btn-save" value="����">
	</form>
	
	<script src="js/jquery-1.12.3.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script>
		$(function(){
			//��ȡ����
			var url = 'http://www.biketo.com.cn/s/json.php?a=get&d=meiqidainiqubeiji';
			$.ajax({
				url:url,
				type:'get',
				success:function(msg){
					console.log(111)
					$('.champion').find('input').eq(0).val(msg.chamChinese);
					$('.champion').find('input').eq(1).val(msg.chamEnglish);
					$('.champion').find('input').eq(2).val(msg.chamTeam);
					$('.pinkTeam').find('input').eq(0).val(msg.pinkChinese);
					$('.pinkTeam').find('input').eq(1).val(msg.pinkEnglish);
					$('.pinkTeam').find('input').eq(2).val(msg.pinkTeam);
					$('.redTeam').find('input').eq(0).val(msg.redChinese);
					$('.redTeam').find('input').eq(1).val(msg.redEnglish);
					$('.redTeam').find('input').eq(2).val(msg.redTeam);
					$('.blueTeam').find('input').eq(0).val(msg.blueChinese);
					$('.blueTeam').find('input').eq(1).val(msg.blueEnglish);
					$('.blueTeam').find('input').eq(2).val(msg.blueTeam);
					$('.whiteTeam').find('input').eq(0).val(msg.whiteChinese);
					$('.whiteTeam').find('input').eq(1).val(msg.whiteEnglish);
					$('.whiteTeam').find('input').eq(2).val(msg.whiteTeam);
				},
				error:function(){
					console.log(msg.error);
				}
			})
		})
	</script>
	
</body>
</html>