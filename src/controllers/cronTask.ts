import * as cron from "node-cron";
import Task from "../models/Task";

export const scheduleTaskResetCronJobs = () => {
  const WeekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  WeekDays.forEach((day, idx) => {
    cron.schedule(`0 0 * * ${idx}`, async () => {
      try {
        await Task.updateMany({ category: day }, { status: false });
        console.log("Tasks reset successful");
      } catch (error) {
        console.error("Error resetting tasks:", error);
      }
    });
  });

  cron.schedule("0 0 28-31 * *", async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (tomorrow.getDate() === 1) {
      try {
        await Task.updateMany({ category: "month" }, { status: false });
        console.log("Monthly tasks reset successful");
      } catch (error) {
        console.error("Error resetting Monthly tasks:", error);
      }
    }
  });
};
