export const getImageUrl = (path) => {
    const assets = import.meta.glob('/src/assets/**/*', { eager: true });
    const fullPath = `/src/assets/${path}`;

    const asset = assets[fullPath];

    return String(asset.default);
};