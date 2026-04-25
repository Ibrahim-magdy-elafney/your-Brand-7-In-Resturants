const form = document.getElementById("form");
const meal = document.getElementById("meal");
const quantity = document.getElementById("quantity");
const result = document.getElementById("result");
const total = document.getElementById("total");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

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

    // تأخير بسيط عشان المستخدم يشوف النتيجة
    setTimeout(() => {
        window.location.href = "index-form.html";
    }, 1000);
});