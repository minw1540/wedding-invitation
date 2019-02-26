import Separation from '../../../directives/separation/separation.vue';

export default {
    name: 'Map',
		props : ['windowSize'],
    components: {
        Separation,
    },
    data() {
        return {};
    },
    methods : {
			createMap() {
				let container = this.$refs.mapCanvas;
				let options = {
					center: new daum.maps.LatLng(37.52182734498564, 126.91917111126821),
					level: 4,
				};

				//맵 생성
				let map = new daum.maps.Map(container, options);

				// 주소-좌표 변환 객체를 생성
				let geocoder = new daum.maps.services.Geocoder();

				// 주소로 좌표를 검색
				geocoder.addressSearch('여의도동 28-2', (result, status) => {
					// http://map.daum.net/link/search/여의도웨딩컨벤션
					if (status !== daum.maps.services.Status.OK) {
						return;
					}

					let coords = new daum.maps.LatLng(result[0].y, result[0].x);

					//마커 표시
					let marker = new daum.maps.Marker({
						map: map,
						position: coords,
					});

					//지도 센터 이동
					map.setCenter(coords);
					map.setDraggable(false);
					map.setZoomable(false); 
				});
				return;
			},
    },
    created() {
			return;
    },
		mounted() {
			this.createMap();
			return;
		},
}
