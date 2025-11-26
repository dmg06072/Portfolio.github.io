import fetch from "node-fetch";

export default async function handler(req, res) {
  const username = "dmg06072";
  const token = process.env.GITHUB_TOKEN;

  const fetchOptions = {
    headers: {
      Authorization: `token ${token}`
    }
  };

  try {
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, fetchOptions);
    const repos = await repoRes.json();

    let totals = {};
    let totalSum = 0;

    for (const repo of repos) {
      const langRes = await fetch(repo.languages_url, fetchOptions);
      const langs = await langRes.json();

      for (const lang in langs) {
        const v = langs[lang];
        totals[lang] = (totals[lang] || 0) + v;
        totalSum += v;
      }
    }

    res.status(200).json({
      languages: totals,
      total: totalSum
    });

  } catch (error) {
    res.status(500).json({
      error: "GitHub API Error",
      detail: error.toString()
    });
  }
}
