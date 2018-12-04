import Separation from '../../../directives/separation/separation.vue';
import CommentItem from '../../commentItem/commentItem.vue';
import Alert from '../../../directives/alert/alert.vue';

import _axios from 'axios';
const _apiUrl = process.env.VUE_APP_API_HOST + process.env.VUE_APP_API_PATH;

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
			},
			isApiCall :  false
		};
    },
    methods : {
		onSendComment() {

			if(this.isApiCall){
				this.onOpenAlertModal('데이터 처리중 입니다.');
				return;
			}

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

			this.isApiCall = true;

			_axios.post(_apiUrl + 'sendComment', userInputParam)
            .then((response) => {

                this.isApiCall = false;

				let result = response.data;

				if(result.result < 1){
					this.onOpenAlertModal('잘못된 입력 정보 입니다.');
					return;
				}

				this.commentList.unshift(userInputParam);

				this.userInput = {
					name : '',
					pwd : '',
					content : '',
				};
                return;
            })
            .catch((error) => {
                this.isApiCall = false;
				this.onOpenAlertModal('서버에 문제가 발생되었습니다. 신랑에게 연락을 부탁드릴께요!!');
                return;
            });
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
