import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConsultationProvider } from "../context/ConsultationContext";
import Consultation from "../pages/Consultation";

describe("Consultation Component", () => {
  it("renders the first question", () => {
    render(
      <ConsultationProvider>
        <Consultation />
      </ConsultationProvider>
    );
    expect(screen.getByText(/Do you have an allergy to pears?/i)).toBeVisible();
  });

  it("moves to the second question when answering", async () => {
    render(
      <ConsultationProvider>
        <Consultation />
      </ConsultationProvider>
    );
    await userEvent.click(screen.getByText("Yes"));
    await waitFor(() => {
      expect(
        screen.getByText(
          /Do you experience allergic reactions to Genovian Pears?/i
        )
      ).toBeVisible();
    });
  });
  it("moves to the third question when answering the first two", async () => {
    render(
      <ConsultationProvider>
        <Consultation />
      </ConsultationProvider>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Do you have an allergy to pears?/i)
      ).toBeVisible();
    });
    await userEvent.click(screen.getByText("Yes"));

    await waitFor(() => {
      expect(
        screen.getByText(
          /Do you experience allergic reactions to Genovian Pears?/i
        )
      ).toBeVisible();
    });
    await userEvent.click(screen.getByText("No"));

    await waitFor(() => {
      expect(
        screen.getByText(
          /Do you experience itching or swelling after eating Genovian Pears?/i
        )
      ).toBeVisible();
    });
  });
  it("moves to the fifth question when answering the first four", async () => {
    render(
      <ConsultationProvider>
        <Consultation />
      </ConsultationProvider>
    );

    const questions = [
      /Do you have an allergy to pears?/i,
      /Do you experience allergic reactions to Genovian Pears?/i,
      /Do you experience itching or swelling after eating Genovian Pears?/i,
      /Have you been diagnosed with any other allergies before?/i,
      /Are you currently taking any medication for allergies?/i,
    ];

    // Answer the first four questions
    for (let i = 0; i < 4; i++) {
      await waitFor(() => {
        expect(screen.getByText(questions[i])).toBeVisible();
      });
      await userEvent.click(screen.getByText(i % 2 === 0 ? "Yes" : "No"));
    }

    // Check if the fifth question is displayed
    await waitFor(() => {
      expect(screen.getByText(questions[4])).toBeVisible();
    });
  });

  it("shows completion message after answering all questions", async () => {
    render(
      <ConsultationProvider>
        <Consultation />
      </ConsultationProvider>
    );

    for (let i = 0; i < 5; i++) {
      await userEvent.click(screen.getByText("Yes"));
    }

    await waitFor(() => {
      expect(
        screen.getByText(/Thank you for completing the consultation!/i)
      ).toBeVisible();
    });
  });
});
