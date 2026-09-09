// =========================
// BIRTHDAY SURPRISE
// =========================

const surpriseButton = document.getElementById("surpriseButton");
const gift = document.querySelector(".gift");
const birthdayMessage = document.getElementById("birthdayMessage");

// =========================
// BIRTHDAY MUSIC
// =========================

const birthdayMusic = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");


// =========================
// SURPRISE BUTTON
// =========================

surpriseButton.addEventListener("click", function () {

    // Hide gift
    gift.style.display = "none";

    // Show birthday message
    birthdayMessage.style.display = "block";

    // Change button text
    surpriseButton.innerHTML = "💕 Surprise Opened! 🎉";

    // Start music
    birthdayMusic.play()
        .then(function () {

            musicButton.innerHTML = "🔊 Music On";

        })
        .catch(function (error) {

            console.log("Music could not start:", error);

        });


    // Create confetti
    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const fallSpeed = 2 + Math.random() * 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform: "translateY(100vh) rotate(720deg)"
                }
            ],
            {
                duration: fallSpeed * 1000,
                easing: "linear"
            }
        );

        setTimeout(function () {

            confetti.remove();

        }, fallSpeed * 1000);

    }

});


// =========================
// MUSIC ON / OFF BUTTON
// =========================

musicButton.addEventListener("click", function () {

    if (birthdayMusic.paused) {

        birthdayMusic.play()
            .then(function () {

                musicButton.innerHTML = "🔊 Music On";

            })
            .catch(function (error) {

                console.log("Music error:", error);

                alert("The music could not be played. Please check birthday.mp3.");
            });

    } else {

        birthdayMusic.pause();

        musicButton.innerHTML = "🔇 Music Off";

    }

});


// =========================
// BIRTHDAY CAKE
// =========================

const blowButton = document.getElementById("blowButton");
const wishMessage = document.getElementById("wishMessage");
const flames = document.querySelectorAll(".flame");

blowButton.addEventListener("click", function () {

    // Turn off flames
    flames.forEach(function (flame) {

        flame.style.display = "none";

    });

    // Show wish
    wishMessage.style.display = "block";

    // Change button
    blowButton.innerHTML = "✨ Wish Made! ✨";


    // Create confetti
    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "💕";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize =
            15 + Math.random() * 20 + "px";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = 2 + Math.random() * 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform: "translateY(100vh) rotate(720deg)"
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(function () {

            confetti.remove();

        }, duration * 1000);

    }

});


// =========================
// SECRET LETTER
// =========================

const letterButton =
    document.getElementById("letterButton");

const envelope =
    document.querySelector(".envelope");

letterButton.addEventListener("click", function () {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        letterButton.innerHTML =
            "💖 Letter Opened!";

    } else {

        letterButton.innerHTML =
            "💌 Open My Letter";

    }

});


// =========================
// GRAND FINALE FIREWORKS
// =========================

const fireworksButton =
    document.getElementById("fireworksButton");

const fireworksArea =
    document.getElementById("fireworksArea");

fireworksButton.addEventListener("click", function () {

    fireworksButton.innerHTML =
        "🍰 Celebration Started! 🎂";

    for (let i = 0; i < 25; i++) {

        setTimeout(function () {

            createFirework();

        }, i * 250);

    }

});


function createFirework() {

    const firework =
        document.createElement("div");

    firework.classList.add("firework");

    firework.style.left =
        Math.random() * 90 + 5 + "%";

    firework.style.top =
        Math.random() * 60 + 10 + "%";

    fireworksArea.appendChild(firework);

    setTimeout(function () {

        firework.remove();

    }, 1500);

}
// =========================
// BACK TO TOP
// =========================

const topButton =
    document.getElementById("topButton");

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});