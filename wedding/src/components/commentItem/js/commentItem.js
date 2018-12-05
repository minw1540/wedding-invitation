import _axios from 'axios';
import * as _ from 'underscore';
const _apiUrl = process.env.VUE_APP_API_HOST + process.env.VUE_APP_API_PATH;

export default {
    name : 'CommentItem',
    props : ['commentItem'],
	data() {
        return {
			isDelete : false,
			userInputPwd : ''
		};
    },
    methods : {
		deleteComment() {
			this.isDelete = true;
			return;
		},
		deleteCommentCancel() {
			this.isDelete = false;
			return;
		},
		onDeleteCommentApi(){

			let userInputPwdParam = this.userInputPwd.trim();
			let parent = this.$parent.$parent;

			if(userInputPwdParam === ''){
				parent.onOpenAlertModal('비밀번호를 입력해주세요.');
				return;
			}

			_axios.put(_apiUrl + 'deleteComment', {
				no : this.commentItem.no,
				pwd : userInputPwdParam
			})
            .then((response) => {

				let result = response.data;

				if(result.data.length < 1){
					parent.onOpenAlertModal('올바르지 않은 비밀번호 입니다.');
					return;
				}

				let index = _.findLastIndex(parent.commentList, {
					no : this.commentItem.no
				});

				if(index < 0){
					return;
				}

				this.isDelete = false;
				this.userInputPwd = '';

				parent.commentList.splice(index,1);
                return;
            })
            .catch(() => {
				parent.onOpenAlertModal('서버에 문제가 발생되었습니다. 신랑에게 연락을 부탁드릴께요!!');
                return;
            });
			return;
		}
	}
};
