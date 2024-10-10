function decode(encodedString) {
    const base64Decoded = Buffer.from(encodedString, 'base64').toString('utf-8');
    return decodeURIComponent(base64Decoded);
};

const encodedString = "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";
const decodedString = decode(encodedString);
console.log(decodedString);
