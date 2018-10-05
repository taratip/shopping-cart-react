const products = [
  {
    id: 1,
    name: "Pillow",
    price: 14.5,
    description: "SUPER PLUSH MATERIAL – The Beckham Luxury Linens Gel-Filled Fiber Pillows are crafted in super plush gel fiber that puts all other standard pillows to shame! They are expertly tailored to ensure maximum comfort for any and all sleeping positions.",
    imagePath: "../../static/img/gem-01.gif",
    inventory: 10,
    reviews: [
      {
        id: 1,
        createDate: "Tuesday",
        author: "Derek",
        rating: 4,
        body: "Extremely comfortable. However, the fluffiness wesrd off after a few weeks"
      },
      {
        id: 2,
        createDate: "Wednesday",
        author: "Joseph",
        rating: 5,
        body: "Great pillow at a great price!"
      },
      {
        id: 3,
        createDate: "Friday",
        author: "Katheleen",
        rating: 5,
        body: "Super comfy."
      }
    ]
  },
  {
    id: 2,
    name: "Outdoor Gears",
    price: 10.5,
    description: "Rigorous Testing: All claims are verified with laboratories using standard testing protocols set by the US EPA, NSF, ASTM for water purifiers.",
    imagePath: "./static/img/gem-02.gif",
    inventory: 1,
    reviews: [
      {
        id: 1,
        createDate: "Monday",
        author: "Ethan",
        rating: 1,
        body: "Ugh."
      },
      {
        id: 2,
        createDate: "Friday",
        author: "Customer",
        rating: 3,
        body: "I have many on hand and packed in my bug out bags."
      }
    ]
  },
  {
    id: 3,
    name: "Oven Thermometer",
    price: 6.3,
    description: "Oven thermometer that displays true oven temperature to assist in safe food preparation",
    imagePath: "./static/img/gem-03.gif",
    inventory: 5,
    reviews: [
      {
        id: 1,
        createDate: "Sunday",
        author: "Jo",
        rating: 5,
        body: "Works great! My oven is strange and needs replacing, but this helps me figure out what temp is really being produced."
      }
    ]
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 77.99,
    description: "100 - FOOT BLUETOOTH RANGE - play up to 100 feet away from your device; our advanced antenna design with Bluetooth 4.2 provides fast connection and incredible wireless Bluetooth range of up to 100 unobstructed feet from your audio device",
    imagePath: "./static/img/gem-03.gif",
    inventory: 2,
    reviews: [
      {
        id: 1,
        createDate: "Sunday",
        author: "Emily",
        rating: 1,
        body: "It last 4 days . It won’t charge . It won’t play"
      },
      {
        id: 2,
        createDate: "Thursday",
        author: "Christopher",
        rating: 4,
        body: "Excellent quality for the money."
      }
      ,
      {
        id: 3,
        createDate: "Thursday",
        author: "David",
        rating: 4,
        body: "starsPretty good."
      }
    ]
  },
  {
    id: 5,
    name: "Blanket",
    price: 70.15,
    description: "A well-made, fluffy duvet with genuine down that tops our list for the best on the market today.",
    imagePath: "./static/img/gem-03.gif",
    inventory: 1,
    reviews: [
      {
        id: 1,
        createDate: "Sunday",
        author: "Customer",
        rating: 5,
        body: "Amazing quality"
      },
      {
        id: 2,
        createDate: "Thursday",
        author: "Park",
        rating: 5,
        body: "Great quality and value. Super warm and durable yet lightweight!"
      }
    ]
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 14,
    description: "PERFECT ALL ROUNDER - being Polarized and 400UV protection makes these sunglasses the perfect choice for outdoor sports and activities such as driving, fishing, skiing, travelling, hiking, boating, and is suitable as high fashion accessory and daily wear all year round.",
    imagePath: "./static/img/gem-03.gif",
    inventory: 10,
    reviews: [
      {
        id: 1,
        createDate: "Sunday",
        author: "Morgan",
        rating: 5,
        body: "Inexpensive alternative"
      },
      {
        id: 2,
        createDate: "Thursday",
        author: "Ananya",
        rating: 4,
        body: "Stylish and sturdy at a great price! I get compliments wearing these snazzy aviators :)"
      },
      {
        id: 3,
        createDate: "Monday",
        author: "Tom",
        rating: 3,
        body: "Seem really nice but not very durable. My lens pops out with easy but it's even harder to put back in."
      }
    ]
  }
];

export default products;
