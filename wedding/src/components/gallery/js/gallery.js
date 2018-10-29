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
            photoId : 0,
            onModalOpen : false,
        };
    },
    methods : {
        //갤러리 모달창 open
        onShowPhoto(target) {

            if(typeof target === 'undefined'){
                return;
            }

            this.photoId = target;
            this.onModalOpen = true;
            return;
        },
    },
    created() {
        return;
    },
}