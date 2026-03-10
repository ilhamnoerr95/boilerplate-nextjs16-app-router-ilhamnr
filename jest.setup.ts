import "@testing-library/jest-dom";

// ✅ Node 18 sudah punya TextEncoder, tapi di Jest jsdom perlu inject ulang
import { TextEncoder, TextDecoder } from "util";

if (!global.TextEncoder) global.TextEncoder = TextEncoder as any;
if (!global.TextDecoder) global.TextDecoder = TextDecoder as any;
