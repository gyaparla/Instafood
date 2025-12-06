import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RestaurantCard from "../components/RestaurantCard";
import { BrowserRouter } from "react-router-dom";
import { RESTAURANT_THUMBNAIL } from "../utils/constants";

const mockData = {
  id: "776566",
  name: "Pizza Hut",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/512cff02-916b-4b90-b964-cf6c719df40c_776566.JPG",
  locality: "Kukatpally",
  cuisines: ["Pizzas"],
  avgRating: 4.2,
  sla: {
    deliveryTime: 38,
    lastMileTravel: 0.4,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "0.4 km",
    iconType: "ICON_TYPE_EMPTY",
  },
};

describe("Restaurant card", () => {
  it("  renders restaurant thumbnail image with correct src and alt text", () => {
    render(
      <BrowserRouter>
        <RestaurantCard cardDetails={mockData} />
      </BrowserRouter>
    );

    const thumbImg = screen.getByAltText(/thumbnail of pizza hut/i);
    expect(thumbImg).toBeInTheDocument();
    expect(thumbImg).toHaveAttribute(
      "src",
      RESTAURANT_THUMBNAIL + mockData.cloudinaryImageId
    );
  });

  it("renders restaurant details correctly", () => {
    render(
      <BrowserRouter>
        <RestaurantCard cardDetails={mockData} />
      </BrowserRouter>
    );
    expect(screen.getByText(/pizza hut/i)).toBeInTheDocument();
    expect(screen.getByText(/4.2/i)).toBeInTheDocument();
    expect(screen.getByText(/35-40 mins/i)).toBeInTheDocument();
    expect(screen.getByText(/pizzas/i)).toBeInTheDocument();
    expect(screen.getByText(/kukatpally/i)).toBeInTheDocument();
  });

  it("renders link with correct path", () => {
    render(
      <BrowserRouter>
        <RestaurantCard cardDetails={mockData} />
      </BrowserRouter>
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/restaurants/menu/${mockData.id}`
    );
  });
});
