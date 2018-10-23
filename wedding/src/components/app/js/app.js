import Intro from '../../intro/intro.vue';
import Invitation from '../../invitation/invitation.vue';
import Gallery from '../../gallery/gallery.vue';

// import * as _config from '../../../assets/js/common.js';

export default {
    name: 'App',
    components: {
        Intro,
        Invitation,
        Gallery,
    },
    data() {
        return {
            windowHeight : 0,
            windowWidth : 0,
            windowHeightClass : undefined,
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
