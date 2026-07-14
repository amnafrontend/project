let cosmetics = [
    
    {
        name: "Velvet reign liquid lipstick",
        image: "download (3).jpg",
        price: "Rs.4,139",
        rating: "★★★★★ 500 reviews"
       
    },
    {
        name: "Icon Lipstick",
        image: "download (4).jpg",
        price: "Rs.4,139",
         rating: "★★★★★ 250 reviews"

    },
    {
        name: "Blush Crush",
        image: "download (5).jpg",
        price: "Rs.2,140",
         rating: "★★★★★ 300 reviews"
    },
    {
        name: " Wonder glass makeup spray",
        image: "download (6).jpg",
        price: "Rs.4,500",
         rating: "★★★★★ 50 reviews"
    },
     {
        name: "Brightening Cleanser  ",
        image: "aa1.webp",
        price: "Rs.3,250",
         rating: "★★★★★ 333 reviews"
    },
    {
        name: " Daily Makeup Essentials  ",
        image: "updated-1.webp",
        price: "Rs.4,201",
         rating: "★★★★★  370 reviews"
       
    },
     {
        name: "  Blush Crush!",
        image: "blush_crush_hero (1).webp",
        price: "Rs.2,495",
        rating: "★★★★★  496 reviews"
    },
   
      {
        name: " Face Powders  ",
        image: "download (12).jpg",
        price: "Rs.2,895",
         rating: "★★★★★ 142 reviews"
    },
     {
        name: " Halo Glow Liquid Filter ",
        image: "images (11).jpg",
        price: "Rs.1,500",
         rating: "★★★★★ 250 reviews"
    },
    {
        name: "GRABITY   ",
        image: "aa3.webp",
        price: "Rs.2,275",
         rating: "★★★★★ 430 reviews"
    },
    
    
     {
        name: "Softlight powder foundation  ",
        image: "aa2.webp",
        price: "Rs.3,995",
         rating: "★★★★★ 240 reviews"
    },
  
     {
        name: "Mascara Black  ",
        image: "images (13).jpg",
        price: "Rs.15,00",
         rating: "★★★★★ 111 reviews"
    },
    
    

    
];

let daraz = document.getElementById("daraz");

for (let i = 0; i < cosmetics.length; i++) {

    daraz.innerHTML += `
        <div class="card">
            <img src="${cosmetics[i].image}" alt="cosmetics Image">
            <h3>${cosmetics[i].name}</h3>
            <h4>${cosmetics[i].price}</h4>

              
             <div class="rating">${cosmetics[i].rating}</div>
              
        </div>
    `;
}






let amna = [
    
    {
        name: "Brow Grooming Set",
        image: "download (13).jpg",
        price: "Rs.1,795",
        
       
    },
    {
        name: "Essential Sponge Set",
        image: "download (14).jpg",
        price: "Rs.1,695",
         

    },
    {
        name: "Makeup Brush Cleaner",
        image: "download (15).jpg",
        price: "Rs.1,700",
         
    },
    {
        name: " On the Go Mirror",
        image: "download (16).jpg",
        price: "Rs.850",
         
    },
     {
        name: "Lash Applicator  ",
        image: "download (17).jpg",
        price: "Rs.895",
         
    },
    {
        name: "Lash Power Glue ",
        image: "download (18).jpg",
        price: "Rs.890",
        
       
    },
     {
        name: " Duo Eyebrow Brush",
        image: "download (19).jpg",
        price: "Rs.1,795",
        
    },
   
      {
        name: "Foundation Brush  ",
        image: "download (20).jpg",
        price: "Rs.1,995",
        
    },
     {
        name: " Blush & Highlight Brush",
        image: "download (21).jpg",
        price: "Rs.1,595",
        
    },
    {
        name: "Beauty Blender   ",
        image: "download (22).jpg",
        price: "Rs.700",
        
    },
    
    
     {
        name: "Pearl Cosmetic Brush Holder  ",
        image: "images (16).jpg",
        price: "Rs.1,200",
    },
  
     {
        name: "Makeup Brushes  ",
        image: "images (17).jpg",
        price: "Rs.15,00",
        
    },
    
    

    
];






let temu = document.getElementById("temu");



for (let i = 0; i < amna.length; i++) {

    temu.innerHTML += `
        <div class="div">
            <img src="${amna[i].image}" alt="amna Image">
            <h3>${amna[i].name}</h3>
            <h4>${amna[i].price}</h4>

              
           
              
        </div>
    `;
}













