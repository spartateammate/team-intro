// 모달을 여는 함수
function openModal(index) {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    const members = [
        {
            name: "박가온누리",
            description: "박가온누리의 자세한 설명입니다.",
        },
        {
            name: "김명훈",
            description: "김명훈의 자세한 설명입니다.",
        },
        {
            name: "허원경",
            description: "허원경의 자세한 설명입니다.",
        },
        {
            name: "류지수",
            description: "류지수의 자세한 설명입니다.",
        },
        {
            name: "민지형",
            description: "민지형의 자세한 설명입니다.",
        },
        {
            name: "강아지",
            description: "강아지의 자세한 설명입니다.",
        }
    ];

    // 인덱스에 맞는 팀원의 정보로 모달 내용 업데이트
    modalTitle.textContent = members[index].name;
    modalDescription.textContent = members[index].description;

    // 모달을 표시
    modal.style.display = "flex";
}

// 모달을 닫는 함수
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// 모달 외부를 클릭했을 때 모달을 닫는 기능
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
