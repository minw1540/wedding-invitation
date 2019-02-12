<template>
    <div class="section-container">
        <Separation :name="'Map'"></Separation>

				<div class="map-title nanum-pen-font">
					오시는길
				</div>

				<div class="map-area">
					<div ref="mapCanvas" class="map-canvas" :style="{height : windowSize.windowHeight * 0.3 + 'px', width : windowSize.windowWidth * 0.9 + 'px'}"></div>
				</div>
    </div>
</template>
<script type="text/javascript" src="./js/map.js"></script>
<style type="text/css" src="./css/map.css"></style>
