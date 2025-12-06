/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import RestaurantDetails from "../components/RestaurantDetails";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { expect } from "vitest";

const renderWithProvider = () => {
  const initialEntries = [
    {
      pathname: "/restaurants/menu/776566",
      state: {
        restaurantDetails: "Dominos",
        locality: "Hyderabad",
        avgRating: "4.2",
        cuisines: ["Pizza", "Italian"],
        costForTwo: "₹500 for two",
        deliveryTime: "30 min",
      },
    },
  ];

  render(
    <Provider store={appStore}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/restaurants/menu/:id" element={<RestaurantDetails />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("Restaurant Details Component", () => {
  it("renders correctly with location state", () => {
    renderWithProvider();
    expect(screen.getByText(/Dominos/i)).toBeInTheDocument();
    expect(screen.getByText(/Hyderabad/i)).toBeInTheDocument();
    expect(screen.getByText(/4.2/i)).toBeInTheDocument();
    expect(screen.getByText(/₹500 for two/i)).toBeInTheDocument();
    expect(screen.getByText(/30 min/i)).toBeInTheDocument();
  });
});
