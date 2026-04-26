export function Navbar() {
  return `
    <nav id="mainnav">
      <div class="ni">
        <a href="#hero" class="nlogo">JohnDoe<span>.</span></a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <span class="avail-dot">Available</span>
        <button class="ntb" id="tbttn" aria-label="Toggle theme">
          <span id="ticon">☀</span>
          <span id="tlbl">Light</span>
        </button>
      </div>
    </nav>
  `;
}
