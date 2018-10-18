import Intro from '../../intro/intro.vue';
import Invitation from '../../invitation/invitation.vue';

export default {
    name: 'App',
    components: {
        Intro,
        Invitation,
    },
    data() {
        return {
            windowHeight : 0,
            windowWidth : 0,
        };
    },
    methods : {
    },
    created() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        return;
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', () => {

                let width = window.innerWidth;

                if(width === this.windowWidth){
                    return;
                }

                this.windowHeight = window.innerHeight;
                return;
            });
        })
    },
}
