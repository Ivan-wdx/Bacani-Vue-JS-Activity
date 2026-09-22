let balance = Number(prompt("Enter your initial balance:"));

if (isNaN(balance) || balance < 0) {
    alert("Invalid balance. Please enter a valid amount.");
} else {
    let choice;

    do {
        choice = prompt(
            "ATM MENU\n\n" +
            "1. Deposit\n" +
            "2. Withdraw\n" +
            "3. Check Balance\n" +
            "4. Exit\n\n" +
            "Enter your choice:"
        );

        if (choice === "1") {
            let deposit = Number(prompt("Enter amount to deposit:"));

            if (isNaN(deposit) || deposit <= 0) {
                alert("Invalid deposit amount.");
            } else {
                balance += deposit;
                alert("You deposited " + deposit + ". New balance: " + balance);
            }

        } else if (choice === "2") {
            let withdraw = Number(prompt("Enter amount to withdraw:"));

            if (isNaN(withdraw) || withdraw <= 0) {
                alert("Invalid withdrawal amount.");
            } else if (withdraw > balance) {
                alert("Insufficient funds. Your current balance is: " + balance);
            } else {
                balance -= withdraw;
                alert("You withdrew " + withdraw + ". New balance: " + balance);
            }

        } else if (choice === "3") {
            alert("Your current balance is: " + balance);

        } else if (choice === "4") {
            alert("Thank you for using the ATM. Goodbye!");

        } else {
            alert("Invalid choice. Please choose 1, 2, 3, or 4.");
        }

    } while (choice !== "4");
}

