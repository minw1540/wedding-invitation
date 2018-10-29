<template>
    <transition name="fadeDown">
        <div class="gallery-modal-area">

            <button class="gallery-modal-close-btn pointer"
                @click="onClosePhoto"
            >
                <i class="material-icons gallery-modal-close-btn-icon">close</i>
            </button>

            <div class="gallery-modal-container">
                <flickity ref="flickity" :options="flickityOptions">
                    <div class="gallery-modal-cell">
                        <img class="" src="../../assets/images/gallery/1.jpeg" />
                    </div>
                    <div class="gallery-modal-cell">
                        <img class="" src="../../assets/images/gallery/1.jpeg" />
                    </div>
                    <div class="gallery-modal-cell">
                        <img class="" src="../../assets/images/gallery/1.jpeg" />
                    </div>
                    <div class="gallery-modal-cell">
                        <img class="" src="../../assets/images/gallery/1.jpeg" />
                    </div>
                    <div class="gallery-modal-cell">
                        <img class="" src="../../assets/images/gallery/1.jpeg" />
                    </div>
                    <div class="gallery-modal-cell">
                        <img class="" src="../../assets/images/gallery/1.jpeg" />
                    </div>
                </flickity>
            </div>
        </div>
    </transition>
</template>
<script type="text/javascript" src="./js/galleryModal.js"></script>
<style type="text/css" src="./css/gallery-modal.css"></style>
<style type="text/css" src="./css/media-gallery-modal.css"></style>
