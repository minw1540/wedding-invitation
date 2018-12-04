import Separation from '../../../directives/separation/separation.vue';
import CommentItem from '../../commentItem/commentItem.vue';
import Alert from '../../../directives/alert/alert.vue';

export default {
    name: 'Comment',
    components: {
        Separation,
		CommentItem,
		Alert
    },
    data() {
        return {
			userInput : {
				name : '',
				pwd : '',
				content : '',
			},
			commentList : [],
			alertModal : {
				test : '',
				isOpen :  false
			}
		};
    },
    methods : {
		onSendComment() {

			let name = this.userInput.name.trim();
			let pwd = this.userInput.pwd.trim();
			let content = this.userInput.content.trim();

			if(name === ''){
				this.onOpenAlertModal('성함을 입력해주세요.');
				return;
			}

			if(pwd === ''){
				this.onOpenAlertModal('비밀번호를 입력해주세요.');
				return;
			}

			if(content === ''){
				this.onOpenAlertModal('메시지를 입력해주세요.');
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
		onOpenAlertModal(text){

			if(typeof text === 'undefined'){
				return;
			}

			this.alertModal.text = text;
			this.alertModal.isOpen = true;
			return;
		},
		onCloseAlertModal(){
			this.alertModal.isOpen = false;
			return;
		}
    },
    created() {
        return;
    },
}
