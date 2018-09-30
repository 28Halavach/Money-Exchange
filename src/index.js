module.exports = function makeExchange(currency) {
	
		const arr = {H:0,Q:0,D:0,N:0,P:0};

		if (currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
		else if (currency <= 0) return {};

		if (Math.floor(currency / 50)) {
			arr.H = Math.floor(currency / 50);
			currency -= arr.H*50;
		}

		if (Math.floor(currency / 25)) {
			arr.Q = Math.floor(currency / 25);
			currency -= arr.Q*25;
		}

		if (Math.floor(currency / 10)) {
			arr.D = Math.floor(currency / 10);
			currency -= arr.D*10;
		}

		if (Math.floor(currency / 5)) {
			arr.N = Math.floor(currency / 5);
			currency -= arr.N*5;
		}

		if (currency !== 0) arr.P = currency;

		if (!arr.Q) delete arr.Q;
		if (!arr.D) delete arr.D;
		if (!arr.P) delete arr.P;
		if (!arr.N) delete arr.N;
		if (!arr.H) delete arr.H;

		return arr;
}