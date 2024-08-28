const members = [
    {
        name: '박가온누리',
        title: '든든한 팀장',
        description: '든든한 당신이 있어서 행운이에요!',
        imageUrl: 'assets/image/박가온누리.jpeg',
        githubUrl: 'https://github.com/worldcenter96',
        blogType: 'tistory',
        blogUrl: 'https://worldcenter96.tistory.com/'
    },
    {
        name: '김명훈',
        title: '.',
        description: '.',
        imageUrl: 'assets/image/김명훈.jpg',
        githubUrl: 'https://github.com/anewsdev',
        blogType: 'tistory',
        blogUrl: 'https://a-new-s.tistory.com/'
    },
    {
        name: '허원경',
        title: '.',
        description: '.',
        imageUrl: 'assets/image/허원경.png',
        githubUrl: 'https://github.com/hwk9407',
        blogType: 'velog',
        blogUrl: 'https://velog.io/@hwk__/posts'
    },
    {
        name: '류지수',
        title: '.',
        description: '.',
        imageUrl: 'assets/image/류지수.jpg',
        githubUrl: 'https://github.com/dameun0527',
        blogType: 'velog',
        blogUrl: 'https://velog.io/@lilly2069/posts'
    },
    {
        name: '민지형',
        title: '.',
        description: '.',
        imageUrl: 'assets/image/민지형.jpg',
        githubUrl: 'https://github.com/minjh12',
        blogType: 'velog',
        blogUrl: 'https://velog.io/@mcbride317/posts'
    }
];

// 모달 요소들 가져오기
const modal = document.getElementById("teamMemberModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const githubButton = document.getElementById("githubButton");
const blogButtons = document.getElementById("blogButtons");

// 모달 열기 함수
function openModal(index) {
    const member = members[index];

    // 모달에 팀원 정보 채우기
    modalTitle.textContent = member.name;
    modalImage.src = member.imageUrl;
    modalDescription.textContent = member.description;

    // GitHub 버튼 링크 설정
    githubButton.onclick = function () {
        window.open(member.githubUrl, '_blank');
    };

    // 블로그 버튼 설정
    // 기존 블로그 버튼 제거
    while (blogButtons.firstChild) {
        blogButtons.removeChild(blogButtons.firstChild);
    }

    // 블로그 버튼 생성 및 설정
    const blogButton = document.createElement('a');
    blogButton.className = 'button';
    blogButton.href = member.blogUrl;
    blogButton.target = '_blank';

    const blogButtonImg = document.createElement('img');
    blogButtonImg.src = member.blogType === 'velog' ? 'assets/logo/green favicon.png' : 'assets/logo/logomark.png';
    blogButtonImg.alt = member.blogType.charAt(0).toUpperCase() + member.blogType.slice(1) + ' Icon';

    const blogButtonText = document.createElement('span');
    blogButtonText.textContent = member.blogType.charAt(0).toUpperCase() + member.blogType.slice(1);

    blogButton.appendChild(blogButtonImg);
    blogButton.appendChild(blogButtonText);
    blogButtons.appendChild(blogButton);

    modal.style.display = "block";
}

// 모달 닫기 버튼
const closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function () {
    modal.style.display = "none";
}

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}