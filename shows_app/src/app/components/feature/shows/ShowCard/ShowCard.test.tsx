import { render, screen } from "@testing-library/react";
import { ShowCard } from "./ShowCard";

describe("ShowCard", () => {
  const mockShow = {
    id: "1",
    title: "Title",
    description: "Descpription",
    image_url: "",
    average_rating: 3.5,
    no_of_reviews: 4
  };

  it("check component contains image element (with provided url)", () => {
    render(<ShowCard show={mockShow} />);

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockShow.image_url);
  });

  it("check if show title is rendered", () => {
    render(<ShowCard show={mockShow} />);

    const titleElement = screen.getByText(mockShow.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("check if correct average rating is rendered", () => {
    render(<ShowCard show={mockShow} />);

    const ratingText = `${mockShow.average_rating}/5`;
    const ratingElement = screen.getByText(ratingText);
    expect(ratingElement).toBeInTheDocument();
  });
});
