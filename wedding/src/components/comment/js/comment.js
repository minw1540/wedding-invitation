import Separation from '../../../directives/separation/separation.vue';
import CommentItem from '../../commentItem/commentItem.vue';
import Alert from '../../../directives/alert/alert.vue';

import encDec from '../../../assets/js/encDec.js';
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
		//댓글 데이터 가져오기
		getCommentList(){
			_axios.get(_apiUrl + 'getCommentList')
            .then((response) => {

                let result = response.data;
				this.commentList = result.data;
                return;
            })
            .catch(() => {
				this.onOpenAlertModal('서버에 문제가 발생되었습니다. 신랑에게 연락을 부탁드릴께요!!');
				return;
            });
			return;
		},
		//댓글 작성
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

				this.commentList.unshift({
					no : result.data[0].no,
					name : result.data[0].name,
					content : result.data[0].content
				});

				this.userInput = {
					name : '',
					pwd : '',
					content : '',
				};
                return;
            })
            .catch(() => {
                this.isApiCall = false;
				this.onOpenAlertModal('서버에 문제가 발생되었습니다. 신랑에게 연락을 부탁드릴께요!!');
                return;
            });
			return;
		},
		//alert 모달창 오픈
		onOpenAlertModal(text){

			if(typeof text === 'undefined'){
				return;
			}

			this.alertModal.text = text;
			this.alertModal.isOpen = true;
			return;
		},
		//alert 모달창 닫기
		onCloseAlertModal(){
			this.alertModal.isOpen = false;
			return;
		}
    },
    created() {
		this.getCommentList();
        return;
    },
}
