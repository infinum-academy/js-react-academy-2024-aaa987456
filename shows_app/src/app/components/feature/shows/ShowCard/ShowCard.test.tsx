import { render, screen } from "@testing-library/react";
import { ShowCard } from "./ShowCard";
import { ChakraProvider } from "@chakra-ui/react";

describe("ShowCard", () => {
  const mockShow = {
    id: "1",
    title: "Title",
    description: "Descpription",
    image_url: "https://via.placeholder.com/150",
    average_rating: 3.5,
    no_of_reviews: 4
  };

  const renderComponent = () => {
    render(
      <ChakraProvider>
        <ShowCard show={mockShow} />
      </ChakraProvider>
    );
  };

  it("check component contains image element (with provided url)", () => {
    renderComponent();

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockShow.image_url);
  });

  it("check if show title is rendered", () => {
    renderComponent();

    const titleElement = screen.getByText(mockShow.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("check if correct average rating is rendered", () => {
    renderComponent();

    const ratingText = `${mockShow.average_rating}/5`;
    const ratingElement = screen.getByText(ratingText);
    expect(ratingElement).toBeInTheDocument();
  });
  it("should render the ShowCard component with appropriate props", () => {
    renderComponent();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
  });
});
