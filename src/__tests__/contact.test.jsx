import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Contact from "../pages/Contact";
import { expect, it } from "vitest";

/* eslint-disable no-undef */
describe("Contact Us Page", () => {
  it("should render header and  form fields :{name, email, message, submit button}", () => {
    render(<Contact />);

    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/@gmail.com/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/your message here/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("Shows validation errors when fields are empty", async () => {
    render(<Contact />);

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  it("Shows error for short name", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/your name/i), {
      target: { value: "j" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/Name must be at least 2 characters/i));
  });

  it("shows error for invalid email", async () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    expect(
      await screen.findByText(/Please enter a valid email/i)
    ).toBeInTheDocument();
  });

  it("Shows error for short message", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/your message/i), {
      target: { value: "small" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    expect(
      await screen.findByText(/Message must be at least 10 characters/i)
    ).toBeInTheDocument();
  });

  it("Clears error when user types valid input", async () => {
    render(<Contact />);

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    fireEvent.change(screen.getByPlaceholderText(/your name/i), {
      target: { value: "Gangadhara Reddy Yaparla" },
    });
    fireEvent.change(screen.getByPlaceholderText(/@gmail.com/i), {
      target: { value: "yaparlagangadhara@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/your message/i), {
      target: { value: "Sending the form after entering all values" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.queryByText(/message is required/i)
      ).not.toBeInTheDocument();
    });
  });

  it("Shows success message after valid submission", () => {});
});
