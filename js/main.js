(function () {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const toggle = document.querySelector("[data-nav-toggle]");
  const gallery = document.getElementById("gallery-grid");
  const coursesGrid = document.getElementById("courses-grid");
  const reviewsGrid = document.getElementById("reviews-grid");
  const reviewsSection = document.getElementById("reviews");
  const reviewsNav = document.querySelector("[data-nav-reviews]");
  const lightbox = document.getElementById("lightbox");
  const config = window.CLUB_CONFIG || {};

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

  const bindPay = (link, url) => {
    if (!url) return;
    link.href = url;
    link.addEventListener("click", (event) => {
      if (!window.Wayforpay) return;
      event.preventDefault();
      new window.Wayforpay().invoice(url, true);
    });
  };

  const courses = Array.isArray(config.courses) ? config.courses : [];
  const featured = courses.find((course) => course.featured) || courses[0];

  if (featured) {
    const label = featured.price
      ? `Приєднатися · ${featured.price}`
      : featured.cta || "Приєднатися";
    document.querySelectorAll("[data-featured-cta]").forEach((link) => {
      if (!link.classList.contains("btn-sm")) link.textContent = label;
    });
  }

  if (coursesGrid) {
    coursesGrid.dataset.count = String(courses.length);
    courses.forEach((course) => {
      const card = document.createElement("article");
      card.className = "course-card";
      if (course.featured) card.classList.add("is-featured");

      if (course.badge) {
        const badge = document.createElement("p");
        badge.className = "badge badge-dark";
        badge.textContent = course.badge;
        card.appendChild(badge);
      }

      const title = document.createElement("h3");
      title.textContent = course.title || "Курс";
      card.appendChild(title);

      if (course.description) {
        const text = document.createElement("p");
        text.className = "course-copy";
        text.textContent = course.description;
        card.appendChild(text);
      }

      if (course.price) {
        const price = document.createElement("p");
        price.className = "course-price";
        price.textContent = course.price;
        card.appendChild(price);
      }

      const pay = document.createElement("a");
      pay.className = "btn btn-dark";
      pay.rel = "noopener noreferrer";
      pay.textContent = course.cta || "Оплатити";
      bindPay(pay, course.payUrl);
      card.appendChild(pay);

      const hint = document.createElement("p");
      hint.className = "pay-hint";
      hint.textContent = "Оплата через WayForPay";
      card.appendChild(hint);

      coursesGrid.appendChild(card);
    });
  }

  const reviews = Array.isArray(config.reviews) ? config.reviews : [];

  if (reviews.length && reviewsGrid && reviewsSection) {
    reviewsSection.hidden = false;
    if (reviewsNav) reviewsNav.hidden = false;

    reviews.forEach((item, index) => {
      const button = document.createElement("button");
      button.className = "review-card";
      button.type = "button";
      button.setAttribute("data-review-index", String(index));

      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.alt || "Відгук";
      image.loading = "lazy";
      button.appendChild(image);

      button.addEventListener("click", () => openLightbox(item));
      reviewsGrid.appendChild(button);
    });
  }

  const openLightbox = (item) => {
    if (!lightbox) return;
    const image = lightbox.querySelector("img");
    image.src = item.src;
    image.alt = item.alt || "Відгук";
    lightbox.hidden = false;
    document.body.classList.add("is-locked");
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.querySelector("img").src = "";
    document.body.classList.remove("is-locked");
  };

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.closest("[data-lightbox-close]")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
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
})();
