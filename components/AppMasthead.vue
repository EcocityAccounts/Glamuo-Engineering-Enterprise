<template>
  <div class="masthead" :style="`background:${bkcolor}`">
    <img class="ppl-banner" :src="`/${img}.png`" alt="Banner Image">
<span id="titletext">{{ title }}
</span>
<img class="ppl-banner-rt" src="/nederland_colorado_tinyfood_square_infopanel.jpg" alt="Tiny food non-profit quality food access network">
  </div>
</template>

<script>
export default {
  props: {
    bkcolor: {
      type: String,
      default: '#745f4f'
    },
    title: {
      type: String,
      default: 'Tiny Food'
    },
    img: {
      type: String,
      default: 'banner-ppl'
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  position: relative;
  z-index: 100;
  font-size: 60px;
  padding: 8px 80px;
}

#titletext {
  font-size: 42px;
}

.bk {
  position: absolute;
  top: 0;
  left: 0;
}

.ppl-banner {
  position: absolute;
  z-index: 10;
  /*right: 100px;*/
  height: 100px;
}

.ppl-banner-rt {
  position: absolute;
  z-index: 10;
  right: 0px;
}

.masthead {
  width: 100%;
  height: 100px;
  color: white;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
}
</style>