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
					level: 3
				};

				let map = new daum.maps.Map(container, options);

				// 주소-좌표 변환 객체를 생성합니다
				var geocoder = new daum.maps.services.Geocoder();

				// 주소로 좌표를 검색합니다
				geocoder.addressSearch('여의도동 28-2', function(result, status) {
					// 정상적으로 검색이 완료됐으면
					if (status === daum.maps.services.Status.OK) {

						var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						// 결과값으로 받은 위치를 마커로 표시합니다
						var marker = new daum.maps.Marker({
							map: map,
							position: coords
						});

						// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
						map.setCenter(coords);
					}
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
