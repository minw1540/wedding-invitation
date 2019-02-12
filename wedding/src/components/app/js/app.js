import Intro from '../../intro/intro.vue';
import Invitation from '../../invitation/invitation.vue';
import Gallery from '../../gallery/gallery.vue';
import Map from '../../map/map.vue';
import Comment from '../../comment/comment.vue';


export default {
    name: 'App',
    components: {
        Intro,
        Invitation,
        Gallery,
        Map,
        Comment
    },
    data() {
        return {
						windowSize : {
							windowHeight : 0,
							windowWidth : 0,
						},
        };
    },
    methods : {
    },
    created() {
        this.windowSize.windowWidth = window.innerWidth;
        this.windowSize.windowHeight = window.innerHeight;
        return;
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', () => {

                let width = window.innerWidth;

                if(width === this.windowSize.windowWidth){
                    return;
                }

								this.windowSize.windowWidth = width;
                this.windowSize.windowHeight = window.innerHeight;
                return;
            });
        })
    },
}
