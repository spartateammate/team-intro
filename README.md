<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4 all fect Readme</title>
    <style>
        .button-link {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: black;
            background-color: #F5F5F5;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            border: none;
        }
        .button-link:hover {
            background-color: #B5B5B5;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-bottom: 20px;
        }
        h1, h2, h3 {
            margin-top: 20px;
            margin-bottom: 10px;
        }
        h2 {
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
        iframe {
            display: block;
            margin: 20px auto;
        }
    </style>
</head>
<body>

    <h1>4 all fect 팀 소개 미니 프로젝트</h1>

    <h2>프로젝트 소개</h2>
    <p>웹개발 종합반 강의를 통해 배운 HTML, CSS, Javascript 지식을 활용하여 팀 소개 웹 페이지를 만들어 보도록 합니다.<br>
    팀 내부적으로 정한 프로젝트의 목표는 강의에서 배운 내용을 복습하는 것 뿐만 아니라 이를 응용해보고 상호 간 코드리뷰를 통해 견해를 넓혀 보는 것 입니다.</p>

    <h2>팀원 소개</h2>
    <table>
        <thead>
            <tr>
                <th>팀원</th>
                <th>담당 페이지</th>
                <th>담당 파트</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>김명훈</td>
                <td>home.html</td>
                <td>유튜브 영상 링크<br>ToDoList 및 관련 자료 바로가기 링크<br>WBS Table 삽입<br>날씨 및 시간 API 호출</td>
            </tr>
            <tr>
                <td>허원경</td>
                <td>frame.html</td>
                <td>Header, footer 구성<br>웹페이지 컬러, 사이즈, 폰트 등 디자인 구성(CSS)</td>
            </tr>
            <tr>
                <td>민지형</td>
                <td>team.html</td>
                <td>팀 소개, 목표, 약속 페이지 구성</td>
            </tr>
            <tr>
                <td>박가온누리</td>
                <td>member.html</td>
                <td>팀원 추가 기능 삽입<br>Firebase DB, Storage 연결하여 데이터 업로드 및 다운로드</td>
            </tr>
            <tr>
                <td>류지수</td>
                <td>member.html</td>
                <td>팀원 소개 페이지<br>Modal 기능 담당</td>
            </tr>
        </tbody>
    </table>

    <h2>와이어프레임</h2>

    <h3>1. HOME 페이지</h3>
    <img src="assets/arch/arch1.png" alt="HOME 페이지 와이어프레임">

    <h3>2. 팀 소개 페이지</h3>
    <img src="assets/arch/arch2.png" alt="팀 소개 페이지 와이어프레임">

    <h3>3. 팀원 소개 페이지</h3>
    <img src="assets/arch/arch3.png" alt="팀원 소개 페이지 와이어프레임">

    <h2>코드 Merge 전략</h2>
    <p>여기에 코드 Merge 전략에 대한 설명을 추가하세요.</p>

    <h2>Demo Video</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gCQFvp6iU7k?si=xfZ9Z8rGwUZgcZIO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <h2>4 all fect 팀원들의 블로그로 놀러오세요</h2>
    <a href="https://www.example.com" class="button-link">김명훈</a>
    <a href="https://www.example.com" class="button-link">허원경</a>
    <a href="https://www.example.com" class="button-link">민지형</a>
    <a href="https://www.example.com" class="button-link">박가온누리</a>
    <a href="https://www.example.com" class="button-link">류지수</a>

</body>
</html>
