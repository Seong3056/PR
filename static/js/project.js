document.addEventListener('DOMContentLoaded', function() {
    var changeColorLink = document.getElementById('changeColorLink');
    var expandDiv = document.getElementById('expandDiv');

    if (changeColorLink && expandDiv) {
        expandDiv.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 클릭 동작을 중지함
            expandDiv.classList.add('expanding'); // expanding 클래스를 추가하여 크기가 커지는 애니메이션을 시작함

            setTimeout(function() {
                window.location.href = changeColorLink.getAttribute('href'); // 0.5초 후에 페이지를 이동함
            }, 300);
        });
    }
});
