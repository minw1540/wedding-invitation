import Flickity from 'vue-flickity';

export default {
    name : 'GalleryModal',
    components : {
        Flickity
    },
    props : ['windowHeight'],
    data() {
        return {
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: true,
                pageDots: true,
                wrapAround: true,
            }
        }
    },
    methods : {
    },
    created() {
        return;
    }
};