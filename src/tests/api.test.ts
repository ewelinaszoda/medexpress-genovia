import { sendConsultationData } from "../utils/api";

describe("API utility", () => {
  it("successfully sends consultation data", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    await sendConsultationData(["Yes", "No", "Yes", "No", "Yes"]);
    expect(consoleSpy).toHaveBeenCalledWith("Consultation data:", [
      "Yes",
      "No",
      "Yes",
      "No",
      "Yes",
    ]);
  });
});
