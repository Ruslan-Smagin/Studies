const creatDivForContainer = (containerId, text) => {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.innerHTML = text;
    container.appendChild(div);
}