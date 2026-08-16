(function () {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const toggle = document.querySelector("[data-nav-toggle]");
  const gallery = document.getElementById("gallery-grid");
  const payButton = document.querySelector("[data-pay]");
  const embed = document.getElementById("wayforpay-embed");
  const config = window.CLUB_CONFIG || { media: [], wayforpayInvoiceUrl: "" };

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  const media = Array.isArray(config.media) ? config.media : [];
  const gallerySection = document.getElementById("gallery");

  if (media.length && gallery && gallerySection) {
    gallerySection.hidden = false;
    gallery.dataset.count = String(Math.min(media.length, 4));
    if (media.length > 4) gallery.dataset.more = "true";

    media.forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = "media-card";

      if (item.type === "video") {
        const video = document.createElement("video");
        video.src = item.src;
        video.controls = true;
        video.playsInline = true;
        if (item.poster) video.poster = item.poster;
        video.setAttribute("aria-label", item.alt || "Відео з клубу");
        figure.appendChild(video);
      } else {
        const image = document.createElement("img");
        image.src = item.src;
        image.alt = item.alt || "";
        image.loading = "lazy";
        figure.appendChild(image);
      }

      if (item.caption) {
        const caption = document.createElement("figcaption");
        caption.textContent = item.caption;
        figure.appendChild(caption);
      }

      gallery.appendChild(figure);
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  if (revealItems.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealItems.forEach((item) => io.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const invoiceUrl = (config.wayforpayInvoiceUrl || payButton?.href || "").trim();
  const hasEmbed = embed && embed.childElementCount > 0;

  if (hasEmbed && payButton) {
    payButton.hidden = true;
  } else if (payButton && invoiceUrl) {
    payButton.hidden = false;
    payButton.href = invoiceUrl;
    payButton.addEventListener("click", (event) => {
      if (!window.Wayforpay) return;
      event.preventDefault();
      const widget = new window.Wayforpay();
      widget.invoice(invoiceUrl, true);
    });
  }
})();
