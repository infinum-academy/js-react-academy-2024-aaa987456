import React from "react";
import { render, screen } from "@testing-library/react";
import { ReviewItem, IReviewItemProps } from "./ReviewItem";
import { IReview } from "@/app/typings/reviews";

describe("ReviewItem", () => {
  const mockReview: IReview = {
    email: "user@example.com",
    avatar: "https://via.placeholder.com/150",
    rating: 2,
    comment: "Not good",
    id_of_show: "1"
  };

  const mockOnDelete = jest.fn();

  const renderComponent = (props: Partial<IReviewItemProps> = {}) => {
    const defaultProps: IReviewItemProps = {
      review: mockReview,
      onDelete: mockOnDelete,
      ...props
    };
    return render(<ReviewItem {...defaultProps} />);
  };

  it("check if correct user email is renderedl", () => {
    renderComponent();
    expect(screen.getByText(mockReview.email)).toBeInTheDocument();
  });

  it("check if correct rating is rendered", () => {
    renderComponent();
    expect(screen.getByText(`${mockReview.rating}/5`)).toBeInTheDocument();
  });

  it("check if correct review comment is rendered", () => {
    renderComponent();
    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
  });

  it("check if delete button is rendered", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
  });

  it("check if onDelete callback has beed called only once with the necessary data", () => {
    renderComponent();
    const deleteButton = screen.getByRole("button", { name: /remove/i });
    deleteButton.click();
    expect(mockOnDelete).toHaveBeenCalled();
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockReview);
  });
});
