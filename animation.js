document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // 애니메이션이 한 번만 실행되도록 관찰 중지
            }
        });
    }, {
        threshold: 0.2 // 요소의 20%가 화면에 들어올 때 애니메이션 시작
    });

    const elements = document.querySelectorAll(".text-content, .image-content");
    elements.forEach(element => observer.observe(element));
});
