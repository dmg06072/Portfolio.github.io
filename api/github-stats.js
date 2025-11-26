import fetch from "node-fetch";  // ★ 추가됨

export default async function handler(req, res) {
  const username = "dmg06072";
  const token = process.env.GITHUB_TOKEN;   // 환경변수로 보호됨

  const fetchOptions = {
    headers: {
      Authorization: `token ${token}`
    }
  };

  try {
    // 1) 사용자 레포 목록 가져오기
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos`, fetchOptions);
    const repos = await repoRes.json();

    let totals = {};

    // 2) 각 repo의 언어 데이터 합산
    for (const repo of repos) {
      const langRes = await fetch(repo.languages_url, fetchOptions);
      const langs = await langRes.json();

      for (const lang in langs) {
        totals[lang] = (totals[lang] || 0) + langs[lang];
      }
    }

    // 3) 클라이언트로 전달
    res.status(200).json(totals);

  } catch (error) {
    res.status(500).json({ 
      error: "GitHub API Error", 
      detail: error.toString()
    });
  }
}
