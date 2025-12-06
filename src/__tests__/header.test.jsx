import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { describe, expect } from "vitest";

const renderWithProvider = () => {
  return render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
};
/* eslint-disable no-undef */
describe("Header Component", () => {
  it("Renders logo with alt text", () => {
    renderWithProvider();
    expect(
      screen.getByAltText(/logo of insta food application/i)
    ).toBeInTheDocument();
  });

  it("Should render all navigation menu links", () => {
    renderWithProvider();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByTestId("cart-link")).toHaveTextContent("Cart (0)");
    expect(screen.getByText(/orders/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  it("render all navigation links to correct path", () => {
    renderWithProvider();
    expect(screen.getByText(/home/i).closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("cart-link").closest("a")).toHaveAttribute(
      "href",
      "/cart"
    );
    expect(screen.getByText(/orders/i).closest("a")).toHaveAttribute(
      "href",
      "/orders"
    );
    expect(screen.getByText(/about us/i).closest("a")).toHaveAttribute(
      "href",
      "/about"
    );
    expect(screen.getByText(/contact us/i).closest("a")).toHaveAttribute(
      "href",
      "/contact"
    );
  });
  it("Should render theme switcher buttons", () => {
    renderWithProvider();
    expect(screen.getByTestId("theme-switch-desktop")).toBeInTheDocument();
    expect(screen.getByTestId("theme-switch-mobile")).toBeInTheDocument();
  });
});
