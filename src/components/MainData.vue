<template>
  <div class="row row-cols-2" style="width: 80%; margin: auto;">
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="col mb-4">
      <div class="card" style="width: 100%;">
        <img :src="restaurant.imageSrc" class="card-img-top" :alt="restaurant.name">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <p class="card-text">{{ restaurant.description }}</p>
          <hr>
          <div class="container">
            <div class="row">
              <div class="input-group mb-3" style="width: 60%; margin-left: 20%;">
                <RouterLink :to="{name: 'resInfo', params: {id: restaurant.n}}" class="btn btn-warning" style="margin: auto;">ข้อมูลเพิ่มเติมเกี่ยวกับ {{ restaurant.name }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  data() {
  return {
    restaurants: [
      {
        name: "โกโบริ",
        description: "ร้านหมูกระทะที่มีเมนูให้ได้เลือกหลากหลาย...",
        imageSrc: "./img/goboriT.png",
        id: "gobori",
        n : 1,
      },
      {
        name: "Grill Terminal",
        description: "ร้านหมูกระทะสุดคุ้ม มีซีฟู้ด...",
        imageSrc: "./img/grillterminalT.png",
        id: "grillterminal",
        n : 2,
      },
      {
        name: "ลักจุ่ม มุมตึก",
        description: "บุฟเฟ่ต์หมูกระทะ อิ่มไม่อั้นในราคาดี ๆ...",
        imageSrc: "./img/lukjumT.png",
        id: "lukjum",
        n : 3,
      },
      {
        name: "เมียงดง Korean BBQ",
        description: "ร้านบุฟเฟ่ต์หมูกระทะในเชียงใหม่ สไตล์เกาหลี...",
        imageSrc: "./img/miangdongT.png",
        id: "miangdong",
        n : 4,
      },
    ],
  };
},
};
</script>

<style>
body {
  background-color: rgb(29, 29, 29);
  margin: 0%;
  padding: 0%;
}
</style>
