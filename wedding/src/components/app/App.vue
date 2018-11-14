<template>
    <div id="app" class="app-container">
        <div class="app-main-img-area" :style="{height : windowHeight * 0.7 + 'px'}">
            <div class="app-main-img-box" :style="{height : windowHeight * 0.7 + 'px'}">
                <img class="app-main-img" src="../../assets/images/intro-main.jpeg" />
            </div>
        </div>

        <Intro></Intro>
        <Invitation></Invitation>
        <Gallery></Gallery>
        <!-- <Map></Map> -->
        <Comment></Comment>
    </div>
</template>

<script type="text/javascript" src="./js/app.js"></script>
<style type="text/css" src="../../assets/css/reset.css"></style>
<style type="text/css" src="../../assets/css/common.css"></style>
<style type="text/css" src="./css/app.css"></style>
