export default {
    name : 'Alert',
    props : ['text'],
    methods : {
		closeAlert() {
			this.$parent.onCloseAlertModal();
			return;
		}
    },
};
