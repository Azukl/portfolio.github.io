document.addEventListener('DOMContentLoaded', function() {
    // ポートフォリオデータ
    const portfolioData = {
        name : "岡本 泰征 Okamoto Taisei", 
        title : "東京国際工科専門職大学 AI戦略コース", 
        skills : ["Python","SQL(MySQL,Oracle)","PHP","Javascript,HTML,CSS","Java","R","C,C++","VB.net","Linux","AWS,Azure,GCP","Excel,Word,PowerPoint"]
    };
    // ヘッダー情報を設定
    document.getElementById('portfolio-name').textContent = portfolioData.name + ' のポートフォリオ';
    document.getElementById('portfolio-title').textContent = portfolioData.title;

    // プロフィール情報を設定
    document.getElementById('profile-name').textContent = portfolioData.name;
    document.getElementById('profile-title').textContent = portfolioData.title;

    // スキルリストを生成
    const skillsList = document.getElementById('skills-list');
    if (portfolioData.skills && portfolioData.skills.length > 0) {
        portfolioData.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    } else {
        const p = document.createElement('p');
        p.textContent = 'スキルが登録されていません。';
        p.className = 'text-muted';
        skillsList.parentNode.replaceChild(p, skillsList);
    }

    // ビデオ要素の取得
    const video = document.getElementById('project-video');

    // ビデオのメタデータが読み込まれたときのイベントリスナー
    video.addEventListener('loadedmetadata', function() {
        console.log('動画の長さ: ' + video.duration + ' 秒');
    });

 // 必要に応じて、他のビデオ制御機能をここに追加
});