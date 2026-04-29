const form = document.getElementById("form");
const meal = document.getElementById("meal");
const quantity = document.getElementById("quantity");
const result = document.getElementById("result");
const total = document.getElementById("total");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageField = document.getElementById("message").value;

    if (!name || !email || quantity.value <= 0) {
        result.style.color = "red";
        result.innerText = "Please fill all fields!";
        return;
    }

    const price = Number(meal.value);
    const qty = Number(quantity.value);
    const finalPrice = price * qty;

    total.innerText = `Total Price: $${finalPrice}`;
    result.style.color = "green";
    result.innerText = "Order placed successfully!";

    const mealText = meal.options[meal.selectedIndex].text;

    const message = `New Order:
Name: ${name}
Email: ${email}
Order: ${mealText}
Quantity: ${qty}
Total: $${finalPrice}
Notes: ${messageField}`;

    const phone = "2010xxxxxxxx";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.open(url, "_blank");
    }, 1000);

});