<template>
  <div>
    <b-carousel id="home-carousel" controls indicators v-model="carouselSlide">
          <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>
    </b-carousel>
    <b-card-group deck>
      <b-card>hey</b-card>
      <b-card>hey</b-card>
      <b-card>hey</b-card>
    </b-card-group>
    <b-container>
      <b-card>
        yooo
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
      carouselSlide: 0
      
    }
  }
}
</script>

<style>

</style>
