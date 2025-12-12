
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  var name=document.getElementById("name").value;
  var phone=document.getElementById("phone").value;
  var address=document.getElementById("address").value;
  var qty=document.getElementById("qty").value;
  var payment=document.getElementById("payment").value;

  var msg = `অর্ডার:%0Aনাম: ${name}%0Aফোন: ${phone}%0Aঠিকানা: ${address}%0Aপরিমাণ: ${qty} বোতল%0Aপেমেন্ট: ${payment}%0Aআমি ডায়াবেটিকস অর্ডার করতে চাই।`;

  window.open("https://wa.me/8801618191919?text=" + msg, "_blank");
});
