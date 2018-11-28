import Separation from '../../../directives/separation/separation.vue';
import CommentItem from '../../commentItem/commentItem.vue';

export default {
    name: 'Comment',
    components: {
        Separation,
		CommentItem,
    },
    data() {
        return {
			userInput : {
				name : '',
				pwd : '',
				content : '',
			},
			commentList : [],
		};
    },
    methods : {
		onSendComment() {
			let name = this.userInput.name.trim();
			let pwd = this.userInput.pwd.trim();
			let content = this.userInput.content.trim();

			if(name === ''){
				alert('성함을 입력해주세요.');
				return;
			}

			if(pwd === ''){
				alert('비밀번호를 입력해주세요.');
				return;
			}

			if(content === ''){
				alert('메시지를 입력해주세요.');
				return;
			}

			let userInputParam = {
				name : name,
				pwd : pwd,
				content : content
			};

			this.commentList.unshift(userInputParam);

			this.userInput = {
				name : '',
				pwd : '',
				content : '',
			};
			return;
		},
    },
    created() {
        return;
    },
}
