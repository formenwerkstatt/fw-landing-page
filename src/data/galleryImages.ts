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
];

export function getRandomUniqueItems<T>(array: T[], count: number): T[] {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const galleryImages: string[] = getRandomUniqueItems(allImages, 5);

export function parallelGalleryImages(iconName: string) {
  switch (iconName) {
    case "design":
      return [];
    case "gear":
      return [
        "/images/gallery/macro-part-13.jpg",
        "/images/gallery/macro-part-10.jpg",
      ];
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
        "/images/gallery/macro-machine-05.jpg",
        "/images/gallery/macro-machine-04.jpg",
      ];
    case "edm":
      return ["/images/gallery/senk-06.jpg", "/images/gallery/senk-02.jpg"];
    case "wire-edm":
      return [
        "/images/gallery/macro-machine-06.jpg",
        "/images/gallery/macro-part-05.jpg",
      ];
    case "welding":
      return ["/images/gallery/macro-part-02.jpg"];
    case "laser":
      return ["/images/gallery/macro-part-02.jpg"];
    case "polish":
      return [
        "/images/gallery/macro-part-07.jpg",
        "/images/gallery/macro-part-06.jpg",
      ];
    case "grinding":
      return ["/images/gallery/macro-sparks.jpg"];
    case "renovation":
      return [
        "/images/gallery/workshop-03.jpg",
        "/images/gallery/workshop-02.jpg",
        "/images/gallery/workshop-01.jpg",
      ];
    case "overhaul":
      return [
        "/images/gallery/workshop-03.jpg",
        "/images/gallery/workshop-02.jpg",
        "/images/gallery/workshop-01.jpg",
      ];
    case "repair":
      return [
        "/images/gallery/workshop-03.jpg",
        "/images/gallery/workshop-02.jpg",
        "/images/gallery/workshop-01.jpg",
      ];
    default:
      return [];
  }
}
