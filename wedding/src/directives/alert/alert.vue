<template>
	<div class="alert-modal-container">
		<div class="alert-contents-area">
			<div class="alert-text">
				{{ text }}
			</div>

			<div class="alert-btn-box">
				<button class="alert-btn pointer"
					@click="closeAlert"
				>
					확인
				</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript" src="./js/alert.js"></script>
<style type="text/css" src="./css/alert.css"></style>
