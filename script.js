 /* ============================================
   CUTIE ❤️ MANISH
   INTERACTIVE ROMANTIC EXPERIENCE
============================================ */


/* ============================================
   VARIABLES
============================================ */

let currentScreen = "welcomeScreen";

let messageIndex = 0;

let reasonIndex = 0;

let musicPlaying = false;


/* ============================================
   MESSAGES
============================================ */

const messages = [

    {
        emoji: "🌸",
        title: "You deserve to feel special.",
        text:
            "And I hope you never forget that."
    },

    {
        emoji: "🫶",
        title: "You're genuinely caring.",
        text:
            "The way you care about people is one of the things I really admire about you."
    },

    {
        emoji: "😊",
        title: "Your smile is dangerous.",
        text:
            "Because somehow it makes everything around you feel a little better."
    },

    {
        emoji: "😂",
        title: "Your cute anger...",
        text:
            "Okay fine. Sometimes it's scary. But mostly it's cute. 😭❤️"
    },

    {
        emoji: "💗",
        title: "And you're just... you.",
        text:
            "That's probably my favorite thing about you."
    }

];


/* ============================================
   REASONS
============================================ */

const reasons = [

    {
        emoji: "😊",
        title: "Your Smile",
        text:
            "I don't know how you do it, but your smile somehow makes everything feel a little better."
    },

    {
        emoji: "🫶",
        title: "Your Caring Heart",
        text:
            "You genuinely care about people. And honestly, that's a beautiful quality to have."
    },

    {
        emoji: "💪",
        title: "Your Support",
        text:
            "You have this way of making people feel like they're not alone. That means more than you probably realize."
    },

    {
        emoji: "😂",
        title: "Your Cute Anger",
        text:
            "I could probably write an entire paragraph about this one. But let's just say... it's cute. 😭"
    },

    {
        emoji: "🌷",
        title: "Your Kindness",
        text:
            "You're beautiful, yes. But the kindness in your heart is what makes you even more beautiful."
    },

    {
        emoji: "💗",
        title: "The Way You Talk",
        text:
            "There is just something about talking to you that makes ordinary conversations feel special."
    },

    {
        emoji: "✨",
        title: "Simply You",
        text:
            "After all the reasons, I think this is the simplest one: I just really like having you in my life."
    }

];


/* ============================================
   SCREEN NAVIGATION
============================================ */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });

    const target =
        document.getElementById(screenId);

    if (target) {

        target.classList.add("active");

        currentScreen = screenId;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* ============================================
   ENTER WEBSITE
============================================ */

function enterWebsite() {

    createFloatingHearts(18);

    showScreen("messageScreen");

}


/* ============================================
   NEXT MESSAGE
============================================ */

function nextMessage() {

    messageIndex++;

    if (messageIndex >= messages.length) {

        messageIndex = 0;

        showScreen("reasonsScreen");

        return;
    }

    const message =
        messages[messageIndex];

    document.getElementById(
        "messageEmoji"
    ).innerText =
        message.emoji;

    document.getElementById(
        "messageTitle"
    ).innerText =
        message.title;

    document.getElementById(
        "messageText"
    ).innerText =
        message.text;

    updateMessageDots();

    createFloatingHearts(5);

}


/* ============================================
   MESSAGE DOTS
============================================ */

function updateMessageDots() {

    const dots =
        document.querySelectorAll(".dot");

    dots.forEach(function(dot, index) {

        dot.classList.remove(
            "active-dot"
        );

        if (index === messageIndex) {

            dot.classList.add(
                "active-dot"
            );

        }

    });

}


/* ============================================
   REASONS
============================================ */

function displayReason() {

    const reason =
        reasons[reasonIndex];

    document.getElementById(
        "reasonEmoji"
    ).innerText =
        reason.emoji;

    document.getElementById(
        "reasonNumber"
    ).innerText =
        String(reasonIndex + 1)
            .padStart(2, "0");

    document.getElementById(
        "reasonTitle"
    ).innerText =
        reason.title;

    document.getElementById(
        "reasonText"
    ).innerText =
        reason.text;

}


/* ============================================
   NEXT REASON
============================================ */

function nextReason() {

    reasonIndex++;

    if (reasonIndex >= reasons.length) {

        reasonIndex = 0;

    }

    displayReason();

    createFloatingHearts(4);

}


/* ============================================
   PREVIOUS REASON
============================================ */

function previousReason() {

    reasonIndex--;

    if (reasonIndex < 0) {

        reasonIndex =
            reasons.length - 1;

    }

    displayReason();

}


/* ============================================
   FLOWERS
============================================ */

function showFlowers() {

    createFlowerRain(45);

    openPopup(

        "🌹",

        "Flowers For CUTIE",

        "One flower wasn't enough...<br><br>" +

        "So here's an entire garden for you. 🌷❤️"

    );

}


/* ============================================
   CROWN
============================================ */

function showCrown() {

    createFloatingHearts(25);

    openPopup(

        "👑",

        "Your Crown",

        "Obviously you needed one. 😂❤️<br><br>" +

        "Every princess deserves her crown."

    );

}


/* ============================================
   LETTER
============================================ */

function openLetter() {

    const modal =
        document.getElementById(
            "letterModal"
        );

    if (modal) {

        modal.classList.add("show");

    }

}


/* ============================================
   CLOSE LETTER
============================================ */

function closeLetter() {

    const modal =
        document.getElementById(
            "letterModal"
        );

    if (modal) {

        modal.classList.remove("show");

    }

}


/* ============================================
   POETRY
============================================ */

function showPoetry() {

    showScreen(
        "poetryScreen"
    );

    createFloatingHearts(10);

}


/* ============================================
   FINAL SURPRISE
============================================ */

function finalSurprise() {

    createFloatingHearts(50);

    createFlowerRain(35);

    showScreen(
        "finalScreen"
    );

}


/* ============================================
   MUSIC
============================================ */

function toggleMusic() {

    const button =
        document.getElementById(
            "musicButton"
        );

    /*
       Music file is not currently included.
       So instead of producing an error,
       the button simply changes appearance.
    */

    musicPlaying =
        !musicPlaying;

    if (button) {

        button.innerText =
            musicPlaying
                ? "🔊"
                : "🎵";

    }

}


/* ============================================
   POPUP
============================================ */

function openPopup(
    icon,
    title,
    text
) {

    const emoji =
        document.getElementById(
            "popupEmoji"
        );

    const popupTitle =
        document.getElementById(
            "popupTitle"
        );

    const popupMessage =
        document.getElementById(
            "popupMessage"
        );

    const popup =
        document.getElementById(
            "popup"
        );

    if (emoji) {

        emoji.innerText =
            icon;

    }

    if (popupTitle) {

        popupTitle.innerText =
            title;

    }

    if (popupMessage) {

        popupMessage.innerHTML =
            text;

    }

    if (popup) {

        popup.classList.add("show");

    }

}


/* ============================================
   CLOSE POPUP
============================================ */

function closePopup() {

    const popup =
        document.getElementById(
            "popup"
        );

    if (popup) {

        popup.classList.remove("show");

    }

}


/* ============================================
   SECRET VAULT
============================================ */

function openSecretVault() {

    showScreen(
        "secretScreen"
    );

    const input =
        document.getElementById(
            "secretPassword"
        );

    const message =
        document.getElementById(
            "secretMessage"
        );

    const error =
        document.getElementById(
            "secretError"
        );

    const lock =
        document.getElementById(
            "vaultLock"
        );

    if (input) {

        input.value = "";

    }

    if (message) {

        message.classList.remove(
            "show"
        );

    }

    if (error) {

        error.innerText = "";

    }

    if (lock) {

        lock.innerText = "🔒";

    }

}


/* ============================================
   UNLOCK SECRET
============================================ */

function unlockSecret() {

    const input =
        document.getElementById(
            "secretPassword"
        );

    const error =
        document.getElementById(
            "secretError"
        );

    const message =
        document.getElementById(
            "secretMessage"
        );

    const lock =
        document.getElementById(
            "vaultLock"
        );


    if (!input) return;


    const password =
        input.value.trim();


    /*
       PASSWORD

       Loving man's name:
       MANISH
    */

    if (password === "MANISH") {

        if (error) {

            error.innerText = "";

        }

        if (lock) {

            lock.innerText =
                "🔓";

        }

        if (message) {

            message.classList.add(
                "show"
            );

        }

        createFloatingHearts(25);

        createFlowerRain(15);

    }

    else {

        if (message) {

            message.classList.remove(
                "show"
            );

        }

        if (lock) {

            lock.innerText =
                "🔒";

        }

        if (error) {

            error.innerText =
                "❌ Wrong name... Try again in CAPITAL LETTERS ❤️";

        }

        createFloatingHearts(3);

    }

}


/* ============================================
   ENTER KEY FOR SECRET PASSWORD
============================================ */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            currentScreen === "secretScreen"
        ) {

            unlockSecret();

        }

    }
);


/* ============================================
   FLOATING HEARTS
============================================ */

function createFloatingHearts(amount) {

    const container =
        document.getElementById(
            "floatingHearts"
        );

    if (!container) return;


    const hearts = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "🌸",
        "✨",
        "🦋"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );

        heart.className =
            "floating-heart";

        heart.innerText =
            hearts[
                Math.floor(
                    Math.random()
                    * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (4 + Math.random() * 5)
            + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (14 + Math.random() * 18)
            + "px";

        container.appendChild(
            heart
        );


        setTimeout(
            function() {

                heart.remove();

            },
            10000
        );

    }

}


/* ============================================
   FLOWER RAIN
============================================ */

function createFlowerRain(amount) {

    const container =
        document.getElementById(
            "flowerRain"
        );

    if (!container) return;


    const flowers = [

        "🌸",
        "🌷",
        "🌹",
        "💮",
        "🌺",
        "🦋"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const flower =
            document.createElement(
                "span"
            );

        flower.className =
            "flower-particle";

        flower.innerText =
            flowers[
                Math.floor(
                    Math.random()
                    * flowers.length
                )
            ];

        flower.style.left =
            Math.random() * 100 + "%";

        flower.style.animationDuration =
            (4 + Math.random() * 5)
            + "s";

        flower.style.animationDelay =
            Math.random() * 2 + "s";

        flower.style.fontSize =
            (15 + Math.random() * 20)
            + "px";

        container.appendChild(
            flower
        );


        setTimeout(
            function() {

                flower.remove();

            },
            10000
        );

    }

}


/* ============================================
   INITIALIZE
============================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayReason();

        updateMessageDots();


        /*
           Gentle background hearts
        */

        setInterval(
            function() {

                createFloatingHearts(1);

            },
            5000
        );


        /*
           Allow closing popup
           by clicking outside it
        */

        const popup =
            document.getElementById(
                "popup"
            );

        if (popup) {

            popup.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target === popup
                    ) {

                        closePopup();

                    }

                }
            );

        }


        /*
           Allow closing letter
           by clicking outside it
        */

        const letterModal =
            document.getElementById(
                "letterModal"
            );

        if (letterModal) {

            letterModal.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target === letterModal
                    ) {

                        closeLetter();

                    }

                }
            );

        }

    });