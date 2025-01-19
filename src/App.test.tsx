import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import App from "./App";

vi.mock("axios");

describe("App component", () => {
	it("renders Galeria heading", () => {
		render(<App />);
		const heading = screen.getByTestId("page_title");
		expect(heading).toBeInTheDocument();
	});

	it("fetches and displays gallery items", async () => {
		const mockData = [
			{ name: "Item 1", category: "Category 1", picture_id: 1 },
			{ name: "Item 2", category: "Category 2", picture_id: 2 },
		];
		axios.get.mockResolvedValue({ data: mockData });

		render(<App />);

		const items = await screen.findAllByRole("listitem");
		expect(items).toHaveLength(mockData.length);
		expect(items[0]).toHaveTextContent("Item 1");
		expect(items[1]).toHaveTextContent("Item 2");
	});

	it("handles fetch error", async () => {
		axios.get.mockRejectedValue(new Error("Error fetching gallery"));

		render(<App />);

		const items = await screen.queryAllByRole("listitem");
		expect(items).toHaveLength(0);
	});
});
