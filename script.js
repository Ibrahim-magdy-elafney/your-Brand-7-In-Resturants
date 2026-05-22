const form = document.getElementById("form");
const meal = document.getElementById("meal");
const quantity = document.getElementById("quantity");
const result = document.getElementById("result");
const total = document.getElementById("total");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // البيانات الأساسية
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const messageField = document.getElementById("message").value.trim();

    // المواعيد
    const date1 = document.querySelectorAll(".date")[0].value;
    const time1 = document.querySelectorAll(".time")[0].value;

    const date2 = document.querySelectorAll(".date")[1].value;
    const time2 = document.querySelectorAll(".time")[1].value;

    // التحقق من البيانات
    if (!name || !phoneNumber || quantity.value <= 0 || !date1 || !time1) {

        result.style.color = "red";
        result.innerText = "Please fill the required fields!";

        return;
    }

    // بيانات الطلب
    const price = Number(meal.value);
    const qty = Number(quantity.value);
    const finalPrice = price * qty;

    const mealText = meal.options[meal.selectedIndex].text;

    // عرض السعر
    total.innerText = `Total Price: $${finalPrice}`;

    // رسالة نجاح
    result.style.color = "lime";
    result.innerText = "Order placed successfully ☕";

    // رسالة الواتساب
    const message = `☕ New Cafe Order

👤 Username: ${name}

📞 Phone Number:
${phoneNumber}

📧 Email:
${email || "Not Provided"}

🍰 Order:
${mealText}

🔢 Quantity:
${qty}

💵 Total Price:
$${finalPrice}

📅 Registration Day:
${date1}

⏰ Registration Time:
${time1}

📅 Expected Visit Day:
${date2 || "Not Specified"}

⏰ Expected Visit Time:
${time2 || "Not Specified"}

📝 Notes:
${messageField || "No Notes"}`;

    // رقم الواتساب
    const phone = "2010XXXXXXXX";

    // رابط الواتساب
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // فتح واتساب
    setTimeout(() => {

        window.open(url, "_blank");

    }, 1000);

});