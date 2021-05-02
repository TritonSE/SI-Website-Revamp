import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    if(1==1) console.log("yes")
    expect(linkElement).toBeInTheDocument();
});
