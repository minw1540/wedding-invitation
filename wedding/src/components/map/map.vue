<template>
<div class="section-container">
	<Separation :name="'Map'"></Separation>

	<div class="map-title nanum-pen-font">
		오시는길
	</div>

	<div class="map-area">
		<div ref="mapCanvas" class="map-canvas" :style="{height : windowSize.windowHeight * 0.3 + 'px', width : windowSize.windowWidth * 0.9 + 'px'}"></div>

		<div class="map-link-box" :style="{width : windowSize.windowWidth * 0.9 + 'px'}">
			<a class="map-link" href="http://map.daum.net/link/search/여의도웨딩컨벤션" target="_blank">
				지도 바로가기
			</a>
		</div>
	</div>

	<div class="map-location-name-box">
		<div class="map-location-name">
			여의도웨딩컨벤션
		</div>
		<div class="map-location">
			서울특별시 영등포구 여의도동 28-2 KT빌딩 여의도웨딩컨벤션
		</div>
	</div>

	<ul class="map-about">
		<li class="map-about-item">
			<div class="map-about-item-name">
				지하철
			</div>
			<div class="map-about-item-info">
				5호선·9호선 여의도역 - 2번 출구
			</div>
		</li>

		<li class="map-about-item">
			<div class="map-about-item-name">
				버스
			</div>
			<div class="map-about-item-info">
				<div class="map-about-item-bus">
					간선 : 160, 162, 360, 503, 600, 662
				</div>

				<div class="map-about-item-bus">
					지선 : 5012, 5615, 5618, 5713, 6513, 6628
				</div>

				<div class="map-about-item-bus">
					광역 : 10, 11-1, 11-2, 83, 88, 510, 530
				</div>

			</div>
		</li>

		<li class="map-about-item">
			<div class="map-about-item-name">
				자가용
			</div>
			<div class="map-about-item-info">
				네비게이션 : "여의도웨딩컨벤션" 또는 "여의도KT" 또는 "여의대로14" 입력
			</div>
		</li>
	</ul>

</div>
</template>
<script type="text/javascript" src="./js/map.js"></script>
<style type="text/css" src="./css/map.css"></style>
<style type="text/css" src="./css/media-map.css"></style>
