import Separation from '../../../directives/separation/separation.vue';

export default {
    name: 'Map',
    components: {
        Separation,
    },
    data() {
        return {};
    },
    methods : {
    },
    created() {
        return;
    },
		mounted() {
			var container = document.getElementById('map');
			var options = {
				center: new daum.maps.LatLng(33.450701, 126.570667),
				level: 3
			};

			var map = new daum.maps.Map(container, options);
		},
}
