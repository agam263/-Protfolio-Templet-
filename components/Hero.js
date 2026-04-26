export function Hero() {
  return `
    <section id="hero">
      <div class="w">
        <div class="hero-grid">
          <div class="hero-left">
            <div class="heyebrow" id="ey">
              <div class="pulse"></div><span class="typewriter">Software Developer · Designer</span>
            </div>
            <h1 class="hh" id="hh">
              <span class="hline"><span class="hword">Building systems</span></span>
              <span class="hline"><span class="hword">and turning <em>ideas</em></span></span>
              <span class="hline"><span class="hword">into products<span class="dot">.</span></span></span>
            </h1>
            <p class="hsub" id="hsub">I design and ship production-ready experiences across web and mobile.</p>
            <div class="hcta" id="hcta">
              <a href="#work" class="btnp">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>View Work
              </a>
              <a href="#contact" class="btns">Let's build together <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div class="hstats" id="hst">
              <div>
                <div class="st-n"><span class="cnt" data-t="5"></span><span class="c"></span></div>
                <div class="st-l">Live Projects</div>
              </div>
              <div>
                <div class="st-n">∞</div>
                <div class="st-l">Commits Shipped</div>
              </div>
            </div>
          </div>

          <div class="hvisual" id="hvis">
            <div class="hv-frame">
              <div class="hv-open">Open to Work</div>
              <div class="hv-inner">
                <div class="hv-card" style="max-width:220px;">
                  <div class="hvc-l">Current Focus</div>
                  <div class="hvc-v"><em>Web Development</em> + <em>UI/UX</em></div>
                </div>
                <div class="hv-mid">
                  <div class="hv-card" style="max-width:200px;">
                    <div class="hvc-l">Primary Stack</div>
                    <div class="hvc-v"><em>React</em> · TypeScript · Node.js</div>
                  </div>
                </div>
                <div class="hv-card" style="max-width:230px;">
                  <div class="hvc-l">Latest Build</div>
                  <div class="hvc-v">Awesome App - A cool project</div>
                  <div class="hv-bar"><div class="hv-bar-fill" style="width:82%"></div></div>
                  <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:var(--t3);margin-top:4px;font-weight:300;">Updated Recently</div>
                </div>
                <div class="hv-mid"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TICKER -->
    <div class="ticker-wrap">
      <div class="ticker" aria-hidden="true">
        <div class="ti">React <span>✦</span></div><div class="ti">TypeScript <span>✦</span></div>
        <div class="ti">Node.js <span>✦</span></div><div class="ti">TailwindCSS <span>✦</span></div>
        <div class="ti">Python <span>✦</span></div><div class="ti">GraphQL <span>✦</span></div>
        <div class="ti">UI/UX Design <span>✦</span></div><div class="ti">Figma <span>✦</span></div>
        <div class="ti">React <span>✦</span></div><div class="ti">TypeScript <span>✦</span></div>
        <div class="ti">Node.js <span>✦</span></div><div class="ti">TailwindCSS <span>✦</span></div>
        <div class="ti">Python <span>✦</span></div><div class="ti">GraphQL <span>✦</span></div>
        <div class="ti">UI/UX Design <span>✦</span></div><div class="ti">Figma <span>✦</span></div>
      </div>
    </div>
    <div class="divr"></div>
  `;
}
