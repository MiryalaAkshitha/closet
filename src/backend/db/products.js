import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Libas",
    des: "Women Bandhani",
    price: 1999,
    categoryName: "kurthi",
    rating: 5,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/14/ef8c3f55-675b-44c9-98ea-290ba6d3923d1602629068006-1.jpg",
  },
  {
    _id: uuid(),
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15289094/2021/12/24/207dda85-8af9-4ca8-a52f-5220c4f7040a1640331732423-HRX-by-Hrithik-Roshan-Women-Tshirts-9561640331731743-5.jpg",
    title: "HRX by Hrithik",
    des: "Traning reversible Tshirt",
    price: 899,
    categoryName: "Tops",
    rating: 1,
  },
  {
    _id: uuid(),
    title: "Roadster",
    des: "solid boxy-fit crop top",
    price: 400,
    categoryName: "Tops",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11697286/2020/6/19/34f2459c-f46d-4788-bd56-ce5fcb81f09c1592561394656-Roadster-Women-Tops-8581592561393047-1.jpg",
  },
  {
    _id: uuid(),
    title: "20Dresses",
    des: "floral-print tiered",
    price: 3200,
    categoryName: "floral-dress",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11844032/2020/7/6/9148885c-31ff-41fb-827b-78d0bd4687ba159401506946920DressesFlowersOnMyTiersMaxiDressforwomen1.jpg",
  },
  {
    _id: uuid(),
    title: "ananya",
    des: "Bandhani cotton",
    price: 2100,
    categoryName: "kurthi",
    rating: 4.5,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13932876/2021/4/14/7ac5777f-1bb6-41ae-82f2-b432efca47661618405359810AnaynaWomensFlaredKurta2.jpg",
  },
  {
    _id: uuid(),
    title: "Harpa",
    des: "floral-A-Line",
    price: 5000,
    categoryName: "floral-dress",
    rating: 5,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/6/e730759b-0f29-4928-bb36-eed02689b7ef1601935513476-1.jpg",
  },
  {
    _id: uuid(),
    title: "PRENEA",
    des: "floral-Georgette-maxi",
    price: 6500,
    categoryName: "floral-dress",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17625352/2022/3/24/387404ec-50fc-4274-95c5-fd0f538cc51c1648105786020PRENEAMulticolouredFloralGeorgetteMaxiDress1.jpg",
  },
  {
    _id: uuid(),
    title: "plusS",
    des: "floral-A-Line",
    price: 3000,
    categoryName: "floral-dress",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14059226/2021/6/12/572a6ab9-7c46-4e08-a638-46f178e775b01623482101341PUMAMenOliveGreenSolid10ForestNightTrackpantsTshirtsPumaMenS1.jpg",
  },
  {
    _id: uuid(),
    title: "SASSAFARAS",
    des: "Floral-wrap-dress",
    price: 1200,
    categoryName: "floral-dress",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11549542/2020/2/27/04163af6-e24a-4577-be4e-edc52ae8f9041582785260912-SASSAFRAS-Women-Yellow-Printed-Wrap-Dress-6611582785258247-1.jpg",
  },
  {
    _id: uuid(),
    title: "Nautica",
    des: "V-neck T-shirt",
    price: 1000,
    categoryName: "Tops",
    rating: 5,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14013716/2022/2/24/74c2d59a-660c-408c-9cb6-0c8d5eaf8cb71645693793910-Nautica-Women-Blue-V-Neck-Cotton-T-shirt-8991645693793318-1.jpg",
  },
  {
    _id: uuid(),
    title: "Puma",
    des: "Women Branded Logo-printed",
    price: 1350,
    categoryName: "Tops",
    rating: 5,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16755750/2022/2/10/4ee64118-9588-4037-be19-4f1b5a2aac691644487766283-Puma-Women-Blue--White-Brand-Logo-Printed-Drop-Shoulder-Slee-1.jpg",
  },
  {
    _id: uuid(),
    title: "Harpa",
    des: "floral A-line",
    price: 1500,
    categoryName: "floral-dress",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg",
  },
  {
    _id: uuid(),
    title: "anayna",
    des: "Floral-maxi",
    price: 2500,
    categoryName: "floral-dress",
    rating: 3,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16477694/2021/12/27/6290d5f5-2b44-4254-b970-b21771a30f591640607086661-anayna-Women-Dresses-2031640607085991-1.jpg",
  },
  {
    _id: uuid(),
    title: "Ishin",
    des: "Bandhani Anarkali Kurta",
    price: 2200,
    categoryName: "kurthi",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12766966/2020/11/19/d1a4cc48-ff90-47ab-ad36-800743e83d641605767381033-Ishin-Womens-Rayon-Red-Bandhani-Print-Embellished-Anarkali-K-1.jpg",
  },
  
  {
    _id: uuid(),
    title: "INDYA",
    des: "Women Purple Ethnic",
    price: 4500,
    categoryName: "kurthi",
    rating: 5,
    imageURL:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17814950/2022/4/8/e565e0ed-ea38-498d-88a6-d929e5ee409c1649402219504INDYAWomenPurpleEthnicMotifsEmbellishedKeyholeNeckFlaredSlee1.jpg",
  },
  {
    _id: uuid(),
    title: "Puma",
    des: "Women White Brand Logo Print",
    price: 2500,
    categoryName: "Tops",
    rating: 3,
    imageURL:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16755904/2022/3/19/a1cf6652-858e-406f-8cd6-d38db1d793921647681506482-Puma-Women-White-Brand-Logo-Print-Drop-Shoulder-Sleeves-dryC-2.jpg",
  },
  {
    _id: uuid(),
    title: "adidas",
    des: "white comfy-top",
    price: 3000,
    categoryName: "Tops",
    rating: 5,
    imageURL:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17010482/2022/3/24/b223dc66-bddb-490d-979b-42d513653d691648107337232-ADIDAS-Women-Tshirts-531648107336846-1.jpg",
  },
  {
    _id: uuid(),
    title: "nike",
    des: "black causal wear",
    price: 3000,
    categoryName: "Tops",
    rating: 4,
    imageURL:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15821680/2021/11/9/bf15cd84-5123-4ab2-afef-defff9c475261636460622077-Nike-Dri-FIT-Race-Womens-Short-Sleeve-Running-Top-7811636460-1.jpg",
  },
];

