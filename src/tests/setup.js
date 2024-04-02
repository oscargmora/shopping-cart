import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

expect.extend(matchers);

afterEach(() => {
    cleanup();
});

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();
