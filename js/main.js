 const { createApp } = Vue

  createApp({
    data() {
      return {
        header: {
          logoImg: "./img/classic_shop_logo2x.png",

          links: [
            "Home",
            "Shop",
            "Products",
            "Categories",
            "News",
            "Elements"
          ],

          buttonText: "SHOP NOW!"
        },

        footer:{
          logoImg: "./img/classic_shop_logo_footer.png",

          informations: [
            "12345 North Main Street",
            "New York, NY 555555",
            "Phone: 1.800.555.7699",
            "Email:info.company.com",
            "Web: Theme-fusion.com"
          ],

          topProducts:[
            {
              type: "Leather Gloves",
              fullPrice: "$45",
              img: "./img/leather_gloves-400x520.jpg"
            },

                        {
              type: "Black Leather Jacket",
              fullPrice: "$235",
              discountedPrice: "$200",
              img: "./img/black_elegant_leather_jacket-400x520.jpg"
            },

                        {
              type: "Spring Printed Dress",
              fullPrice: "$47",
              img: "./img/spring_printed_dress-400x520.jpg"
            },
          ],

          recentPost: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet ",
            "Lorem ipsum dolor sit ",
            "Lorem ipsum dolor sit amet ",
            "Lorem ipsum dolor sit ",
            "Lorem ipsum dolor sit ",
          ],

          tags: [
            "Black",
            "Boots",
            "Brown",
            "Casual",
            "D&G",
            "Fabric",
            "flowers",
            "Gray",
            "hat",
            "hipster",
            "lines",
            "multi-puropse",
            "Black",
            "Boots",
            "Brown",
            "Casual",
            "D&G",
            "Fabric",
            "flowers",
            "Gray",
            "hat",
            "hipster",
            "lines",
            "multi-puropse",              
          ],

          copyright:[
            "Copyright 2012-2020",
            "Avada Theme by Theme Fusion",
            "All rights reserved",
            "Powered by WordPress"
          ],

          paymentImg: "./img/payment_cards_footer.png"
        }
      }
    }
  }).mount('#app')