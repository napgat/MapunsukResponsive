document.addEventListener("DOMContentLoaded", function () {
            const profileBtn = document.querySelector(".profile-btn");
            const dropdownContent = document.querySelector(".dropdown-content");

            profileBtn.addEventListener("click", function (event) {
                event.stopPropagation(); // กันการคลิกไปถึง document
                dropdownContent.classList.toggle("show");
            });

            document.addEventListener("click", function () {
                dropdownContent.classList.remove("show");
            });
        });


        document.addEventListener("DOMContentLoaded", function () {
            const bellBtn = document.querySelector(".bell");
            const noticeDropdown = document.querySelector(".dropdown-content1");

            bellBtn.addEventListener("click", function (event) {
                event.stopPropagation(); // กันไม่ให้ปิด dropdown ตอนกด
                noticeDropdown.classList.toggle("show");
            });

            document.addEventListener("click", function () {
                noticeDropdown.classList.remove("show");
            });
        });