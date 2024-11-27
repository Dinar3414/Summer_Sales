const productPrices = {
  "K. Accessories 1": 39.0,
  "K. Accessories 2": 25.0,
  "Home Cooker": 39.0,

  "Sports Back Cap": 49.0,
  "Full Jersey Set": 69.0,
  "Sports cates": 159.0,

  "Single Relax Chair": 185.0,
  "Children play": 299.0,
  "Flexible Sofa": 339.0,
};

let totalPrice = 0;
let discount = 0;
let count = 0;
let areashow = document.getElementById("area-show");
let Purchase = document.getElementById("purchase");

document.querySelectorAll(".card-title").forEach((card) => {
  card.addEventListener("click", (name) => {
    const productName = name.target.innerText;
    const price = productPrices[productName];
    const couponCode = document.getElementById("coupon").value;

    let areadiv = document.createElement("div");
    areadiv.innerHTML = `${++count}. ${productName}`;
    areadiv.setAttribute("class", "text-2xl font-semibold mb-3");
    areashow.append(areadiv);

    totalPrice += price;
    if (couponCode === "SELL200" && totalPrice >= 200) {
      discount = totalPrice * 0.2;
      document.getElementById("discount").innerText = `${discount.toFixed(
        2
      )} Tk`;
    }

    document.getElementById("total-price").innerText = `${totalPrice.toFixed(
      2
    )} Tk`;

    const totalWithDiscount = totalPrice - discount;
    document.getElementById("total").innerText = `${totalWithDiscount.toFixed(
      2
    )} Tk`;
  });
});

Purchase.addEventListener("click", () => {
  swal({
    title: "Congratulations",
    text: "Your Purchase the product",
    icon: "success",
    button: "Go Home",
  });
});
