export const HEADERS: { device: string; version: string; key: string } = {
  device: process.env.DEVICE as string,
  version: process.env.VERSION as string,
  key: process.env.CLIENT_KEY as string,
};
