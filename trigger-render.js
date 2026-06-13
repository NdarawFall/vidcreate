async function triggerRender(githubToken, owner, repo, variables) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/workflows/render.yml/dispatches`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${githubToken}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      ref: 'main', // or your branch name
      inputs: {
        variables: JSON.stringify(variables)
      }
    })
  });

  if (response.ok) {
    console.log('✅ Rendu lancé avec succès !');
  } else {
    const error = await response.text();
    console.error('❌ Erreur lors du lancement :', error);
  }
}

// Exemple d'utilisation (pour ton backend/Vercel function) :
// triggerRender('TON_GITHUB_TOKEN', 'TON_NOM_UTILISATEUR', 'TON_REPO', { title: "Salut !" });
