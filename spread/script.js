function calculateSpread() {
	var price1 = parseFloat(document.getElementById("price1").value.replace(",", "."));
	var price2 = parseFloat(document.getElementById("price2").value.replace(",", "."));
	var commissionBuy = parseFloat(document.getElementById("commissionBuy").value.replace(",", "."));
	var commissionSell = parseFloat(document.getElementById("commissionSell").value.replace(",", "."));
	var totalAmount = parseFloat(document.getElementById("totalAmount").value.replace(",", "."));

	if (isNaN(price1) || isNaN(price2) || isNaN(commissionBuy) || isNaN(commissionSell) || isNaN(totalAmount)) {
		document.getElementById("result").innerHTML = "Пожалуйста, введите числовые значения.";
		return;
	}

	var spread = ((price2 - price1) / price1) * 100 - commissionBuy - commissionSell;
	var spreadPercentage = (spread * totalAmount) / 100;

	document.getElementById("result").innerHTML = "Спред: " + spread.toFixed(2) + " %<br>Чистая прибыль: " + spreadPercentage.toFixed(2) + " ₽";
}