import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, MockedFunction } from "vitest";
import axios from "axios";
import App from "./App";
import { GalleryItem } from "./types/gallery.ts";

vi.mock("axios");

describe("App component", () => {
	it("renders Galeria heading", () => {
		render(<App />);
		const heading = screen.getByTestId("page_title");
		expect(heading).toBeInTheDocument();
	});

	it("fetches and displays gallery items", async () => {
		const mockData: GalleryItem[] = [
            { id: 1, name: "Wazon Zielony", pictures: '["1_1.jpg", "1_2.jpg"]' },
            { id: 2, name: "Szklanki niebieskie", pictures: '["2_1.jpg", "2_2.jpg"]' },
        ];

		(axios.get as MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockData });

		render(<App />);

		const items = await screen.findAllByRole("listitem");
		expect(items).toHaveLength(mockData.length);
		expect(items[0]).toHaveTextContent(mockData[0].name);
		expect(items[1]).toHaveTextContent(mockData[1].name);
	});

	it("handles fetch error", async () => {
		(axios.get as MockedFunction<typeof axios.get>).mockRejectedValue(
            new Error("Error fetching gallery")
        );

		render(<App />);

		const items = await screen.queryAllByRole("listitem");
		expect(items).toHaveLength(0);
	});
});
