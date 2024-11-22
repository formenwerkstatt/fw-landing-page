export const allImages = [
  "/images/gallery/machine-dmg-01.jpg",
  "/images/gallery/machine-dmg-02.jpg",
  "/images/gallery/machine-dmg-03.jpg",
  "/images/gallery/macro-machine-01.jpg",
  "/images/gallery/macro-machine-02.jpg",
  "/images/gallery/macro-machine-03.jpg",
  "/images/gallery/macro-machine-04.jpg",
  "/images/gallery/macro-machine-05.jpg",
  "/images/gallery/macro-part-01.jpg",
  "/images/gallery/macro-part-02.jpg",
  "/images/gallery/macro-part-04.jpg",
  "/images/gallery/macro-part-05.jpg",
  "/images/gallery/macro-part-06.jpg",
  "/images/gallery/macro-part-07.jpg",
  "/images/gallery/macro-part-08.jpg",
  "/images/gallery/macro-part-09.jpg",
  "/images/gallery/macro-part-10.jpg",
  "/images/gallery/macro-part-11.jpg",
  "/images/gallery/macro-part-12.jpg",
  "/images/gallery/macro-part-13.jpg",
  "/images/gallery/macro-sparks.jpg",
  "/images/gallery/senk-01.jpg",
  "/images/gallery/senk-02.jpg",
  "/images/gallery/senk-03.jpg",
  "/images/gallery/senk-04.jpg",
  "/images/gallery/senk-05.jpg",
  "/images/gallery/senk-06.jpg",
  "/images/gallery/workshop-01.jpg",
  "/images/gallery/workshop-02.jpg",
  "/images/gallery/workshop-03.jpg",
  "/images/gallery/edm-frasen.png",
  "/images/gallery/laser-close.png",
  "/images/gallery/lasers.png",
  "/images/gallery/macro-laser-gravieren.png",
  "/images/beratung.png",
  "/images/frasen.png",
  "/images/laser-gravieren.png",
  "/images/macro-01.png",
  "/images/macro-02.png",
  "/images/senk-edm.png",
  "/images/werkzeug-01.png",
];

export function parallelGalleryImages(iconName: string) {
  switch (iconName) {
    case "design":
      return [];
    case "gear":
      return ["/images/werkzeug-01.png", "/images/gallery/macro-part-10.jpg"];
    case "manufacture":
      return [
        "/images/gallery/macro-part-12.jpg",
        "/images/gallery/macro-part-11.jpg",
      ];
    case "milling":
      return [
        "/images/gallery/machine-dmg-02.jpg",
        "/images/gallery/machine-dmg-03.jpg",
      ];
    case "turning":
      return [
        "/images/gallery/edm-frasen.png",
        "/images/gallery/macro-machine-04.jpg",
      ];
    case "edm":
      return ["/images/gallery/senk-06.jpg", "/images/senk-edm.png"];
    case "wire-edm":
      return [
        "/images/gallery/macro-machine-06.jpg",
        "/images/gallery/macro-part-05.jpg",
      ];
    case "welding":
      return ["/images/gallery/lasers.png", "/images/gallery/laser-close.png"];
    case "laser":
      return [
        "/images/gallery/macro-laser-gravieren.png",
        "/images/laser-gravieren.png",
      ];
    case "polish":
      return [
        "/images/gallery/macro-part-07.jpg",
        "/images/gallery/macro-part-06.jpg",
      ];
    case "grinding":
      return ["/images/gallery/macro-sparks.jpg"];

    case "repair":
      return [
        "/images/gallery/edm-frasen.png",
        "/images/gallery/workshop-02.jpg",
      ];
    default:
      return [];
  }
}
