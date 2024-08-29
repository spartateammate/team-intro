const members = [
    {
        name: '박가온누리',
        short: 'Java 뿌시겠습니다!!',
        MBTI: 'MBTI: INFP',
        Strength: '장점: 기본 이론을 베이스로 응용력이 좋고, 기획력이 뛰어나다.',
        GroupPlay: '협업 스타일: 팀원들과 꾸준히 진척도를 공유하기',
        imageUrl: 'assets/image/박가온누리.jpeg',
        githubUrl: 'https://github.com/worldcenter96',
        blogType: 'tistory',
        blogUrl: 'https://worldcenter96.tistory.com/'
    },
    {
        name: '김명훈',
        short: '잘부탁드립니다',
        MBTI: 'MBTI: ENFJ',
        Strength: '장점: 실패를 두려워 하지 않는 무한 긍정 마인드와 스트레스를 빠르게 극복하는 회복탄력성.',
        GroupPlay: '협업 스타일: 팀으로 묶인 이상 낙오는 없다. 내가 부족한 건 노력을 들여서 더 공부하고, 어려움에 처한 팀원은 이끌어서 함께 가자.',
        imageUrl: 'assets/image/김명훈.jpg',
        githubUrl: 'https://github.com/anewsdev',
        blogType: 'tistory',
        blogUrl: 'https://a-new-s.tistory.com/'
    },
    {
        name: '허원경',
        short: '잘 배워보겠습니다ㅎㅎ..',
        MBTI: 'MBTI: ISFP',
        Strength: '장점: 탁월한 끈기와 인내심, 그리고 한가지에 높은 집중력',
        GroupPlay: '협업 스타일: 팀의 필요에 맞춰 유연하게 조정하고, 효율적으로 조화를 이루기.',
        imageUrl: 'assets/image/허원경.png',
        githubUrl: 'https://github.com/hwk9407',
        blogType: 'velog',
        blogUrl: 'https://velog.io/@hwk__/posts'
    },
    {
        name: '류지수',
        short: 'solution 함수가 제일 싫었어요.',
        MBTI: 'MBTI: INTP',
        Strength: '장점: 한번 앉으면 목표한 만큼 해내기 전까지 일어나지 않는다.',
        GroupPlay: '협업 스타일: 모르는 것은 먼저 물어보고, 아는 것은 먼저 말해주면서 서로서로 윈윈할 수 있는 스타일',
        imageUrl: 'assets/image/류지수.jpg',
        githubUrl: 'https://github.com/dameun0527',
        blogType: 'velog',
        blogUrl: 'https://velog.io/@lilly2069/posts'
    },
    {
        name: '민지형',
        short: '열심히 할께요.. ㅇ.<',
        MBTI: 'MBTI: ISFJ',
        Strength: '장점: 고집이 센 편이라 어떻게든 해결해보려고 시도함',
        GroupPlay: '협업 스타일: 부족한 부분은 최대한 따라가려고 노력하기.',
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
const modalShort = document.getElementById("modalShort");
const modalMBTI = document.getElementById("modalMBTI");
const modalStrength = document.getElementById("modalStrength");
const modalgroupPlay = document.getElementById("modalgroupPlay");
const githubButton = document.getElementById("githubButton");
const blogButtons = document.getElementById("blogButtons");

// 모달 열기 함수
function openModal(index) {
    const member = members[index];

    // 모달에 팀원 정보 채우기
    modalTitle.textContent = member.name;
    modalImage.src = member.imageUrl;
    modalShort.textContent = member.short;
    modalMBTI.textContent = member.MBTI;
    modalStrength.textContent = member.Strength;
    modalgroupPlay.textContent = member.GroupPlay;
    

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