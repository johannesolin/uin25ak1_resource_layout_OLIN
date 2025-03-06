document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("category-nav");
  const resourceSection = document.getElementById("resource-section");

  const categories = resources.map((resource) => resource.category);

  // Koden starter med å se etter DOMContentLoaded, som kjører scriptet når hele HTML-dokumentet er lastet inn.
  // Deretter hentes elementene med getElementById() og lagres i variabler.
  // En ny variabel categories opprettes ved å bruke map() på resources-arrayen.
  // Dette er fordi dette forhindrer feil dersom koden prøver å
  // manipulere elementer som ennå ikke er tilgjengelige i DOM-en.

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", () => filterResources(category));
    nav.appendChild(button);
  });

  // Dette går gjennom hver kategori i kategori i cateregories-array med forEach().
  // For hver katergori opprettes et nytt <button> - element dynamisk med document.createElement('button').

  function filterResources(category) {
    const filteredResources = resources.find(
      (res) => res.category === category
    );
    resourceSection.innerHTML = "";

    if (!filteredResources) return;

    const title = document.createElement("h2");
    title.textContent = filteredResources.category;
    resourceSection.appendChild(title);

    const description = document.createElement("p");
    description.textContent = filteredResources.text;
    resourceSection.appendChild(description);

    const list = document.createElement("ul");

    filteredResources.sources.map((source) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = source.url;
      link.textContent = source.title;
      listItem.appendChild(link);
      list.appendChild(listItem);
    });

    resourceSection.appendChild(list);
  }

  filterResources("HTML");
});

// Funksjonen filterResources(category) filtrerer og viser relevante ressurser basert på den valgte kategorien.
// Den bruker find() for å hente det første objektet i resources-arrayet der category samsvarer med parameterverdien.
// Deretter tømmes resourceSection.innerHTML for å fjerne tidligere innhold før nye elementer legges til.
// Hvis det ikke finnes ressurser for den valgte kategorien, avsluttes funksjonen umiddelbart.
// Ellers opprettes et <h2>-element for kategorinavnet, et <p>-element for beskrivelsen, samt en <ul>-liste som skal inneholde lenkene.
// Lenkene genereres dynamisk ved hjelp av map(), der hver ressurs blir representert av et <li>-element med en <a>-lenke.
// Etterpå legges hele listen inn i resourceSection, slik at innholdet blir synlig på nettsiden.
// Til slutt kalles filterResources('HTML') for å automatisk vise HTML-relaterte ressurser når siden lastes inn.
