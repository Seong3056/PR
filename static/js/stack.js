const list = document.querySelector(".stack-list")
// list.addEventListener("click",(e)=>{
    
//     const target = e.target;
//     const parent = target.parentNode;

//     if (target.classList.contains("button") || parent.classList.contains("button")) {
//         const button = target.classList.contains("button") ? target : parent;
//         const intro = button.parentNode.querySelector(".introduce")
//         const selected = button.classList[1]        
//         const divs = intro.querySelectorAll("div")
//         intro.classList.toggle("hidden")
//         console.log(intro);
//         Array.from(divs).map(d=>{
//             if(d.classList.contains(selected))
//                 d.classList.toggle("hidden")
            
//         })
//     }
    
// });
// document.addEventListener('DOMContentLoaded', function() {
//     document.documentElement.addEventListener('click', function(e) {
//         const target = e.target;
//         const parent = target.parentNode;
//         let button = null;

//         if (target.classList.contains("button") || parent.classList.contains("button")) {
//             button = target.classList.contains("button") ? target : parent;
//         }

//         if (!button) {
//             const allIntroductions = document.querySelectorAll('.introduce');
//             allIntroductions.forEach(intro => {
//                 intro.classList.remove('expanded');
//                 intro.style.maxHeight = null;
//                 const hiddenDivs = intro.querySelectorAll('div');
//                 hiddenDivs.forEach(div => {
//                     div.classList.add('hidden');
//                 });
//             });
//         }
//     });

//     const buttons = document.querySelectorAll('.button');
//     buttons.forEach(button => {
//         button.addEventListener('click', function(event) {
//             // 현재 버튼과 연결된 소개 div를 찾음
//             const introduce = this.parentElement.querySelector('.introduce');
//             const selected = button.classList[1];

//             // 모든 소개 div를 숨김
//             const allIntroductions = document.querySelectorAll('.introduce');
//             allIntroductions.forEach(intro => {
//                 if (intro !== introduce) {
//                     intro.classList.remove('expanded');
//                     intro.style.maxHeight = null;
//                     const hiddenDivs = intro.querySelectorAll('div');
//                     hiddenDivs.forEach(div => {
//                         div.classList.add('hidden');
//                     });
//                 }
//             });

//             const p = introduce.querySelector('.' + selected);
//             // 클릭한 버튼의 소개 div를 토글
//             if (introduce.classList.contains('expanded')) {
//                 introduce.classList.remove('expanded');
//                 p.classList.add('hidden');
//                 introduce.style.maxHeight = null;
//             } else {
//                 introduce.classList.add('expanded');
//                 p.classList.remove('hidden');
//                 introduce.style.maxHeight = introduce.scrollHeight + "px";
//             }

//             // 클릭 이벤트가 button 내부에서만 처리되도록 버블링 방지
//             event.stopPropagation();
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const introductions = document.querySelectorAll('.intro');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 클릭 이벤트 전파 방지

            const selectedClass = button.classList[1]; // 두 번째 클래스 이름을 가져옴
            const introToShow = document.querySelector(`.intro.${selectedClass}`);

            // 모든 소개 div를 숨김
            introductions.forEach(intro => {
                if (intro !== introToShow) {
                    intro.classList.remove('expanded');
                }
            });

            // 클릭한 버튼의 소개 div를 토글
            introToShow.classList.toggle('expanded');
        });
    });

    // 다른 영역을 클릭했을 때 펼쳐진 소개 div를 닫음
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.button') && !e.target.classList.contains('intro')) {
            introductions.forEach(intro => {
                intro.classList.remove('expanded');
            });
        }
    });
});
