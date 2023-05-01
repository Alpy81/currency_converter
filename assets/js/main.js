function calc() {
    let euro = euroField.value;
    let result = euro * 1.10;
    usd.value = result.toFixed(2);
}
