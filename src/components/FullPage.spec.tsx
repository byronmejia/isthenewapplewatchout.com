import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import { FullPage } from "@components/FullPage";

describe("FullPage", () => {
    afterEach(cleanup);

    it("should render", () => {
        const output = render(<FullPage />);
        expect(output.baseElement).toBeTruthy();
        expect(output.baseElement).toMatchSnapshot();
    });
});
