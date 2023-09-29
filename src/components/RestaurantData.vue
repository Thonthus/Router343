<template>
  <div class="row row-cols-1" style="width: 40%; margin: auto;">
    <div>
      <div class="card" style="width: 100%;">
        <img :src="restaurant.imageSrc" class="card-img-top" :alt="restaurant.name">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <p class="card-text">{{ restaurant.description }}</p>
          <p class="card-text">&#128184; {{ restaurant.price }} &#128184;</p>
          <p class="card-text">&#128339; {{ restaurant.time }} &#128339;</p>
          <p class="card-text">&#128222; {{ restaurant.tel }} &#128222;</p>
        </div>
      </div>
    </div>
  </div>


  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  mt-4 bt-0" style="background-color: gray;">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary" >© 2023 Thonthus Prangpetch 6504101343</span>
    </div>
  </footer>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      restaurant: null,
    };
  },
  created() {
    const route = useRoute();
    const id = parseInt(route.params.id);
    
    
    this.restaurant = this.restaurants.find((r) => r.id === id);
  },
  computed: {
    restaurants() {
      
      return [
        {
          name: "โกโบริ",
          description: "ร้านหมูกระทะที่มีเมนูให้ได้เลือกหลากหลาย รวมไปถึงของสดแต่ละอย่าง สะอาด สดใหม่ทุกวัน มีเมนูหมูหมักให้เลือกเพียบ! รวมถึงเมนูพร้อมทานอื่นๆ และของหวาน",
          price:'คนละ 229 บาท',
          time: "เปิด 10:00 น. - 23.00 น. ",
          tel: "โทร 08-1885-4405",
          imageSrc: "../img/goboriT.png",
          id: 1,
        },
        {
          name: "Grill Terminal",
          description: "ร้านหมูกระทะสุดคุ้ม ที่ไม่ได้มีแค่หมูกระทะ แต่ยังมีคาราวานซีฟู้ด ไว้คอยให้บริการอีกด้วย ราคาค่อนข้างย่อมเยา",
          price:'คนละ 269 บาท',
          time: "เปิด 16:00 น. - 23.00 น.",
          tel: "โทร 09-4639-6455",
          imageSrc: "../img/grillterminalT.png",
          id: 2,
        },
        {
          name: "ลักจุ่ม มุมตึก",
          description: "บุฟเฟ่ต์หมูกระทะ อิ่มไม่อั้นในราคาดี ๆ รวมเครื่องดื่ม มีทั้งหมู ไก่ เนื้อ ซีฟู้ด และผักสด รวมถึงเมนูเนื้อหมักสูตรเด็ดของทางร้าน",
          price:'คนละ 219 บาท',
          time: "เปิด 10:00 น. - 04.00 น.",
          tel: "โทร 08-3117-8555",
          imageSrc: "../img/lukjumT.png",
          id: 3,
        },
        {
          name: "เมียงดง Korean BBQ",
          description: "ร้านบุฟเฟ่ต์หมูกระทะในเชียงใหม่ แต่มาในสไตล์เกาหลี สายเกาต้องไปโดน ทั้งสไตล์อาหาร เครื่องเคียง รวมถึงเพลงที่เปิดเป็นสไตล์เกาหลี ส่วนเมนูอาหารก็มีให้เลือกเยอะแยะมากมาย",
          price:'คนละ 239 บาท',
          time: "เปิด 16:30 น. - 23.30 น.",
          tel: "โทร 08-2973-9837",
          imageSrc: "../img/miangdongT.png",
          id: 4,
        },
      ];
    },
  },
};
</script>


<style scoped>
body {
  background-color: rgb(29, 29, 29);
  margin: 0%;
  padding: 0%;
}
</style>