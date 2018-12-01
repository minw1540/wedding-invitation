export default {
    name : 'Alert',
    props : ['text', 'isOpen'],
    methods : {
		closeAlert() {
			console.log(this);
			return;
		}
    },
};
