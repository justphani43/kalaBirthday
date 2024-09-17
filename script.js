function updateCountdown() {
    const birthdayDate = new Date('2024-10-02T00:00:00'); // Change to her birthday
    const now = new Date();
    const timeDiff = birthdayDate - now;
    
    if (timeDiff <= 0) {
        document.getElementById('countdown').innerHTML = "wish you happy birthday kala....May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.";
        clearInterval(countdownInterval);
        return;
    }
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `
        ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
    `;
}

const countdownInterval = setInterval(updateCountdown, 1000);
