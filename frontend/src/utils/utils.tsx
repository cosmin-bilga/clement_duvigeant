export function photoGetId(location, photos) {
  if (location === "slider") return null;
  if (photos === null) return null;
  const photoObject = photos.reduce((acc, photo) => {
    if (!acc[photo.location]) {
      acc[photo.location] = [];
    }

    acc[photo.location].push({
      id: photo.id,
      name: photo.name,
    });

    return acc;
  }, {});

  return photoObject["location"];
}
