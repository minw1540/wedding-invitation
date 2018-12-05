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
		<transition name="fadeDown">
			<div class="comment-item-delete-layer"
				v-if="isDelete"
			>
				<div class="comment-item-delete-layer-bundle">
					<div class="comment-item-delete-title">
						정말로 삭제 하시겠습니까?
					</div>

					<div class="comment-item-delete-pwd-box">
						<div class="comment-item-delete-pwd-input-part">
							<input class="comment-item-delete-pwd-input"
								type="password"
								placeholder="비밀번호"
								v-model="userInputPwd"
							/>
						</div>
					</div>

					<div class="comment-item-delete-confirm-btn-box">
						<button class="comment-item-delete-confirm-btn cancel pointer"
							@click="deleteCommentCancel"
						>
							취소
						</button>
						<button class="comment-item-delete-confirm-btn delete pointer"
							@click="onDeleteCommentApi"
						>
							삭제
						</button>
					</div>
				</div>
			</div>
		</transition>
	</li>
</template>
<script type="text/javascript" src="./js/commentItem.js"></script>
<style type="text/css" src="./css/commentItem.css"></style>
