import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Feed from "../components/Feed";
import { restaurants } from "../utils/mockData";

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe("Feed Component", () => {
  it("renders search input and updates value", () => {
    renderWithRouter(<Feed />);
    const filterInput = screen.getByPlaceholderText(/search/i);
    expect(filterInput).toBeInTheDocument();

    fireEvent.change(filterInput, { target: { value: "pizza" } });
    expect(filterInput).toHaveValue("pizza");
  });

  it("renders restaurant cards with mock data", () => {
    renderWithRouter(<Feed />);
    const cards = screen.getAllByTestId("res-card");

    const expectedLength =
      restaurants.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        .length;
    expect(cards.length).toBe(expectedLength);
  });

  it("filters restaurants based on search input", async () => {
    renderWithRouter(<Feed />);
    const searchInput = screen.getByPlaceholderText(/search/i);

    fireEvent.change(searchInput, { target: { value: "burger" } });

    const filteredCards = await screen.findAllByTestId("res-card");

    filteredCards.forEach((card) => {
      expect(card.textContent.toLowerCase()).toContain("burger");
    });
  });
});
