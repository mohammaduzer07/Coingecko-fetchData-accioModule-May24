document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
    const tableBody = document.getElementById('cryptoTableBody');
    const searchInput = document.getElementById('searchInput');
    const sortMarketCapBtn = document.getElementById('sortMarketCap');
    const sortPercentageBtn = document.getElementById('sortPercentage');
    
    let cryptoData = [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400","current_price":68722,"market_cap":1354335772014,"market_cap_rank":1,"fully_diluted_valuation":1443151947186,"total_volume":22821650698,"high_24h":70188,"low_24h":68544,"price_change_24h":-334.538231444807,"price_change_percentage_24h":-0.48444,"market_cap_change_24h":-6825102266.334473,"market_cap_change_percentage_24h":-0.50142,"circulating_supply":19707593.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":73738,"ath_change_percentage":-6.81256,"ath_date":"2024-03-14T07:10:36.635Z","atl":67.81,"atl_change_percentage":101235.35675,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2024-06-04T10:10:37.356Z"},{"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628","current_price":3748.81,"market_cap":450522063552,"market_cap_rank":2,"fully_diluted_valuation":450522063552,"total_volume":11524058773,"high_24h":3850.78,"low_24h":3743.68,"price_change_24h":-65.49346890195557,"price_change_percentage_24h":-1.71705,"market_cap_change_24h":-7902260707.420105,"market_cap_change_percentage_24h":-1.72379,"circulating_supply":120146771.977786,"total_supply":120146771.977786,"max_supply":null,"ath":4878.26,"ath_change_percentage":-23.09733,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":866342.43104,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":71.92137866891944,"currency":"btc","percentage":7192.137866891944},"last_updated":"2024-06-04T10:10:47.388Z"},{"id":"tether","symbol":"usdt","name":"Tether","image":"https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661","current_price":0.999488,"market_cap":112344127600,"market_cap_rank":3,"fully_diluted_valuation":112344127600,"total_volume":41924614624,"high_24h":1.001,"low_24h":0.996065,"price_change_24h":-4.4056644875723e-05,"price_change_percentage_24h":-0.00441,"market_cap_change_24h":150130962,"market_cap_change_percentage_24h":0.13381,"circulating_supply":112286364258.112,"total_supply":112286364258.112,"max_supply":null,"ath":1.32,"ath_change_percentage":-24.40646,"ath_date":"2018-07-24T00:00:00.000Z","atl":0.572521,"atl_change_percentage":74.69657,"atl_date":"2015-03-02T00:00:00.000Z","roi":null,"last_updated":"2024-06-04T10:11:06.609Z"},{"id":"binancecoin","symbol":"bnb","name":"BNB","image":"https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970","current_price":625.97,"market_cap":96309772116,"market_cap_rank":4,"fully_diluted_valuation":96309772116,"total_volume":1219914305,"high_24h":637.93,"low_24h":619.84,"price_change_24h":-3.215965786812717,"price_change_percentage_24h":-0.51113,"market_cap_change_24h":-477402799.4442444,"market_cap_change_percentage_24h":-0.49325,"circulating_supply":153856150.0,"total_supply":153856150.0,"max_supply":200000000.0,"ath":686.31,"ath_change_percentage":-8.7396,"ath_date":"2021-05-10T07:24:17.097Z","atl":0.0398177,"atl_change_percentage":1572884.44752,"atl_date":"2017-10-19T00:00:00.000Z","roi":null,"last_updated":"2024-06-04T10:10:52.182Z"},{"id":"solana","symbol":"sol","name":"Solana","image":"https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1696504756","current_price":164.75,"market_cap":75766865156,"market_cap_rank":5,"fully_diluted_valuation":95145121417,"total_volume":1845125569,"high_24h":167.13,"low_24h":162.99,"price_change_24h":-0.7044828545161295,"price_change_percentage_24h":-0.4258,"market_cap_change_24h":-180979875.82077026,"market_cap_change_percentage_24h":-0.23829,"circulating_supply":459807601.541835,"total_supply":577408739.129291,"max_supply":null,"ath":259.96,"ath_change_percentage":-36.59875,"ath_date":"2021-11-06T21:54:35.825Z","atl":0.500801,"atl_change_percentage":32810.74449,"atl_date":"2020-05-11T19:35:23.449Z","roi":null,"last_updated":"2024-06-04T10:10:53.613Z"},{"id":"staked-ether","symbol":"steth","name":"Lido Staked Ether","image":"https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206","current_price":3748.46,"market_cap":35641288682,"market_cap_rank":6,"fully_diluted_valuation":35641786466,"total_volume":51702646,"high_24h":3841.17,"low_24h":3739.27,"price_change_24h":-66.26471115209597,"price_change_percentage_24h":-1.73708,"market_cap_change_24h":-567537052.1499863,"market_cap_change_percentage_24h":-1.5674,"circulating_supply":9509502.96308775,"total_supply":9509635.77736946,"max_supply":null,"ath":4829.57,"ath_change_percentage":-22.36516,"ath_date":"2021-11-10T14:40:47.256Z","atl":482.9,"atl_change_percentage":676.44625,"atl_date":"2020-12-22T04:08:21.854Z","roi":null,"last_updated":"2024-06-04T10:09:53.029Z"},{"id":"usd-coin","symbol":"usdc","name":"USDC","image":"https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694","current_price":1.0,"market_cap":32313044668,"market_cap_rank":7,"fully_diluted_valuation":32318821213,"total_volume":5126083214,"high_24h":1.002,"low_24h":0.995583,"price_change_24h":0.00053465,"price_change_percentage_24h":0.05347,"market_cap_change_24h":-16115541.91173172,"market_cap_change_percentage_24h":-0.04985,"circulating_supply":32276621070.347,"total_supply":32282391104.7199,"max_supply":null,"ath":1.17,"ath_change_percentage":-14.67238,"ath_date":"2019-05-08T00:40:28.300Z","atl":0.877647,"atl_change_percentage":14.01425,"atl_date":"2023-03-11T08:02:13.981Z","roi":null,"last_updated":"2024-06-04T10:10:49.419Z"},{"id":"ripple","symbol":"xrp","name":"XRP","image":"https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442","current_price":0.519314,"market_cap":28861292384,"market_cap_rank":8,"fully_diluted_valuation":52042414712,"total_volume":784093238,"high_24h":0.523372,"low_24h":0.51643,"price_change_24h":-8.5348257417572e-05,"price_change_percentage_24h":-0.01643,"market_cap_change_24h":50687882,"market_cap_change_percentage_24h":0.17593,"circulating_supply":55450358947.0,"total_supply":99987572899.0,"max_supply":100000000000.0,"ath":3.4,"ath_change_percentage":-84.68111,"ath_date":"2018-01-07T00:00:00.000Z","atl":0.00268621,"atl_change_percentage":19280.66811,"atl_date":"2014-05-22T00:00:00.000Z","roi":null,"last_updated":"2024-06-04T10:10:28.431Z"},{"id":"dogecoin","symbol":"doge","name":"Dogecoin","image":"https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409","current_price":0.157479,"market_cap":22755586969,"market_cap_rank":9,"fully_diluted_valuation":22756136318,"total_volume":713750354,"high_24h":0.163398,"low_24h":0.157174,"price_change_24h":-0.004409908045623745,"price_change_percentage_24h":-2.72404,"market_cap_change_24h":-612945745.7217941,"market_cap_change_percentage_24h":-2.62295,"circulating_supply":144565656383.705,"total_supply":144569146383.705,"max_supply":null,"ath":0.731578,"ath_change_percentage":-78.48057,"ath_date":"2021-05-08T05:08:23.458Z","atl":8.69e-05,"atl_change_percentage":181056.09473,"atl_date":"2015-05-06T00:00:00.000Z","roi":null,"last_updated":"2024-06-04T10:10:28.074Z"},{"id":"the-open-network","symbol":"ton","name":"Toncoin","image":"https://coin-images.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498","current_price":6.88,"market_cap":16591617147,"market_cap_rank":10,"fully_diluted_valuation":35108287001,"total_volume":220082030,"high_24h":6.92,"low_24h":6.58,"price_change_24h":0.268753,"price_change_percentage_24h":4.06209,"market_cap_change_24h":624794821,"market_cap_change_percentage_24h":3.91308,"circulating_supply":2413598982.27679,"total_supply":5107237288.77312,"max_supply":null,"ath":7.63,"ath_change_percentage":-9.95519,"ath_date":"2024-04-11T05:55:53.682Z","atl":0.519364,"atl_change_percentage":1223.58447,"atl_date":"2021-09-21T00:33:11.092Z","roi":null,"last_updated":"2024-06-04T10:10:26.285Z"}];

    // Fetch data using async/await
    async function fetchDataAsync() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            cryptoData = data;
            renderTable(cryptoData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Initial data fetch
    fetchDataAsync();

    // Render table function
    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(coin => {
            const percentageChange = coin.price_change_percentage_24h.toFixed(2);
            const percentageChangeClass = percentageChange < 0 ? 'red-text' : 'green-text';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${coin.image}" alt="${coin.name}" width="32" height="32"></td>
                <td>${coin.name}</td>
                <td>${coin.symbol.toUpperCase()}</td>
                <td>$${coin.current_price.toLocaleString()}</td>
                <td>$${coin.total_volume.toLocaleString()}</td>
                <td class="percentage-change ${percentageChangeClass}">${percentageChange}%</td>
                <td>$${coin.market_cap.toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        });

        // Apply red color to percentage change cells
        // document.querySelectorAll('.percentage-change').forEach(cell => {
        //     cell.classList.add('red-text');
        // });
    }

    // Search function
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredData = cryptoData.filter(coin =>
            coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query)
        );
        renderTable(filteredData);
    });

    // Sort by market cap function
    sortMarketCapBtn.addEventListener('click', () => {
        const sortedData = [...cryptoData].sort((a, b) => a.market_cap - b.market_cap);
        renderTable(sortedData);
    });

    // Sort by percentage change function
    sortPercentageBtn.addEventListener('click', () => {
        const sortedData = [...cryptoData].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
        renderTable(sortedData);
    });
});
