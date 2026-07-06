document.querySelectorAll(".post-figure img").forEach((img) => {
  const reveal = () => img.classList.add("is-loaded");

  if (img.complete && img.naturalWidth > 0) {
    reveal();
  } else {
    img.addEventListener("load", reveal, { once: true });
    img.addEventListener("error", reveal, { once: true });
  }
});
