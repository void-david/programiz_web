async function displayAlert() {
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    let data = await response.json();
    let data2 = data.name;
    alert(JSON.stringify(data2));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}