export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const username = "dmg06072";
  const token = process.env.GITHUB_TOKEN;

  const fetchOptions = {
    headers: {
      Authorization: `token ${token}`,
    },
  };

  const repoRes = await fetch(`https://api.github.com/users/${username}/repos`, fetchOptions);
  const repos = await repoRes.json();

  let totals = {};

  for (const repo of repos) {
    const langRes = await fetch(repo.languages_url, fetchOptions);
    const langs = await langRes.json();

    for (const lang in langs) {
      totals[lang] = (totals[lang] || 0) + langs[lang];
    }
  }

  return new Response(JSON.stringify(totals), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
