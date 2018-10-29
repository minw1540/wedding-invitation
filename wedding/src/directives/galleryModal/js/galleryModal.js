import Flickity from 'vue-flickity';

export default {
    name : 'GalleryModal',
    components : {
        Flickity
    },
    props : ['photoId'],
    data() {
        return {
            flickityOptions: {
                initialIndex: this.photoId,
                prevNextButtons: true,
                pageDots: true,
                wrapAround: true,
            }
        }
    },
    methods : {
        onClosePhoto(){
            this.$parent.onModalOpen = false;
            return;
        }
    },
    created() {
        return;
    }
};