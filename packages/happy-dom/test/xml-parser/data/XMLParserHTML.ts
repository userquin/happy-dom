export default `
	<!DOCTYPE html>
	<html>
		<head>
			<title>Title</title>
		</head>
		<body>
			<div class="class1 class2" id="id">
				<!-- Comment 1 !-->
				<?Question mark comment>
				<!Exclamation mark comment>
				<b>Bold</b>
				<!-- Comment 2 !-->
				<span>Span</span>
			</div>
			<article class="class1 class2" id="id">
				<!-- Comment 1 !-->
				<b>Bold</b>
				<!-- Comment 2 !-->
			</article>
			<img>
			<self-closing-custom-tag />
		</body>
	</html>
`.trim();
