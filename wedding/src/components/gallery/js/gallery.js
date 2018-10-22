import Separation from '../../../directives/separation/separation.vue';
import GalleryModal from '../../../directives/galleryModal/galleryModal.vue';

export default {
    name: 'Gallery',
    components: {
        Separation,
        GalleryModal,
    },
    data() {
        return {
            photoList : [],
        };
    },
    methods : {
        //갤러리 모달창 open
        onShowPhoto(target) {

            if(typeof target === 'undefined'){
                return;
            }
            return;
        },
    },
    created() {
        return;
    },
    mounted() {
        this.$nextTick(function () {
            let children = this.$refs.galleryArea.children;

            for(let index = 0; index < children.length; index++){
                // console.log(children[index].children[0].currentSrc);
                this.photoList.push(children[index].children[0].currentSrc);
            }

            console.log(this.photoList);
            return;
        });
    }
}