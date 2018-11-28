<template>
	<li class="comment-list-item-box">
		<div class="comment-item-name-delete-part">
			<div class="comment-item-name">
				{{ commentItem.name }}
			</div>
			<button class="comment-item-delete-btn pointer"
				@click="deleteComment"
			>
				<i class="material-icons">delete_forever</i>
			</button>
		</div>
		<div class="comment-item-content">
			{{ commentItem.content }}
		</div>
	</li>
</template>
<script type="text/javascript" src="./js/commentItem.js"></script>
<style type="text/css" src="./css/commentItem.css"></style>
