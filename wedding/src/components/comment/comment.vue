<template>
    <div class="section-container">
        <Separation :name="'방명록'"></Separation>
        <div class="comment-title-box">
            <div class="comment-title nanum-pen-font">신랑, 신부에게</div>
            <div class="comment-title nanum-pen-font">축하인사를 남겨주세요.</div>
        </div>

		<ul class="comment-input-area">
			<li class="comment-input-bundle">
				<div class="comment-input-item-name">
					성 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 함 :
				</div>
				<div class="comment-input-item-box">
					<input class="comment-input"
						v-model="userInput.name"
					/>
				</div>
			</li>

			<li class="comment-input-bundle">
				<div class="comment-input-item-name">
					비밀번호 :
				</div>
				<div class="comment-input-item-box">
					<input class="comment-input"
						v-model="userInput.pwd"
					/>
				</div>
			</li>
			<li class="comment-input-bundle comment-textarea-bundle">
				<div class="comment-input-item-name">
					메 시 지 :
				</div>
				<div class="comment-input-item-box">
					<textarea class="comment-input comment-textarea"
						v-model="userInput.content"
					/>
				</div>
			</li>
		</ul>

		<div class="comment-send-btn-box">
			<button class="comment-send-btn pointer"
				@click="onSendComment"
			>
				축하 메시지 남기기
			</button>
		</div>

			<transition-group
				name="slideDown"
				tag="ul"
				class="comment-list-area"
			>
				<commentItem
					v-for="(item, index) in commentList"
					v-bind:key="index"
					:commentItem="item"
				></commentItem>
			</transition-group>

    </div>
</template>
<script type="text/javascript" src="./js/comment.js"></script>
<style type="text/css" src="./css/comment.css"></style>
