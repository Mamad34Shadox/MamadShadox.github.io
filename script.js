
const giftBox = document.getElementById("giftBox");
const mediaContainer = document.getElementById("mediaContainer");
const giftImage = document.getElementById("giftImage");
const videoPlayer = document.getElementById("videoPlayer");
const soundEffect = document.getElementById("soundEffect");

let currentStep = 0;

// با کلیک روی هدیه
giftBox.addEventListener("click", async function () {

    if (currentStep !== 0) return;

    currentStep = 1;

    // مخفی کردن باکس هدیه
    giftBox.style.display = "none";

    // نمایش تصویر
    mediaContainer.style.display = "flex";
    giftImage.style.display = "block";

    // پخش صدای افکت
    soundEffect.currentTime = 0;

    try {
        await soundEffect.play();
    } catch (error) {
        console.log("خطا در پخش صدا:", error);
    }

    // پس از 2 ثانیه تصویر مخفی و ویدیوی اول اجرا شود
    setTimeout(() => {
        giftImage.style.display = "none";
        playFirstVideo();
    }, 2000);

});


// مرحله اول: فقط 5 ثانیه از ویدیوی اول
function playFirstVideo() {

    videoPlayer.src =
        "7b60868efdf771448f4996e0cb467feb67294242-720p.mp4";

    videoPlayer.style.display = "block";

    videoPlayer.currentTime = 0;

    videoPlayer.play();

    function checkFirstVideo() {

        if (videoPlayer.currentTime >= 5) {

            videoPlayer.removeEventListener(
                "timeupdate",
                checkFirstVideo
            );

            videoPlayer.pause();

            playIrajVideo();
        }
    }

    videoPlayer.addEventListener(
        "timeupdate",
        checkFirstVideo
    );
}


// مرحله دوم: پخش ویدیوی ایرج
function playIrajVideo() {

    videoPlayer.src = "ایرج.mp4";

    videoPlayer.currentTime = 0;

    videoPlayer.loop = false;

    videoPlayer.play();

    videoPlayer.onended = function () {

        videoPlayer.onended = null;

        playFinalVideo();

    };
}


// مرحله سوم: پخش بی‌نهایت ویدیوی آخر
function playFinalVideo() {

    videoPlayer.src =
        "a4905dfda8e4becd832ae15d4560e6dc73152782-1080p.mp4";

    videoPlayer.currentTime = 0;

    videoPlayer.loop = true;

    videoPlayer.play();

}
