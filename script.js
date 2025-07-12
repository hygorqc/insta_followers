function extrairNomesFromFollowers(json) {
  return json.map((entry) => entry.string_list_data[0].value);
}

function extrairNomesFromFollowing(json) {
  return json.relationships_following.map(
    (entry) => entry.string_list_data[0].value,
  );
}

function comparar() {
  const followersFile = document.getElementById('followersFile').files[0];
  const followingFile = document.getElementById('followingFile').files[0];

  if (!followersFile || !followingFile) {
    alert('Por favor, envie os dois arquivos.');
    return;
  }

  const reader1 = new FileReader();
  const reader2 = new FileReader();

  reader1.onload = function (e1) {
    const followersData = JSON.parse(e1.target.result);
    const seguidores = extrairNomesFromFollowers(followersData);

    reader2.onload = function (e2) {
      const followingData = JSON.parse(e2.target.result);
      const seguindo = extrairNomesFromFollowing(followingData);

      const naoMeSeguemDeVolta = seguindo.filter(
        (username) => !seguidores.includes(username),
      );

      // Salvar para exportação
      window.listaNaoSegueDeVolta = naoMeSeguemDeVolta;

      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = `
      <h3>Perfis que você segue e não te seguem de volta: (${naoMeSeguemDeVolta.length})</h3>
      <button class="comparar" onclick="baixarTXT()">Baixar como .txt</button>
            <div id="listaPerfis"></div>
          `;

      const listaDiv = document.getElementById('listaPerfis');

      naoMeSeguemDeVolta.forEach((user) => {
        const linha = document.createElement('div');
        linha.className = 'perfil';
        linha.innerHTML = `
              <span>@${user}</span>
              <a class="link-btn" href="https://www.instagram.com/${user}" target="_blank">Visitar perfil</a>
            `;
        listaDiv.appendChild(linha);
      });
    };
    reader2.readAsText(followingFile);
  };
  reader1.readAsText(followersFile);
}

function baixarTXT() {
  const blob = new Blob([window.listaNaoSegueDeVolta.join('\n')], {
    type: 'text/plain',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'nao_seguem_de_volta.txt';
  link.click();
}
