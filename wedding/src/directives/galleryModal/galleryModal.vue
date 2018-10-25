<template>
    <div class="gallery-modal-area">
        <div class="gallery-modal-container">
            <flickity ref="flickity" :options="flickityOptions">
                <div class="gallery-modal-cell" :style="{height : windowHeight * 0.7 + 'px'}">
                    <img class="" src="../../assets/images/gallery/1.jpeg" />
                </div>
                <div class="gallery-modal-cell" :style="{height : windowHeight * 0.7 + 'px'}">
                    <img class="" src="../../assets/images/gallery/1.jpeg" />
                </div>
                <div class="gallery-modal-cell" :style="{height : windowHeight * 0.7 + 'px'}">
                    <img class="" src="../../assets/images/gallery/1.jpeg" />
                </div>
                <div class="gallery-modal-cell" :style="{height : windowHeight * 0.7 + 'px'}">
                    <img class="" src="../../assets/images/gallery/1.jpeg" />
                </div>
                <div class="gallery-modal-cell" :style="{height : windowHeight * 0.7 + 'px'}">
                    <img class="" src="../../assets/images/gallery/1.jpeg" />
                </div>
                <div class="gallery-modal-cell" :style="{height : windowHeight * 0.7 + 'px'}">
                    <img class="" src="../../assets/images/gallery/1.jpeg" />
                </div>

            </flickity>
        </div>
    </div>
</template>
<script type="text/javascript" src="./js/galleryModal.js"></script>
<style type="text/css" src="./css/gallery-modal.css"></style>
<style type="text/css" src="./css/media-gallery-modal.css"></style>
