const input = document.querySelectorAll(".controls input");

function update()
{
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}


input.forEach(inp=> inp.addEventListener("mousemove",update));
input.forEach(inp=> inp.addEventListener("change",update));