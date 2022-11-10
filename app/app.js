var ITEMS = [
  {
    itemType: "Tent",
    itemImage: "tent-300x300.jpg",
    itemName: "REI Co-op Passage 2 Tent",
    itemBrand: "REI",
    itemPrice: "$159.99",
    itemColors: "Forest Floor | Placid Lake Blue | Camoflauge",
    itemDescription:
      "A simple design for 2 people (or 1 and lots of gear), the REI Co-op Passage 2 tent is your 3-season cocoon, featuring ample interior space, 2 doors and 2 vestibules with plenty of room under the fly.",
    itemDimensions: "88 x 52 inches",
    itemMaterial: "Polyester",
    itemFeatures:
      "2 twin stake-out vestibules provide large covered areas for gear storage, hanging out and more",
    itemUses: "storage, sleeping, and good times",
    itemReviews: "188",
  },
  {
    itemType: "Backpack",
    itemImage: "backpack-300x300.jpg",
    itemName: "REI Co-op Trailbreak 60 Pack",
    itemBrand: "REI",
    itemPrice: "$149.99",
    itemColors: "Indigo | Tumbleweed",
    itemDescription:
      "Roomy enough for a weekend and comfortable enough for long hikes, the men's REI Co-op Trailbreak 60 pack is built to last for years, and then you can hand it down—it adjusts to fit most bodies.",
    itemDimensions: "17 x 21 inches",
    itemMaterial: "Ripstop Nylon",
    itemFeatures:
      "Shell, straps, lining and bottom made using bluesign®-approved materials, which conserve resources and protect the health of the environment, workers and wearer",
    itemUses: "storage",
    itemReviews: "49",
  },
  {
    itemType: "Sleeping Bag",
    itemImage: "sleeping-bag-300x300.jpg",
    itemName: "REI Co-op Trailbreak 30 Sleeping Bag",
    itemBrand: "REI",
    itemPrice: "$99.95",
    itemColors: "Dark Army Cot",
    itemDescription:
      "The women's REI Co-op Trailbreak 30 sleeping bag is great for those breaking into backpacking and everything that comes with it. This bag gives the right balance of warmth, packability and weight.",
    itemDimensions: "62 x 72 inches",
    itemMaterial: "Polyester",
    itemFeatures:
      "Water-resistant synthetic fill keeps insulating in damp conditions",
    itemUses: "sleeping",
    itemReviews: "49",
  },
  {
    itemType: "Hammock",
    itemImage: "hammock-300x300.jpg",
    itemName: "ENO DoubleNest Print Hammock",
    itemBrand: "ENO",
    itemPrice: "$84.95",
    itemColors: "Boulder/melon | Fade/seaglass | Retro/emerald",
    itemDescription:
      "With room for 2 to stretch out, lie flat and relax, this ENO DoubleNest Print hammock is a colorful must-have for outdoor lounging. It's easy to bring along wherever your adventures take you.",
    itemDimensions: "114 x 76 inches",
    itemMaterial:
      "FreeWave 70-denier nylon taffeta (bluesign® approved)/anodized 7075 aluminum",
    itemFeatures:
      "Specially designed carabiners easily attach to all ENO hammock straps or other secure anchor points and help maintain correct orientation; suspension system not included",
    itemUses: "sleeping",
    itemReviews: "774",
  },
  {
    itemType: "Chair",
    itemImage: "chair-300x300.jpg",
    itemName: "ALPS Mountaineering King Kong Chair",
    itemBrand: "ALPS",
    itemPrice: "$119.99",
    itemColors: "Khaki",
    itemDescription:
      "Strong, durable and reliable, the ALPS Mountaineering King Kong chair holds up to 800 lbs. and is made with a sturdy powder-coated steel frame with 600-denier polyester fabric.",
    itemDimensions: "38 x 38 x 20 inches",
    itemMaterial: "600-denier polyester",
    itemFeatures:
      "Hanging side pockets hold your book or others items you want close at hand and up off the ground; mesh seat-back pocket also holds small gear",
    itemUses: "resting, storage",
    itemReviews: "45",
  },
  {
    itemType: "Headlamp",
    itemImage: "headlamp-300x300.jpg",
    itemName: "Black Diamond Spot 350 Headlamp",
    itemBrand: "Black Diamond",
    itemPrice: "$39.95",
    itemColors: "Dark Olive | Octane",
    itemDescription:
      "Housed in a small, low-profile design with a wide array of brightness modes, this Black Diamond Spot 350 headlamp ensures you'll see what's ahead or right in front even in the darkest of hours.",
    itemDimensions: "5 x 4 x 2 inches",
    itemMaterial: "aluminum, elastic",
    itemFeatures:
      "Settings in full strength with proximity and distance modes, dimming, strobe, red night-vision and digital lock mode",
    itemUses: "light, visibility",
    itemReviews: "9",
  },
  {
    itemType: "Compass",
    itemImage: "compass-300x300.jpg",
    itemName:
      "Mountain Summit Gear Deluxe Mirrored Sighting Compass with Declination",
    itemBrand: "Mountain Summit Gear",
    itemPrice: "$39.95",
    itemColors: "Clear",
    itemDescription:
      "Find your way with the Mountain Summit Gear Deluxe Mirrored Sighting Compass with Declination. Feature-filled, it provides the precision and accuracy you need when you're out there.",
    itemDimensions: "4.6 x 3.25 x 1.75 inches",
    itemMaterial: "plastic, magnets",
    itemFeatures:
      "Sighting mirror helps you aim more precisely when following a precise bearing on a distant landmark; doubles as an emergency signaling device",
    itemUses: "direction",
    itemReviews: "21",
  },
  {
    itemType: "Dog Pack",
    itemImage: "dog-pack-300x300.jpg",
    itemName: "OllyDog Rover Dog Pack",
    itemBrand: "OllyDog",
    itemPrice: "$90.00",
    itemColors: "Champagne | Odyssey Blue | Rave | Vino",
    itemDescription:
      "Let Rover carry his own gear this time. The OllyDog Rover Dog pack is built for comfort and confidence on day hikes and overnight adventures with your pup.",
    itemDimensions: "19.5 x 16.5 x 2.5 inches",
    itemMaterial: "Recycled nylon/aluminum hardware",
    itemFeatures:
      "Saddlebag design allows your dog to carry their own load such as food, water, collapsible dishes, poop bags and toys efficiently and comfortably",
    itemUses: "storage",
    itemReviews: "8",
  },
];

function loadItems() {
  // *Load data first
  $.each(ITEMS, function (idx, item) {
    $("#app").append(`
  <div class="wrapper">
     <div id="${idx}" class="item-wrapper">
        <div class="item-image">
          <img src="images/${item.itemImage}" alt="" />
        </div>
        <div class="item-info">
          <div class="item-brand">${item.itemBrand}</div>
          <h2>${item.itemName}</h2>
          <div class="item-price">${item.itemPrice}</div>
          <div class="item-reviews">Reviews: ${item.itemReviews}</div>
        </div>
     </div>
  </div>`);
  });
  initListeners();
}

function initListeners() {
  $(".item-wrapper").click(function (e) {
    let itemIndex = e.currentTarget.id;
    $("#app").html(`
    <div class="full">
        <div class="image">
          <img src="images/${ITEMS[itemIndex].itemImage}" alt="" />
        </div>
        <div class="details">
          <div class="brand">${ITEMS[itemIndex].itemBrand}</div>
          <h2>${ITEMS[itemIndex].itemName}</h2>
          <div class="reviews">Reviews: ${ITEMS[itemIndex].itemReviews}</div>
          <div class="price">${ITEMS[itemIndex].itemPrice}</div>
          <div class="colors">${ITEMS[itemIndex].itemColors}</div>
          <div class="description">
          ${ITEMS[itemIndex].itemDescription}
          </div>
          <div class="specs">
            <h2>Technical Specifications</h2>
            <div class="type">Product Type: ${ITEMS[itemIndex].itemType}</div>
            <div class="dimensions">Dimensions: ${ITEMS[itemIndex].itemDimensions}</div>
            <div class="material">Material(s): ${ITEMS[itemIndex].itemMaterial}</div>
            <div class="features">Features: ${ITEMS[itemIndex].itemFeatures}</div>
            <div class="uses">Uses: ${ITEMS[itemIndex].itemUses}</div>
            <div class="close">CLOSE</div>
          </div>
        </div>
      </div>`);
    closeListener();
  });
}

function closeListener() {
  $(".close").click(function () {
    $("#app").html("");
    loadItems();
  });
}

$(document).ready(function () {
  loadItems();
});
