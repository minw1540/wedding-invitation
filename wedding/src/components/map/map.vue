<template>
    <div class="section-container">
        <Separation :name="'Map'"></Separation>

				<div class="map-title nanum-pen-font">
					오시는길
				</div>

				<div class="map-area">
					<div id="map" class="map-canvas" style="width:500px; height:500px;"></div>
				</div>
    </div>
</template>
<script type="text/javascript" src="./js/map.js"></script>
<style type="text/css" src="./css/map.css"></style>
