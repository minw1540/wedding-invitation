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
		}
	}
};
