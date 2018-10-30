<template>
    <div class="section-container">
        <Separation :name="'Gallery'"></Separation>
        <div class="gallery-title nanum-pen-font">Photo Gallery</div>

        <ul class="gallery-img-area" ref="galleryArea">
            <li class="gallery-img-box pointer"
                @click="onShowPhoto(0)"
            >
                <img class="gallery-img" src="../../assets/images/gallery/1.jpeg" />
            </li>
            <li class="gallery-img-box pointer"
                @click="onShowPhoto(1)"
            >
                <img class="gallery-img" src="../../assets/images/gallery/1.jpeg" />
            </li>
            <li class="gallery-img-box pointer"
                @click="onShowPhoto(2)"
            >
                <img class="gallery-img" src="../../assets/images/gallery/1.jpeg" />
            </li>
            <li class="gallery-img-box pointer"
                @click="onShowPhoto(3)"
            >
                <img class="gallery-img" src="../../assets/images/gallery/1.jpeg" />
            </li>
            <li class="gallery-img-box pointer"
                @click="onShowPhoto(4)"
            >
                <img class="gallery-img" src="../../assets/images/gallery/1.jpeg" />
            </li>
            <li class="gallery-img-box pointer"
                @click="onShowPhoto(5)"
            >
                <img class="gallery-img" src="../../assets/images/gallery/1.jpeg" />
            </li>
        </ul>
        <GalleryModal v-if="onModalOpen" :photoId="photoId"></GalleryModal>
    </div>
</template>
<script type="text/javascript" src="./js/gallery.js"></script>
<style type="text/css" src="./css/gallery.css"></style>
<style type="text/css" src="./css/media-gallery.css"></style>