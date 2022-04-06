export function createAppTitle(text) {
    const title = document.createElement("h1");
    title.classList = "apptitle";
    title.setAttribute("id", "title");
    title.textContent = text;

    return title;
}