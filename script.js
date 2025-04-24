function posaljiPoruku() {
  const ime = document.getElementById('ime').value;
  const email = document.getElementById('email').value;
  const poruka = document.getElementById('poruka').value;

  if (ime && email && poruka) {
    document.getElementById('potvrda').innerText = `Hvala ${ime}, vaša poruka je poslata!`;
  } else {
    document.getElementById('potvrda').innerText = `Molimo popunite sva polja.`;
  }

  return false; // Sprečava reload forme
}
