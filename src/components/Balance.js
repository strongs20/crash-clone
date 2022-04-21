localStorage.setItem("Balance", 10.00000001);

function updateBalance(value) {
    localStorage.setItem("Balance", value);
}

export default updateBalance;