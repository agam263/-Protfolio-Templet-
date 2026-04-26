export function initAnimations() {
  /* ── SCROLL PROGRESS ── */
  const prog = document.getElementById('prog');
  let docHeight = document.documentElement.scrollHeight;
  let winHeight = document.documentElement.clientHeight;
  
  // Recalculate only on resize
  window.addEventListener('resize', () => {
    docHeight = document.documentElement.scrollHeight;
    winHeight = document.documentElement.clientHeight;
  });

  if(prog) {
    window.addEventListener('scroll', () => {
      const p = (document.documentElement.scrollTop / (docHeight - winHeight)) * 100;
      prog.style.width = p + '%';
    }, {passive: true});
  }

  /* ── THEME ── */
  const html = document.documentElement;
  const tbttn = document.getElementById('tbttn');
  if(tbttn) {
    tbttn.addEventListener('click', () => {
      const d = html.dataset.theme === 'dark';
      html.dataset.theme = d ? 'light' : 'dark';
      const ticon = document.getElementById('ticon');
      const tlbl = document.getElementById('tlbl');
      if (ticon) ticon.textContent = d ? '☽' : '☀';
      if (tlbl) tlbl.textContent = d ? 'Dark' : 'Light';
    });
  }

  /* ── LENIS + GSAP ── */
  if(typeof window.Lenis !== 'undefined' && typeof window.gsap !== 'undefined') {
    /* Lenis smooth scroll */
    const lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true,
      syncTouch: true
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    /* Hero entrance */
    const tl = gsap.timeline({defaults: {ease: 'power4.out'}});
    tl.to('#ey', {opacity: 1, duration: .9, delay: .2})
      .to('.hword', {y: '0%', duration: 1.05, stagger: .12, ease: 'power4.out'}, '-=.6')
      .to('#hsub', {opacity: 1, y: 0, duration: .8}, '-=.6')
      .to('#hcta', {opacity: 1, y: 0, duration: .7}, '-=.55')
      .to('#hst', {opacity: 1, y: 0, duration: .65}, '-=.45')
      .to('#hvis', {opacity: 1, y: 0, duration: .8, ease: 'power3.out'}, '-=.6');

    /* Counter animation */
    document.querySelectorAll('.cnt').forEach(el => {
      const target = parseInt(el.dataset.t);
      if(!isNaN(target)) {
        gsap.fromTo(el, {textContent: 0}, {
          textContent: target, duration: 1.8, ease: 'power2.out', delay: .8,
          snap: {textContent: 1},
          onUpdate() { el.textContent = Math.round(parseFloat(el.textContent)); }
        });
      }
    });

    /* Work title */
    ScrollTrigger.create({
      trigger: '#work', start: 'top 74%', once: true,
      onEnter: () => gsap.from('.wtitle', {opacity: 0, y: 40, duration: .9, ease: 'power3.out'})
    });

    /* Project rows */
    gsap.utils.toArray('[data-pj]').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: .75, ease: 'power2.out',
        scrollTrigger: {trigger: el, start: 'top 84%', toggleActions: 'play none none none'}
      });
    });

    /* Principles */
    gsap.utils.toArray('.prin').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1, x: 0, duration: .7, delay: i * .1, ease: 'power2.out',
        scrollTrigger: {trigger: '#prlist', start: 'top 80%', toggleActions: 'play none none none'}
      });
    });

    /* Contact */
    gsap.from(['.chead', '.csub', '.cbtns'], {
      y: 36, opacity: 0, duration: .85, stagger: .16, ease: 'power3.out',
      scrollTrigger: {trigger: '#contact', start: 'top 76%', once: true}
    });

    /* Magnetic buttons */
    document.querySelectorAll('.btnp,.btns,.cb').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, {x: (e.clientX - r.left - r.width / 2) * .2, y: (e.clientY - r.top - r.height / 2) * .2, duration: .32, ease: 'power2.out'});
      });
      btn.addEventListener('mouseleave', () => gsap.to(btn, {x: 0, y: 0, duration: .55, ease: 'elastic.out(1,.5)'}));
    });

    /* Mouse parallax orbs - throttle requestAnimationFrame */
    let orbX = 0, orbY = 0;
    document.addEventListener('mousemove', e => {
      orbX = (e.clientX / window.innerWidth - .5) * 30;
      orbY = (e.clientY / window.innerHeight - .5) * 20;
    });
    
    gsap.ticker.add(() => {
      gsap.to('.oa', {x: orbX * .65, y: orbY * .65, duration: 2.5, ease: 'power1.out'});
      gsap.to('.ob', {x: -orbX * .45, y: -orbY * .45, duration: 3, ease: 'power1.out'});
      gsap.to('.oc', {x: orbX * .3, y: orbY * .35, duration: 3.5, ease: 'power1.out'});
    });

    /* Active nav using IntersectionObserver */
    const nas = document.querySelectorAll('nav a[href^="#"]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nas.forEach(a => {
            a.classList.toggle('actv', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));

    /* HV bar animation */
    gsap.fromTo('.hv-bar-fill', {width: '0%'}, {width: '82%', duration: 1.4, delay: 1.2, ease: 'power2.out'});

    /* Custom Cursor Logic */
    const isTouchDev = window.matchMedia('(hover: none)').matches;
    if (!isTouchDev) {
      document.body.classList.add('has-cursor');
      const dot = document.getElementById('cd');
      const ring = document.getElementById('cr');
      
      if (dot && ring) {
        let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
        
        document.addEventListener('mousemove', e => {
          mx = e.clientX;
          my = e.clientY;
        });

        gsap.ticker.add(() => {
          rx += (mx - rx) * 0.15;
          ry += (my - ry) * 0.15;
          dot.style.transform = `translate(${mx}px, ${my}px)`;
          ring.style.transform = `translate(${rx}px, ${ry}px)`;
        });

        document.querySelectorAll('a, button, .ch, .tag, .pj').forEach(el => {
          el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
          el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
        });
      }
    }
  }
}
