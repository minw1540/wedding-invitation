export default {
    name : 'CommentItem',
    props : ['commentItem'],
	data() {
        return {
			isDelete : false
		};
    },
    methods : {
		deleteComment() {
			console.log(this.isDelete);
			return;
		},
	}
};
